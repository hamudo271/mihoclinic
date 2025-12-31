function file_proc(send_name,send_type,event) {

  var form_data = new FormData();
  var limit_cnt = parseInt($("#"+send_name).data("limit"));
  var now_cnt = parseInt($("#"+send_name).data("now"));

  if(event != undefined){
    var totalfiles = event.originalEvent.dataTransfer.files;
  }else{
    var totalfiles = document.getElementById(send_name).files;//.length;
  }

  var upload_cnt = parseInt(totalfiles.length);

  if (limit_cnt!=null && now_cnt!=null) {
    if (limit_cnt!="0") {
      if ((now_cnt+upload_cnt) > limit_cnt) {
        alert('업로드 갯수를 초과 했습니다.\n최대 '+limit_cnt+'개 까지 업로드 가능합니다.');
        $("#"+send_name).val("");
        return false;
      }
    }
  }
  for (var index = 0; index < totalfiles.length; index++) {
    //23.04.17. 프론트 파일 사이즈 제한 체크 추가 (HHH)
    if(totalfiles[index].size > (1024*1024*20)){
      alert('파일 크기는 20M를 넘을수 없습니다.');
      $("#"+send_name).val("");
      return false;
    }
    form_data.append("files[]", totalfiles[index]);
  }

  form_data.append("check_key",check_key);
  form_data.append("send_type",send_type);
  form_data.append("tablename",tablename);

  $("#loading_area").css({"display":"block"});
  $(".loading-image").show();

  var imagtype = "";

  $.ajax({
    url: '/lib/file/temp_file_proc.php',
    type: 'post',
    data: form_data,
    contentType: false,
    processData: false,
    success: function (data, status) {

      var json = eval("(" + data + ")");

      if (json.result=="true") {
        $("#"+send_name).val("");
        var add_html="";
        var l_cnt=parseInt($("#file_name_"+send_type+" tr").length)+1;

        if (json.file_multi_type=="1") {
          imagtype = "-single";
          $("#file_name_"+send_type).empty();
        } else {
          $("#"+send_name).data('now', (now_cnt+upload_cnt));
        }

        $.each(json.msg,function(key,state){
          if (json.file_type=="1") {
            add_html = add_html+
              "<li class=\"editor-image"+imagtype+"-item\" id=\"temp_li_"+state.tmp_no+"\" data-id=\""+state.tmp_no+"\" data-type=\"tmp\">"+
                "<div class=\"editor-image"+imagtype+"-thumb\"><img src=\"/upload/tmp/"+state.file_name+"\" alt=\"\"></div>"+
                "<input type=\"button\" class=\"editor-image-delete AttachfileDelbutton\" onclick=\"img_del('temp','"+send_type+"','"+state.tmp_no+"');\"></button>"+
              "</li>";
          } else if (json.file_type=="2") {
            add_html = add_html+
              "<tr class=\"multi_tr\" id=\"temp_li_"+state.tmp_no+"\" data-id=\""+state.tmp_no+"\" data-type=\"tmp\">"+
                "<td>"+l_cnt+"</td>"+
                "<td style=\"text-align:left;\">"+
                  "<i class=\"mr_05 xi-trash\" style=\"cursor:pointer;font-size: 13px;background: red;color: #fff;padding: 4px;border-radius: 2px;\" onclick=\"img_del('temp','"+send_type+"','"+state.tmp_no+"');\"></i>"+
                  "<a href=\"/upload/tmp/"+state.file_name+"\" download=\""+state.real_file_name+"\">"+state.real_file_name+"</a>"+
                "</td>"+
                "<td>"+state.file_size+"k</td>"+
                "<td>"+state.file_mime+"</td>"+
              "</tr>";
            l_cnt++;
          }
        });

        $("#file_name_"+send_type).append(add_html);
      } else {
        $("#"+send_name).val("");
        alert(json.msg);
      }

      $("#loading_area").delay(300).fadeOut();
      $(".loading-image").delay(300).fadeOut();
    },
    error:function(data,status){
      alert('upload error.');
      $("#loading_area").delay(300).fadeOut();
      $(".loading-image").delay(300).fadeOut();
    }
  });
}

function img_del(select_type,select_send_type,select_no) {

  if(confirm("삭제하시겠습니까?")){
    $("#loading_area").css({"display":"block"});
    $(".loading-image").show();

    $.ajax({
      type : "POST",
      url : "/lib/file/file_delete.php",
      data :  { "tablename" : tablename , "table_type" : select_type , "send_type" : select_send_type , "select_uid" : select_no },
      success : function(data, status)
      {
        var json = eval("(" + data + ")");

        if (json.result=="true") {
          var file_re_list="N";

          if ($("#"+select_type+"_li_"+select_no).hasClass('multi_tr')) {
            file_re_list="Y";
          }

          $("#"+select_type+"_li_"+select_no).remove();

          if (file_re_list=="Y") {
            $("#file_name_"+select_send_type).children().each(function(index) {
              $(this).find('td').first().html(index + 1)
            });
          }

          var now_cnt = parseInt($("#file"+select_send_type+"_name").data("now"));
          $("#file"+select_send_type+"_name").data('now', (now_cnt-1));
        } else {
          alert('다시 시도해 주세요.');
        }

        $("#loading_area").delay(300).fadeOut();
        $(".loading-image").delay(300).fadeOut();
      },
      error : function(err)
      {
        alert(err.responseText);
        $("#loading_area").delay(300).fadeOut();
        $(".loading-image").delay(300).fadeOut();
        return false;
      }
    });
  }
}

$(function(){
  //드래그앤드랍
  $(".file-upload-drop-box").on("dragenter", function(e){
      e.preventDefault();
      e.stopPropagation();
  }).on("dragover", function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("background-color", "#FFD8D8");
  }).on("dragleave", function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("background-color", "#FFF");
  }).on("drop", function(e){
      e.preventDefault();

      file_proc($(this).attr('data-name'),$(this).attr('data-type'),e);

      $(this).css("background-color", "#FFF");

  });
});

/*
2022-12-15 업로드 파일 불러오기
file_type, 스킨 종류, 슬라이드 여부
*/
function load_file_list(select_file_type,select_skin_type,select_slide_type) {
  $("#loading_area").css({"display":"block"});
  $(".loading-image").show();

  $.ajax({
    type : "POST",
    url : "/lib/file/file_load_ajax.php",
    data :  { "tablename" : tablename , "uid" : uid , "file_type" : select_file_type , "skin_type" : select_skin_type },
    success : function(data, status)
    {
      var json = eval("(" + data + ")");

      if (json.result=="true") {
        var add_html="";

        if (select_skin_type=="") {
          $.each(json.msg,function(key,state){
            add_html=add_html+
              "<a href=\"/lib/file/download.php?uid="+state.file_uid+"&filename="+state.file_name+"&file_type="+state.file_type+"\">"+
                "<i class=\"xi-file-download text-color-1\"></i>"+
                state.real_file_name+
                "("+state.fileadd_sizetext+")"+
              "</a><br>";
          });
        } else {
          add_html=json.msg_skin;
        }
        $("#file_list_"+select_file_type).html(add_html);

        if (select_slide_type!="") {
          console.log('Slide!!!');
        }

      } else {
        alert('다시 시도해 주세요.');
      }

      $("#loading_area").delay(300).fadeOut();
      $(".loading-image").delay(300).fadeOut();
    },
    error : function(err)
    {
      alert(err.responseText);
      $("#loading_area").delay(300).fadeOut();
      $(".loading-image").delay(300).fadeOut();
      return false;
    }
  });
}