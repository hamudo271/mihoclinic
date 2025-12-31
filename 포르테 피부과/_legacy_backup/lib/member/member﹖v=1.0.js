
// 로그인
  $(document).ready(function(){
    $("#loginSubmit").css("cursor","pointer");

    $("#loginSubmit").click(function(){
      loginProcess();
    });

    $('.loginwrap').on('keypress', function(e) {
      if (e.which == 13) {
        loginProcess();
      }
    });
    loginProcess=function(){
      var nowpage = window.location.href;
      var loginpage = nowpage.indexOf("/member/");
      var v1 = $('input[name="GetId"]').val();
      var v2 = $('input[name="GetPw"]').val();
      var v4 = $(":input:checkbox[name=idsave]:checked").val();

        if(!v1){
          alert ("아이디를 입력해주세요.");
          return false;
        }
        if(!v2){
          alert ("비밀번호를 입력해주세요.");
          return false;
        }

        $.ajax({
          type : "POST"
          , url : "/lib/member/member_ajax_proc.php"
          , dataType : "JSON"
          , data : "mode=login&v1="+v1+"&v2="+v2+"&v4="+v4+"&backurl="+refpage_new
          , success : function(res){
            if(res.code=="1"){
               location.href = "../main/main.html";
            } else if(res.code=="2"){	//불량
              alert (res.msg);
              return false;
            } else if(res.code=="3"){	//탈퇴
              alert (res.msg);
              return false;
            } else if(res.code=="4"){	//휴면
              alert (res.msg);
              //휴면계정 풀림 안내 페이지 이동
              location.href = "../main/main.html";
              return false;
            }else{
              alert ("입력하신 아이디 또는 비밀번호가 잘못 되었습니다.");
              return false;
            }
          }
        });
    }
  });
// 로그아웃
	$(document).ready(function(){
		$(".process_logout_anywhere").css("cursor","pointer");
		$(".process_logout_anywhere").click(function(){
				$.ajax({
					type : "POST"
          , url : "/lib/member/member_ajax_proc.php"
					, dataType : "JSON"
					, data : "mode=logout"
					, success : function(res){
						if(res.code=="1"){
							location.replace("../main/main.html");
						}
					}
				});
		});
	});
// 관리자 로그인
	$(document).ready(function(){
		$("#loginSubmitSadmin").css("cursor","pointer");

		$("#loginSubmitSadmin").click(function(){
			SadminloginProcess();
		});

    $('.loginwrapsadmin').on('keypress', function(e) {
      if (e.which == 13) {/* 13 == enter key@ascii */
        //alert("you pressed enter key");
        SadminloginProcess();
      }
    });

		SadminloginProcess=function(){
			var v1 = $('input[name="GetId"]').val();
			var v2 = $('input[name="GetPw"]').val();
			var v3 = $(":input:checkbox[name=idsave]:checked").val();
      var sessionid = "<?=$_SESSION[Session_ID] ?>";

				if(!v1){
					alert ("아이디를 입력해주세요.");
					$('#GetId').focus();
					return false;
				}
				if(!v2){
					alert ("비밀번호를 입력해주세요.");
					$('#GetPw').focus();
					return false;
				}

				$.ajax({
					type : "POST"
          , url : "/lib/member/SadminMember.php"
					, dataType : "JSON"
          , data : {"mode":"login","v1":v1,"v2":v2,"v3":v3,"session_id":sessionid }
					, success : function(res){

						if(res.code=="1"){
							//로그인 성공인 경우
							location.href ="/sadmin/index.html";
						}else{
							alert ("입력하신 아이디 또는 비밀번호가 잘못 되었습니다.");
							return false;
						}
					}
				});
		}

	});
// 관리자 로그아웃
	$(document).ready(function(){
		$(".admin_logout").css("cursor","pointer");
		$(".admin_logout").click(function(){
				$.ajax({
					type : "POST"
          , url : "/lib/member/SadminMember.php"
					, dataType : "JSON"
					, data : "mode=logout"
					, success : function(res){
						if(res.code=="1"){
							location.replace("/sadmin/membership/login.html");
						}
					}
				});
		});
	});
// 아이디,비밀번호 찾기
	$(document).ready(function() {
		$('#btn-submit_id').click(function(e){
			e.preventDefault();	//href 안보내기

      var uname = $('input[name="uname"]').val();
      var utel = $('input[name="utel"]').val();

      if(!uname){
        alert ("이름을 입력해주세요.");
        return false;
      }
      if(!utel){
        alert ("연락처를 입력해주세요.");
        return false;
      }

	  $(".loading-image").show();

      $.ajax({
        type : "POST"
        , url : "/lib/member/member_ajax_proc.php"
        , dataType : "JSON"
        , data : "mode=IdFind&uname="+uname+"&utel="+utel
        , success : function(res){
          if(res.code!=0){
            location.href="find-id-complete.html";
  
          }else{
            view_val = "일치하는 정보가 없습니다.";
            alert (view_val);
          }

		  $(".loading-image").hide();
        }
      });
		});
		//비밀번호 찾기 실행
		$('#btn-passfind').click(function(e){
			e.preventDefault();	//href 안보내기

      var uemail = $('input[name="uemail"]').val();
      var mid = $('input[name="mid"]').val();


      if(!mid){
        alert ("아이디를 입력해주세요.");
        return false;
      }
      if(!uemail){
        alert ("이메일을 입력해주세요.");
        return false;
      }

	  $(".loading-image").show();

      $.ajax({
        type : "POST"
        , url : "/lib/member/member_ajax_proc.php"
        , dataType : "JSON"
        , data : "mode=PassFind&uemail="+uemail+"&mid="+mid
        , success : function(res){
          if(res.code!=0){
            //폼값 비우기
            location.href="../member/find-pw-complete.html";
          }else{
            //팝업오픈
            view_val = "일치하는 정보가 없습니다.";
            alert (view_val);
          }

		  $(".loading-image").hide();
        }
      });
		});
	});
// 회원가입 폼 키업 체크
  $(document).ready(function(){
    // 아이디 유효성 체크 및 중복 검사
    $(document).on("keyup", ".MemberJoinMid", function(){
      var thisinput = $(this);
      var idVal = thisinput.val();
      var idtype = thisinput.attr("type");

        $("#idchk").val('');
        if(idtype=="text"){
          var IdChkExp =  /^[a-z0-9_-]{4,20}$/; // 아이디 검사식
        }else{
          var IdChkExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일검사식
        }


        var msg = "";
        var msgbox = "";

        if(thisinput.next().hasClass('RejectMessage')) msgbox = thisinput.next();
        else{
          var addmsgbox = $("<div>");
          addmsgbox.addClass("RejectMessage text-danger font-rotate mt-1");
          thisinput.after(addmsgbox);
          msgbox = thisinput.next();
        }

        if(idVal.length < 4){
          msg = '※ 아이디는 4글자 이상 가능합니다.';
          msgbox.html(msg);
          return false;
        } else {
          if(!IdChkExp.test(idVal)) {
            if(idtype=="text"){
              msg = '※ 아이디는 영문과 숫자조합만 가능합니다.';
            }else{
              msg = '※ 아이디는 이메일 형식만 가능합니다.';
            }
            msgbox.html(msg);
            return false;
          }
          else
          {
            $.ajax({
              type : "POST"
              , url : "/lib/member/member_ajax_proc.php"
              , dataType : "json"
              , data : "mode=Duplicate&field=mid&value="+idVal
              , beforeSend: function(){  $("#curtainTop").show(); }
              , success : function(res){ $("#curtainTop").hide();
               if(res.code=='1'){
                msg = '※ 중복된 아이디 입니다.';
                msgbox.html(msg);
                return false;
               }else{
                msg = '';
                msgbox.html(msg);
                $("#idchk").val('1');
               }
              }
            });
          }
        }
    });

    //비밀번호 유효성 체크
    $(document).on("keyup","input[name='upasswd']", function(){
      var idVal = $('input[name="upasswd"]').val();
      var idVal_1 = $('input[name="upasswd1"]').val();
      $("#passchk").val('');

        var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
        if(!PwChkExp.test(idVal)) {
          $("#passId").html('영문,숫자 조합하여 6~16자로 입력해주세요.');
          return false;
        }

        if(idVal.length < 6){
          $("#passId").html('글자수가 작습니다. 6글자 이상 입력해주세요.');
        } else {
          $("#passId").html('');
          $("#passchk").val('1');
        }

    });

    $(document).on("keyup","input[name='upasswd1']", function(){
      var idVal = $('input[name="upasswd"]').val();
      var idVal_1 = $('input[name="upasswd1"]').val();
      $("#passchk1").val('');

      if(idVal_1.length > 0){
        if(idVal!=idVal_1) {
          $("#passId_1").html('비밀번호가 일치하지 않습니다.');
          $("#passchk1").val('');
        } else {
          $("#passId_1").html('');
          $("#passchk1").val('1');
        }
      }
    });


    //비밀번호 유효성 체크
    $(document).on("keyup","input[name='new_passwd']", function(){
      var idVal = $('input[name="new_passwd"]').val();

        var PwChkExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*=])(?=.*[0-9]).{3,16}$/;
        if(!PwChkExp.test(idVal)) {
          $("#passId").html('※ 영문,숫자,특수문자 조합하여 6~16자로 입력해주세요.');
          return false;
        }

        if(idVal.length < 6){
          $("#passId").html('※ 글자수가 작습니다. 6글자 이상 입력해주세요.');
        } else {
          $("#passId").html('');
          $("#passchk").val('1');
        }

    });

    $(document).on("keyup","input[name='new_passwd1']", function(){
      var idVal = $('input[name="new_passwd"]').val();
      var idVal_1 = $('input[name="new_passwd1"]').val();

      if(idVal_1.length > 0){
        if(idVal!=idVal_1) {
          $("#passId_1").html('※ 비밀번호가 일치하지 않습니다.');
          $("#passchk1").val('');
        } else {
          $("#passId_1").html('');
          $("#passchk1").val('1');
        }
      }
    });


    //닉네임확인
    $(document).on("keyup","input[name='unickname']", function(){
      var nickVal = $('input[name="unickname"]').val();

        var NickChkExp =  /^[a-z0-9_-]{3,16}$/; // 아이디 검사식
        /*if(!NickChkExp.test(nickVal)) {
          $("#loginNick").html('<b style="color:#ff0000">영문,숫자만 가능</b>');
          return false;


        if(nickVal.length >= 2){

          $.ajax({
            type : "POST"
            , url : "/INC/other_ajax.php"
            , dataType : "json"
            , data : "mode=nickcheck&v="+nickVal
            , beforeSend: function(){  $("#curtainTop").show(); }
            , success : function(res){ $("#curtainTop").hide();
            //alert(res.code);
             if(res.code=='1'){
              $("#loginNick").html('<b style="color:#ff0000">중복</b>');
              $('input[name=nickcheck]').attr('value',"no");
             }else{
              $("#loginNick").html('사용가능');
              $('input[name=nickcheck]').attr('value',"ok");
             }
            }
          });
        }else{
            $("#loginNick").html('<b style="color:#ff0000">2자 이상 입력</b>');
        }
        }*/
    });
  });
// 회원가입 서브밋 체크
	function memberform_chk(){

    if($('#idchk').val()==""){
      alert('아이디가 형식에 맞지 않습니다.');
      $('#mid').focus();
      return false;
    }

    if($('#dupinfo').length){
      if($('#dupinfo').val()==""){
        alert('본인인증을 완료해주세요.');
        return false;
      }
    }
		//sns 로그인이 아닐때만
		if($('#snstype').val()==""){

			if($('#passchk').val()==""){
				alert('비밀번호가 형식에 맞지 않습니다.');
				$('#upasswd').focus();
				return false;
			}
			if($('#passchk1').val()==""){
				alert('비밀번호가 일치하지 않습니다.');
				$('#upasswd1').focus();
				return false;
			}
		}

    //var params = new FormData($("#signform")[0]);
		var params = jQuery("#signform").serialize(); //폼값전송
    $.ajax({
      type : "POST"
      , url : "/lib/member/member_ajax_proc.php"
      //, processData: false
      //, contentType: false
      , dataType : "json"
      , data : params
      //, async: false
      , success : function(res){
        if(res.code!=0){
          res.movepage = "../member/signup-complete.html";
          location.replace(res.movepage);
        }else{
          alert(res.msg);
          return false;
        }
      }
    });
    return false;

	}
// 회원정보수정 서브밋 체크
	function membermodify_chk(){
		//sns 로그인이 아닐때만

		if($('#snstype').val()==""){

			if($('#passchk').val()==""){
				alert('비밀번호가 형식에 맞지 않습니다.');
				$('#upasswd').focus();
				return false;
			}
			if($('#passchk1').val()==""){
				alert('비밀번호가 일치하지 않습니다.');
				$('#upasswd1').focus();
				return false;
			}
		}
    if($('#dupinfo').length){
      if($('#dupinfo').val()==""){
        alert('본인인증을 완료해주세요.');
        return false;
      }
    }

    //var params = new FormData($("#signform")[0]);
		var params = jQuery("#signform").serialize(); //폼값전송
    $.ajax({
      type : "POST"
      , url : "/lib/member/member_ajax_proc.php"
      //, processData: false
      //, contentType: false
      , dataType : "json"
      , data : params
      //, async: false
      , success : function(res){
        if(res.code!=0){
          location.href="../member/modify-complete.html";
        }else{
          alert(res.msg);
        }
      }
    });
    return false;

	}

// 회원탈퇴 서브밋 체크
	function memberout_chk(){
    //var params = new FormData($("#signform")[0]);
		var params = jQuery("#signform").serialize(); //폼값전송
    $.ajax({
      type : "POST"
      , url : "/lib/member/member_ajax_proc.php"
      //, processData: false
      //, contentType: false
      , dataType : "json"
      , data : params
      //, async: false
      , success : function(res){
        if(res.code!=0){
          alert(res.msg);
          location.replace("/main/main.html");
        }else{
          alert(res.msg);
        }
      }
    });
    return false;

	}
// SNS 로그인 콜백
  function SignInCallback(SnsType,v1,v2) {
    // API응답결과 처리
    $.ajax({
      type : "POST"
      , url : "/lib/member/member_ajax_proc.php"
      , dataType : "JSON"
      , data : "mode=SnsLogin&snstype="+SnsType+"&v1="+v1+"&v2="+v2
      , success : function(res){
        if(res.code=="1"){
          opener.location.reload();
          self.close();
        } else if(res.code=="2"){	//불량
          alert (res.msg);
          return false;
        } else if(res.code=="3"){	//탈퇴
          alert (res.msg);
          return false;
        } else if(res.code=="4"){	//휴면
          //alert (res.msg);
          //return false;
          //휴면계정 풀림 안내 페이지 이동
          self.close();
          opener.location.href ="/member/dormant_member.html";
          return false;
        }else{
          if (confirm('가입된 회원정보가 없습니다. 해당 아이디로 회원가입을 하시겠습니까?'))
          {
            opener.location.href ="/member/join.html?snstype="+SnsType+"&snsid="+v1+"&uemail="+v2;
            self.close();
          }else{
            //self.close();
          }
        }
      }
    });
  }
// SNS 로그인 업데이트 콜백
  function SignUpdateCallback(SnsType,v1,v2) {
    $.ajax({
      type : "POST"
      , url : "/lib/member/member_ajax_proc.php"
      , dataType : "JSON"
      , data : "mode=SnsCheck&snstype="+SnsType+"&v1="+v1+"&v2="+v2
      , success : function(res){
        if(res.code=="0"){
          if (confirm('해당 아이디로 간편로그인을 설정 하시겠습니까?'))
          {
            $.ajax({
                  type : "POST"
                  , url : "/lib/member/member_ajax_proc.php"
                  , dataType : "JSON"
                  , data : "mode=SnsUpdate&snstype="+SnsType+"&v1="+v1
                  , success : function(res){
                    alert('연결되었습니다.');
                    opener.location.reload();
                    self.close();
                  }
            });
          }else{
            self.close();
          }
        }else{
          alert('해당 아이디는 이미 사용중입니다.');
          self.close();
        }
      }
    });
  }


	function snsdelete(v,s){
		if(s=="Y"){
			if (confirm(v+' 간편로그인을 해제하시겠습니까?'))
			{
				$.ajax({
					type : "POST"
          , url : "/lib/member/member_ajax_proc.php"
					, dataType : "JSON"
					, data : "mode=SnsDelete&snstype="+v
					, success : function(res){
						alert('연결이 정상적으로 해제되었습니다. 감사합니다.');
						location.reload();
					}
				});
			}
		}else{
			alert('비밀번호가 설정되어 있지 않으면 SNS계정을 해제할수 없습니다.\n비밀번호를 먼저 설정해주세요.');
			$('#new_passwd').focus();
		}
	}

//중복체크
	$(document).on("keyup", ".DuplicatedCheckField", function(){
    var thisinput = $(this);
		var value = thisinput.val();
    var field = thisinput.attr('name');
    var fieldname = thisinput.attr('title');
    var minlength = thisinput.attr('data-minlength');
    if(minlength == undefined || minlength =="") minlength = 0;
    minlength = Number(minlength);

    var msg = "";
    var msgbox = "";

    if(thisinput.next().hasClass('RejectMessage')) msgbox = thisinput.next();
    else{
      var addmsgbox = $("<div>");
      addmsgbox.addClass("RejectMessage");
      thisinput.after(addmsgbox);
      msgbox = thisinput.next();
    }

    thisinput.addClass('CanNotSubmit');
			if(value.length < minlength){
				msg = fieldname+'를 입력해주세요.';
        msgbox.html(msg);
			} else {


        $.ajax({
          type : "POST"
          , url : "/lib/member/member_ajax_proc.php"
          , dataType : "json"
          , data : {
            "mode":"Duplicate",
            "value":value,
            "field":field
            }
          , success : function(res){ $("#curtainTop").hide();
           if(res.code=='0'){
             thisinput.removeClass('CanNotSubmit');
             thisinput.siblings('.RejectMessage').remove();
           }else{
              msgbox.html(res.msg);
           }
          }
        });
			}
  });



// 관리자, 비밀번호초기화
  function PasswordReset(uid){
    if(confirm('비밀번호를 초기화하시겠습니까?')){
      $.ajax({
        type : "POST"
        , url : "/lib/member/member_ajax_proc.php"
        , dataType : "JSON"
        , data : "mode=PasswordReset&uid="+uid
        , success : function(res){
          if(res.code!=0){
            view_val = "비밀번호가 "+res.msg+" 로 초기화 되었습니다.";
            alert (view_val);

          }else{
            view_val = "일치하는 정보가 없습니다.";
            alert (view_val);
          }
        }
      });
    }
  }


// 휴대폰 인증, 이메일 인증 (사용시 일부 수정필요)
  function emailcodesend(v){
    if(v){
      $.ajax({
        type : "POST"
        , url : "/lib/member/member_ajax_proc.php"
        , dataType : "json"
        , data : "mode=EmailCodeSend&v="+v
        , success : function(res){
          if(res.code!=0){
            $('#uptel').prop('readonly',true);
            $('.emailconfirm1').hide();
            $('.emailconfirm2').show();
            $('.emailconfirm3').hide();
            timerstart(180);
            alert (res.msg);
          }else{
            alert (res.msg);
          }
        }
      });
    }else{
      alert('Please enter your mobile phone number.');
      $('#uptel').focus();
    }
  }
  function emailcodeconfirm(v){
    if(v){
      $.ajax({
        type : "POST"
        , url : "/lib/member/member_ajax_proc.php"
        , dataType : "json"
        , data : "mode=EmailCodeConfirm&v="+v
        , success : function(res){
          if(res.code!=0){
            $('.emailconfirm1').hide();
            $('.emailconfirm2').hide();
            $('.emailconfirm3').hide();
            $('.emailconfirm4').show();
            $('.emailconfirm5').hide();
            $('#mailidentity').val('Y');
            $('#emailiden').prop('readonly',true);
            $('#uptel').prop('readonly',true);
            alert (res.msg);
          }else{
            alert (res.msg);
          }
        }
      });
    }else{
      alert('인증번호를 입력해주세요.');
    }
  }
  function timerstart(v){
    var timer_time = v;

    if(timer_time>0){

      var timer_x = setInterval(function(){
        timer_hour = String(parseInt(timer_time/3600));
        timer_time1 = timer_time - (timer_hour*3600);
        timer_min = String(parseInt(timer_time1/60));
        timer_sec = String(timer_time1%60);
        if(timer_hour.length==1) timer_hour = "0"+timer_hour;
        if(timer_min.length==1) timer_min = "0"+timer_min;
        if(timer_sec.length==1) timer_sec = "0"+timer_sec;

        document.getElementById('counterm').innerHTML = timer_min + ":" + timer_sec;
        timer_time--;

        if (timer_time < 0)
        {
          clearInterval(timer_x);
          $('.emailconfirm2').hide();
          $('.emailconfirm3').show();

          document.getElementById('counterm').innerHTML = "입력시간 만료";

        }
      }, 1000);

    }
  }
// 휴대폰 인증, 이메일 인증 (사용시 일부 수정필요)


// 비밀번호 확인
  function PasswordCheck(){
    if($('#upasswd').val()==""){
      alert('비밀번호를 입력해주세요.');
      $('#upasswd').focus();
      return false;
    }

		var params = jQuery("#signform").serialize(); //폼값전송
    $.ajax({
      type : "POST"
      , url : "/lib/member/member_ajax_proc.php"
      //, processData: false
      //, contentType: false
      , dataType : "json"
      , data : params
      //, async: false
      , success : function(res){
        if(res.code!=0){
          $('#signform').attr('onsubmit','');
          $('#signform').submit();
        }else{
          alert(res.msg);
          return false;
        }
      }
    });
    return false;
  }