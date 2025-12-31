import html.parser
import json
import re

class ReneParser(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_tbody = False
        self.in_tr = False
        self.in_td = False
        self.current_row = []
        self.data = []
        self.current_cell_content = []

    def handle_starttag(self, tag, attrs):
        if tag == 'tbody':
            self.in_tbody = True
        elif tag == 'tr' and self.in_tbody:
            self.in_tr = True
            self.current_row = []
        elif tag == 'td' and self.in_tr:
            self.in_td = True
            self.current_cell_content = []

    def handle_endtag(self, tag):
        if tag == 'tbody':
            self.in_tbody = False
        elif tag == 'tr' and self.in_tbody:
            self.in_tr = False
            if self.current_row:
                self.data.append(self.current_row)
        elif tag == 'td' and self.in_tr:
            self.in_td = False
            self.current_row.append("".join(self.current_cell_content).strip())

    def handle_data(self, data):
        if self.in_td:
            self.current_cell_content.append(data)

def parse_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parser = ReneParser()
    parser.feed(content)
    
    # Process data to handle empty cells (inheriting from above) and structure it
    structured_data = []
    
    # Track current categories
    current_middle_category = ""
    current_small_category = ""
    
    for row in parser.data:
        # Expected row length is 11
        if len(row) < 11:
            continue
            
        middle_cat = row[0]
        small_cat = row[1]
        
        if middle_cat:
            current_middle_category = middle_cat
        if small_cat:
            current_small_category = small_cat
            
        item = {
            "middleCategory": current_middle_category,
            "smallCategory": current_small_category,
            "code": row[2],
            "name": row[3],
            "cost": row[4], # 4th index is usually empty in the file shown? Let's re-verify indices.
            "minCost": row[5],
            "maxCost": row[6],
            "materialIncluded": row[7],
            "drugIncluded": row[8],
            "remarks": row[9],
            "lastUpdated": row[10]
        }
        
        # Wait, indices in my previous thought:
        # 0: Mid Cat
        # 1: Small Cat
        # 2: Code
        # 3: Name
        # 4: Cost (Main) ?
        # 5: Min Cost ?
        # 6: Max Cost ?
        
        # Let's double check the HTML sample again.
        # Row 1 line 772:
        # td 0: 피부치료
        # td 1: 색소레이저
        # td 2: (empty) -> Code
        # td 3: 색소레이저(아이리스) -> Name
        # td 4: (empty) -> Cost?
        # td 5: 10만원 -> Min Cost? Or is "10만원" the "비용"?
        
        # Header (764-768):
        # <th>비용</th>
        # <th>최저비용</th>
        # <th>최고비용</th>
        
        # Row 1 (772):
        # td 4: empty
        # td 5: 10만원
        # td 6: empty
        
        # Something is fishy. Let's look at the header `colspan`.
        # Line 757: <th colspan="5" rowspan="1">진료비용 등 (단위: 원)</th>
        # Then next row lines 764-768:
        # <th>비용</th>
        # <th>최저비용</th>
        # <th>최고비용</th>
        # <th>치료재료대<br/>포함여부</th>
        # <th>약제비<br/>포함여부</th>
        
        # So yes, indices:
        # 0: Mid
        # 1: Small
        # 2: Code
        # 3: Name
        # 4: Cost
        # 5: Min Cost
        # 6: Max Cost
        # 7: Material
        # 8: Drug
        # 9: Remarks
        # 10: Updated
        
        # In row 1:
        # td 4 is empty.
        # td 5 is "10만원".
        # So "10만원" is in "Min Cost"?
        
        # Let's check another row.
        # Row 893 (Potenza):
        # td 0,1,2 empty
        # td 3: 포텐자레이저 1회
        # td 4: empty
        # td 5: 28만원
        # td 6: empty
        
        # It seems "Cost" (Main) is often empty and they use "Min Cost" for single values?
        # Or maybe I am miscounting the `td`s in the file view.
        # Let's print the raw rows first to debug in my mind.
        # Line 777 is empty (td 4).
        # Line 778 is 10만원 (td 5).
        
        # Actually, let's map it blindly and I'll inspect the JSON to decide which field to use for display.
        # It's likely `cost` is column 4, `minCost` is 5, `maxCost` is 6.
        # If column 4 is empty and 5 has value, display 5?
        
        structured_data.append(item)

    # Group by Middle Category -> Small Category (optional, or just list)
    # The React component expects grouping by Category.
    # Let's Group by "Middle Category".
    
    grouped = {}
    for item in structured_data:
        mid = item['middleCategory']
        if mid not in grouped:
            grouped[mid] = []
        grouped[mid].append(item)
        
    final_output = []
    for mid, items in grouped.items():
        final_output.append({
            "category": mid,
            "items": items
        })
        
    return final_output

if __name__ == '__main__':
    result = parse_file('/Users/dooya8787/Desktop/미호/르네/uninsured/index.html')
    output_path = '/Users/dooya8787/Desktop/미호/src/pages/home/data.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"Data written to {output_path}")
