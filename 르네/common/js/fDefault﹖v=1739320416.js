function getXMLHttp() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();											// 우선적으로  IE7,파이어폭스 계열을 위한 XMLHTTP가 생성됨
	} else {
		var xmlhttps = new Array("MSXML2.XMLHttp.7.0",
		"MSXML2.XMLHttp.6.0",
		"MSXML2.XMLHttp.5.0",
		"MSXML2.XMLHttp.4.0",
		"MSXML2.XMLHttp.3.0",
		"MSXML2.XMLHttp",
		"Microsoft.XMLHttp");

		for (var i = 0; i < xmlhttps.length; i++) {
			try {
				var req = new ActiveXObject(xmlhttps[i]);						// IE 5,6을 위한 액티브X버젼 XMLHTTP가 생성됨
				alert(xmlhttps[i] + ": 사용가능");
				return req;
			} catch (oError) { }
		}
		return null;
	}
}

function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)) {
		return document.getElementById(objectId); 
	} else if (document.all && document.all(objectId)){
		return document.all(objectId); 
	} else if (document.layers && document.layers[objectId]){
		return document.layers[objectId]; 
	} else {
		return false;
	}
}

// 공백제거
function udf_Trim(keyword){ 
	var st_num; 
	st_num = keyword.indexOf(" ");
	while (st_num != -1){
		keyword = keyword.replace(" ","");
		st_num  = keyword.indexOf(" ");
	}
	return keyword;
}

//Only Korean
function Check_onlyKorean(id_text){
	for ( var i=0; i < id_text.length; i++ ) {
		if ( id_text.charCodeAt(i) < 0xAC00 || id_text.charCodeAt(i) > 0xD7A3){
			if (( id_text.charCodeAt(i) < 12593 || id_text.charCodeAt(i) > 12643 ) && ( id_text.charCodeAt(i) != 32)) {
				return true;
			}
		}
	}	
	return false;
}

function openWindow(theURL,winName,features) { //v2.0
	window.open(theURL,winName,features);
}

function check(keyword) {
	var st_num, key_len;
	st_num = keyword.indexOf(" ");
	while (st_num != -1) {
		keyword = keyword.replace(" ", "");
		st_num  = keyword.indexOf(" ");
	}
	key_len=keyword.length;
	return key_len;
}

function chkNull(obj, msg){
	if(obj.value.split(" ").join("") == ""){
		alert(msg);
		obj.focus();
		return false;
	}else{
		return true;
	}
}

// Null Cheak
function NullChk(str) {
	for (var i=0;i<str.length;i++) {
		if (str.charAt(i)!=' ')
		break
	}
	if (i==str.length)
	return false
}

// 엔터버튼시 동작
function enterKey(obj) {
	if (event.keyCode == 13)
		obj.focus();
}

// 엔터버튼시 폼 서브밋
function enterKeySubmit(formChk) {
	if(event.keyCode == 13)
		formChk();
}

function onlyNumber(){													//	숫자만을 기입받게 하는 방법
	if ((event.keyCode < 48) || (event.keyCode > 57)){
		event.returnValue = false; }
}

function onlyNumberDot(){												//	숫자와 .만 기입받게 하는 방법
	if (event.keyCode != 46){
		if ((event.keyCode < 48) || (event.keyCode > 57)){
			event.returnValue = false;
		}
	}
}

function js_tab_order(arg,nextname,len) {								//	텝이동시
	if (arg.value.length == len) {
		nextname.focus() ;
		return;
	}
}

function formatnumber(v1,v2){											//	숫자와 콤마를 찍을자리수를 매개변수로 받음
	var str = new Array();												//	콤마스트링을 조합할 배열
	v1 = String(v1);													//	숫자를 스트링으로 변환
	for(var i=1;i<=v1.length;i++){										//	숫자의 길이만큼 반복
		if(i%v2) str[v1.length-i] = v1.charAt(v1.length-i);				//	자리수가 아니면 숫자만삽입
		else  str[v1.length-i] = ','+v1.charAt(v1.length-i);			//	자리수 이면 콤마까지 삽입
	}
	return str.join('').replace(/^,/,'');								//	스트링을 조합하여 반환
}

//	이미지 확장자 검사
function checkImage(filename) {
	if (check(filename) == 0) {											//	파일 선택을 안한경우
		return false;
	} else {	// 파일선택을 한 경우
		var ext = filename.split(".");
		var length = ext.length - 1;

		if (ext[length].toUpperCase() == "GIF" || ext[length].toUpperCase() == "JPG" || ext[length].toUpperCase() == "JPEG" || ext[length].toUpperCase() == "PNG")
			return true;
		else
			return false;
	}
}
//	이미지 확장자 검사

//	파일 확장자 검사
function checkFile(filename) {
	if (check(filename) == 0) {											//	파일 선택을 안한경우
		return false;
	} else {	// 파일선택을 한 경우
		var ext					=	filename.split(".");
			ext					=	ext[1].toUpperCase();
		var extArr				=	["PHP","PHP3","PHP4","PHP5","PHP7","EXE","CGI","PHTML","HTML","HTM","PL","SH","ASP","ASPX","JAR","JSP","INC","DLL"];

		if($.inArray(ext, extArr) != -1) {
			return false;
		} else {
			return true;
		}
	}
}
//	파일 확장자 검사

//	엑셀 파일 검사
function checkExcel(filename) {
	if (check(filename) == 0) {											//	파일 선택을 안한경우
		return false;
	} else {	// 파일선택을 한 경우
		var ext					=	filename.split(".");
		var length				=	ext.length - 1;

		if (ext[length].toUpperCase() == "XLS")
			return true;
		else
			return false;
	}
}
//	이미지 확장자 검사

//	업로드 가능 용량 체크
function checkFileSize(objID, limitSize, sizeObj) {
	var iSize					=	0;
	if ($.browser.msie) {
		var objFSO				=	new ActiveXObject("Scripting.FileSystemObject");
		var sPath				=	$(objID)[0].value;
		var objFile				=	objFSO.getFile(sPath);
		iSize					=	objFile.size;
	} else {
		iSize					=	$(objID)[0].files[0].size;
	}

	//	만약 용량 임시 저장 Object 가 존재한다면 용량 임시저장
	if (sizeObj) {
		var tSize				=	$(sizeObj).val();
		var totalSize			=	parseInt(tSize) + parseInt(iSize);
		$(sizeObj).val(totalSize);
	}

	if (parseInt(iSize) > parseInt(limitSize)) {						//	첨부 가능한 용량 보다 크다면
		return false;
	} else {
		return true;
	}
}
//	업로드 가능 용량 체크

//	문자열 치환
function replaceAll(str, searchStr, replaceStr) {
	while (str.indexOf(searchStr) != -1) {
		str = str.replace(searchStr, replaceStr);
	}
	return str;
}
//	문자열 치환

// 글자수 제한
function fByteCount(arg,maxLength,obj)
{
	var str, msg;
	var len						=	0;
	var temp;
	var count					=	0;

	msg							=	arg.value;
	str							=	new String(msg);
	len							=	str.length;

	for ( k = 0 ; k < len ; k++ )
	{
		temp					=	str.charAt(k);

		if ( escape(temp).length > 4 ) {
			count				+=	2;
		} else if ( temp == "\r" && str.charAt(k+1) == "\n" ) {			//	\r\n일 경우
			count				+=	2;
		} else if ( temp != "\n" ) {
			count++;
		}
	}

	if ( obj ) {
		getObject(obj).innerHTML = count;
	}

	if ( parseInt(count) > parseInt(maxLength) ) {
		arg.blur();
		arg.focus();
		alert(maxLength + "자 까지만 입력이 가능합니다."); 
		backChar(arg,maxLength,obj);
	}
}
// 글자수 제한

// 제한된수에 따라 글자 자르기
function backChar(arg,maxLength,obj)
{
	var str, msg;
	var len = 0;
	var temp;
	var count = 0;

	msg = arg.value;
	str = new String(msg);
	len = str.length;

	for(k = 0; k < len; k++) {
		temp = str.charAt(k);

		if(escape(temp).length > 4) {
			count += 2;
		} else if (temp == '\r' && str.charAt(k+1) == '\n') {			//	\r\n일 경우
			count += 2;
		} else if(temp != '\n') {
				count++;
		}

		if(parseInt(count) > parseInt(maxLength)) {
			str = str.substring(0,k);
			break;
		}
	}

	arg.value = str;
	fByteCount(arg,maxLength,obj);
}
// 제한된수에 따라 글자 자르기

//	정규표현식을 이용한 이메일 유효성 검사
function email_check( email ) {
	var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return (email != '' && email != 'undefined' && regex.test(email) === true);
}

// date1 : 기준 날짜(YYYY-MM-DD), date2 : 대상 날짜(YYYY-MM-DD)
function getDateDiff(date1,date2) {
	var arrDate1 = date1.split("-");
	var getDate1 = new Date(arrDate1[0], Number(arrDate1[1])-1, arrDate1[2]);
	var arrDate2 = date2.split("-");
	var getDate2 = new Date(arrDate2[0], Number(arrDate2[1])-1, arrDate2[2]);

	//var getDiffTime = getDate1.getTime() - getDate2.getTime();
	//return Math.floor(getDiffTime / (1000 * 60 * 60 * 24));

	var getDiffTime = (getDate1.getTime() - getDate2.getTime()) / 1000 / 60 / 60 / 24;
	return getDiffTime;
}
// date1 : 기준 날짜(YYYY-MM-DD), date2 : 대상 날짜(YYYY-MM-DD)

//	날짜형으로 변환하는 function
function makeDateFormat(pdate) {
	var yy, mm, dd, yymmdd;
	var ar;

	if (pdate.indexOf(".") > -1) {										//	yyyy.mm.dd
		ar = pdate.split(".");
		yy = ar[0];
		mm = ar[1];
		dd = ar[2];

		if (mm < 10) mm = "0" + mm;
		if (dd < 10) dd = "0" + dd;
	} else if (pdate.indexOf("/") > -1) {								//	yyyy-mm-dd
		ar = pdate.split("/");
		yy = ar[0];
		mm = ar[1];
		dd = ar[2];

		if (mm < 10) mm = "0" + mm;
		if (dd < 10) dd = "0" + dd;
	} else if (pdate.length == 8) {
		yy = pdate.substr(0,4);
		mm = pdate.substr(4,2);
		dd = pdate.substr(6,2);
	}

	yymmdd = yy + "-" + mm + "-"+dd;

	yymmdd = new Date(yymmdd);

	if (isNaN(yymmdd)) {
		return false;
	}
	return yymmdd;
}
//	날짜형으로 변환하는 function

//	Fri Nov 1 00:00:00 UTC+0900 2013 ==> 2013-11-01 형식으로 변환
function makeDateFormat1(pdate) {
	var yy, mm, dd, yymmdd;
	var ar;

	var yy = pdate.getFullYear();

	var mm = pdate.getMonth() + 1;
		if(mm < 10) mm = "0" + mm;

	var dd = pdate.getDate();
		if(dd < 10) dd = "0" + dd;

	yymmdd = yy + "-" + mm + "-" + dd;

	return yymmdd;
}
//	Fri Nov 1 00:00:00 UTC+0900 2013 ==> 2013-11-01 형식으로 변환

/**
 *	달력 jquery datepicker
 *
 *	@param val - 조회일(날짜 ex.2016-01-01)
 *	@return 해당하는 일자
 */
function datePicker(obj) {
	$(obj).datepicker({
		dateFormat				:	"yy-mm-dd",
		monthNames				:	["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		monthNamesShort			:	["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		dayNames				:	["일", "월", "화", "수", "목", "금", "토"],
		dayNamesMin				:	["일", "월", "화", "수", "목", "금", "토"],
		dayNamesShort			:	["일", "월", "화", "수", "목", "금", "토"],
		yearSuffix				:	"년",
		showMonthAfterYear		:	true,
		yearRange				:	'c-100:c+5',
		changeYear				:	true,
		changeMonth				:	true
	}).datepicker('show');
}

/**
 *	달력 Bootstrap datetimepicker
 *
 *	@param val - 조회일(날짜 ex.2016-01-01 13:25)
 *	@return 해당하는 일자
 */
function bootDatePicker(obj) {
	$(obj).datetimepicker({
		language			:	'ko',
		format				:	'yyyy-mm-dd hh:ii',
		autoclose			:	true,
		todayBtn			:	true,
		showMeridian		:	true
	});
}

/**
 *	두 날짜의 차이를 일자로 구합니다.(조회 종료일 - 조회 시작일) jquery datepicker
 *
 *	@param val1 - 조회 시작일(날짜 ex.2015-01-01)
 *	@param val2 - 조회 종료일(날짜 ex.2015-01-01)
 *	@return 기간에 해당하는 일자
 */
function calDateRange(val1, val2) {
	var FORMAT					=	"-";

	val1						=	val1.trim();
	val2						=	val2.trim();

	// FORMAT을 포함한 길이 체크
	if (val1.length != 10 || val2.length != 10)
		return null;

	// FORMAT이 있는지 체크
	if (val1.indexOf(FORMAT) < 0 || val2.indexOf(FORMAT) < 0)
		return null;

	// 년도, 월, 일로 분리
	var start_dt				=	val1.split(FORMAT);
	var end_dt					=	val2.split(FORMAT);

	// 월 - 1(자바스크립트는 월이 0부터 시작하기 때문에...)
	// Number()를 이용하여 08, 09월을 10진수로 인식하게 함.
	start_dt[1]					=	(Number(start_dt[1]) - 1) + "";
	end_dt[1]					=	(Number(end_dt[1]) - 1) + "";

	var from_dt					=	new Date(start_dt[0], start_dt[1], start_dt[2]);
	var to_dt					=	new Date(end_dt[0], end_dt[1], end_dt[2]);

	return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
}

/**
 *	월달력 jquery datepicker
 *
 *	@param val - 조회일(날짜 ex.2015-01-01)
 *	@return 해당하는 일자
 */
function datePickerMonth(input) {
	$(input).datepicker({
		dateFormat				:	"yy-mm",
		monthNames				:	["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		monthNamesShort			:	["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		dayNames				:	["일", "월", "화", "수", "목", "금", "토"],
		dayNamesMin				:	["일", "월", "화", "수", "목", "금", "토"],
		dayNamesShort			:	["일", "월", "화", "수", "목", "금", "토"],
		yearSuffix				:	"년",
		showMonthAfterYear		:	true,
		changeYear				:	true,
		changeMonth				:	true,
		showButtonPanel			:	true,
		currentText				:	"이번달",
		closeText				:	"선택",
		yearRange				:	'c-10:c+10',
		showButtonPanel			:	true,
		onClose: function(dateText, inst) { 
			var year			=	$("#ui-datepicker-div .ui-datepicker-year :selected").val();
			var month			=	parseInt($("#ui-datepicker-div .ui-datepicker-month :selected").val()) + 1;
			if (("" + month).length == 1) { month = "0" + month; }
			var date			=	year + "-" + month;
			$(this).val(date);
		}
	}).datepicker("show");
}

//	파일 다운
function downFile(file, dname, path) {
	procFrame.location.href = "/common/commonPage/downFile.php?path=" + path + "&file=" + file + "&dname=" + dname;
}
//	파일 다운

//	dialog alert
function digAlert(msgTxt, goLink) {
	if (msgTxt) {
		$( "#dialog-message" ).html(msgTxt);
		$( "#dialog-message" ).dialog({
			resizable			:	false,
			modal				:	true,
			closeOnEscape		:	false,
			open				:	function(event, ui) {
				$(".ui-widget-header").remove();														//	상단 타이틀 제거
				$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 버튼 제거
				$(".ui-dialog").css("z-index",10000);
				$(".ui-widget-overlay").css("z-index",9999);
				$("body").css("overflow","hidden");
			},
			close				:	function(event, ui) {
				$("body").css("overflow","auto");														//	close 시 스크롤바 없어지는 현상 막기
			},
			buttons				:	[
				{
					text: "확 인",
					"class" : "btn btn-primary btn-xs",
					click: function() {
						$( this ).dialog( "close" );
						if (goLink) {
							location.href = goLink;
						}
					} 
				}
			]
		});
	} else {
		if (goLink) {
			location.href = goLink;
		}
	}
}
//	dialog alert

//	iframe dialog alert
function digAlertFrame(msgTxt, goLink) {
	if (msgTxt) {
		$( "#dialog-message", parent.document ).html(msgTxt);
		$( "#dialog-message", parent.document ).dialog({
			resizable			:	false,
			modal				:	true,
			title				:	"확인",
			closeOnEscape		:	false,
			position			:	{
				my					:	"center",
				at					:	"center",
				of					:	window.top,
				collision			:	"none"
			},
			open				:	function(event, ui) {
				$(".ui-widget-header").remove();														//	상단 타이틀 제거
				$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 버튼 제거
				$(".ui-dialog").css("z-index",10000);
				$(".ui-widget-overlay").css("z-index",9999);
				$("body").css("overflow","hidden");
			},
			close				:	function(event, ui) {
				$("body").css("overflow","auto");														//	close 시 스크롤바 없어지는 현상 막기
			},
			buttons				:	[
				{
					text: "확 인",
					"class" : "btn btn-primary btn-xs",
					click: function() {
						$( this ).dialog( "close" );
						if (goLink) {
							location.href = goLink;
						}
					} 
				}
			]
		});
	} else {
		if (goLink) {
			location.href = goLink;
		}
	}
}
//	iframe dialog alert

//	dialog confirm
function digConfirm(msg, frm, url, target, frame) {
	alert('okok');
	$( "#dialog-message" ).html(msg);
	$( "#dialog-message" ).dialog({
		resizable			:	false,
		modal				:	true,
		title				:	"확인",
		width				:	"auto",
		height				:	"auto",
		autoResize			:	true,
		closeOnEscape		:	false,
		open				:	function(event, ui) {
			$(".ui-widget-header").remove();														//	상단 타이틀 제거
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 버튼 제거
			$(".ui-dialog").css("z-index",10000);
			$(".ui-widget-overlay").css("z-index",9999);
			$("body").css("overflow","hidden");
		},
		close				:	function(event, ui) {
			$('body').css('overflow','auto');														//	close 시 스크롤바 없어지는 현상 막기
		},
		buttons				:	{
			"확인": function() {
				if (frame == "post") {
					frm.action = url;
					frm.target = target;
					frm.submit();
				} else if (frame == "frame") {
					parent.location.href = url;
				} else if (frame == "top") {
					top.location.href = url;
				} else {
					location.href = url;
				}
			},
			"취소": function() {
				$( this ).dialog( "close" );
			}
		}
	});
}
//	dialog confirm

//	2016.06.14.방준혁 전체체크
function allChecked(el, target_el)
{
	var isChecked	=	$("."+el).prop('checked');
	if(isChecked)	$("."+target_el).prop('checked', true);
	else			$("."+target_el).prop('checked', false);
}

//	2016.06.14.방준혁 체크된 박스수량체크
function checkedCount(target_el)
{
	var count	=	$("."+target_el+":checked").size();
	return count;
}

//	2016.06.14.방준혁 유효성검사 숫자만
function checkNumber(num)
{
	var pattern		=	/^[0-9]+$/;
	if(!pattern.test(num))	return false;
	else					return true;
}

// 유효성검사 한글만
function checkKor(str)
{
	var pattern 	= 	/^[가-힣]{2,}$/g;
	if(!pattern.test(str)){
		return false;
	}else{
		return true;
	}
}

//	소수점 유효성검사
function checkfloat(num, j)
{
	if (j == "") {
		j = 0;
	}

	if(num.match(/\./))
	{
		var numArr	=	num.split(".");

		if(numArr[1] == '') {alert('숫자만 입력가능합니다'); return false;}

		if(!checkNumber(delComma(numArr[0]))) { alert('숫자만 입력가능합니다'); return false;}
		if(!checkNumber(numArr[1])) { alert('숫자만 입력가능합니다'); return false;}

		//소수점 자리수 검사
		if(numArr[1].length > j){
			alert('소수점은 ' + j + '자리까지 입력가능 합니다');
			return false;
		}
	}
	else
	{
		if(!checkNumber(delComma(num))) { alert('숫자만 입력가능합니다'); return false;}
		
	}
	return true;
}

//	1000단위 , 찍기
function number_format(numstr, ret)
{
	numstr = delComma(numstr);
	numstr = setComma(numstr);
	if(ret)
	ret.value = numstr;
	return numstr;
}

function setComma(numstr)
{
	numstr = String(numstr);
	var re0 = /^(-?\d+)(\d{3})($|\..*$)/;
	if (re0.test(numstr))
		return numstr.replace(re0,
			function(str,p1,p2,p3) {
				return setComma(p1) + "," + p2 + p3;
			}
		);
	else
	return numstr;
}

//	콤마삭제
function delComma(numstr) {
	numstr = String(numstr);
	/*
	if (numstr == '') return '0';
	if (numstr == '0') return '0';
	if (numstr == '-0') return '-';
	if (numstr == '0-') return '-0';
	*/
	if (numstr == '') return '';
	if (numstr == '0') return '0';
	if (numstr == '-0') return '-';
	if (numstr == '0-') return '-0';
	//numstr = numstr.replace(/[^\d\.-]/g,'');	숫자가아니면 모두지움
	numstr = String(numstr.match(/^-?\d*\.?\d*/));
	numstr = numstr.replace(/^(-?)(\d*)(.*)/,
		function(str,p1,p2,p3) {
			p2 = (p2>0) ? String(parseInt(p2,10)) : '';
			return p1 + p2 + p3;
		}
	);
	return numstr;
}

//	숫자와 backspace만 입력
function onlyNumber2() {
	if(!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8)) {
		event.returnValue = false;
	}
}

//	페이지이동
function pageMove(url)
{
	location.href=url;
}

//	즐겨 찾기 추가
$(document).ready(function() {
	$('#favorite').on('click', function(e) {
		var bookmarkURL = window.location.href;
		//var bookmarkURL = parent.location.href;							//	상위 URL 적용 시
		var bookmarkTitle = document.title;
		var triggerDefault = false;

		if (window.sidebar && window.sidebar.addPanel) {
			// Firefox version < 23
			window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
		} else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
			// Firefox version >= 23 and Opera Hotlist
			var $this = $(this);
			$this.attr('href', bookmarkURL);
			$this.attr('title', bookmarkTitle);
			$this.attr('rel', 'sidebar');
			$this.off(e);
			triggerDefault = true;
		} else if (window.external && ('AddFavorite' in window.external)) {
			// IE Favorite
			window.external.AddFavorite(bookmarkURL, bookmarkTitle);
		} else {
			// WebKit - Safari/Chrome
			alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
		}

		return triggerDefault;
	});
});
//	즐겨 찾기 추가

//	핸드폰 번호 하이픈(-) 자동입력
function autoHypenPhone(str){
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	if( str.length < 4){
		return str;
	}else if(str.length < 7){
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(3);
		return tmp;
	}else if(str.length < 11){
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(3, 3);
		tmp += '-';
		tmp += str.substr(6);
		return tmp;
	}else{              
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(3, 4);
		tmp += '-';
		tmp += str.substr(7);
		return tmp;
	}
	return str;
}
//	핸드폰 번호 하이픈(-) 자동입력

//	핸드폰 번호 하이픈(-) 자동입력
function phoneAutoHypen(obj) {
	var value					=	$(obj).val();
		value					=	fn(value);
		value					=	value.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
	$(obj).val(value);
}
//	핸드폰 번호 하이픈(-) 자동입력

//	정규식을 이용해 숫자만 추출
function fn(str){
	var res;
	res							=	str.replace(/[^0-9]/g,"");
	return res;
}







function _simpleLoginModalJP()
{
	$.ajax({
		url						:	"/common/commonPage/_simpleLoginJP.php",
		type					:	"POST",
		data					:
		{
			val						:	""
		},
		dataType				:	"html",
		async					:	true,
		success					:	function (data)
		{
			$('#contentDetail').html(data);
		}
	});

	$('#contentDetail').dialog({
		autoOpen				:	true,
		show					:	{effect:'fade', speed: 500},
		hide					:	{effect:'fade', speed: 500},
		modal					:	true,
		title					:	"간편 로그인",
		resizable				:	false,
		width					:	"900",
		height					:	"610",
		autoResize				:	true,
		closeOnEscape			:	true,
		open					:	function(event, ui)
		{
			$(".ui-dialog").children(".ui-dialog-titlebar").remove();
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 버튼 제거
			$(".ui-dialog").css('z-index',10000);
			$(".ui-dialog").css('margin-top',-10);
			//$('.ui-widget-overlay').css('z-index',9999);
			$('body').css('overflow','hidden');
		},
		close: function(event, ui)
		{
			$('body').css('overflow','auto');														//	close 시 스크롤바 없어지는 현상 막기
		}
	});
}


function _simpleLoginModal()
{
	$.ajax({
		url						:	"/common/commonPage/_simpleLogin.php",
		type					:	"POST",
		data					:
		{
			val						:	""
		},
		dataType				:	"html",
		async					:	true,
		success					:	function (data)
		{
			$('#contentDetail').html(data);
		}
	});

	$('#contentDetail').dialog({
		autoOpen				:	true,
		show					:	{effect:'fade', speed: 500},
		hide					:	{effect:'fade', speed: 500},
		modal					:	true,
		title					:	"간편 로그인",
		resizable				:	false,
		width					:	"900",
		height					:	"610",
		autoResize				:	true,
		closeOnEscape			:	true,
		open					:	function(event, ui)
		{
			$(".ui-dialog").children(".ui-dialog-titlebar").remove();
			$(".ui-dialog-titlebar-close", $(this).parent()).hide();								//	close 버튼 제거
			$(".ui-dialog").css('z-index',10000);
			$(".ui-dialog").css('margin-top',-10);
			//$('.ui-widget-overlay').css('z-index',9999);
			$('body').css('overflow','hidden');
		},
		close: function(event, ui)
		{
			$('body').css('overflow','auto');														//	close 시 스크롤바 없어지는 현상 막기
		}
	});
}

function _simpleLoginModalClose()
{
	$('body').css('overflow','');
	$('#contentDetail').dialog('close');
}