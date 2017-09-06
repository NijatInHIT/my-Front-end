var oBtn=document.getElementById("btns");
var oInp=document.getElementById("input");
var oAsr=document.getElementById("answer");
var lmt_flag=false;
var AC_flag=false;
var result=null;
oBtn.onmousedown=caculator;
document.onkeydown=caculator;

function caculator(_e){
	var e=_e||window.event;
	var target;
	if(e.__proto__==KeyboardEvent.prototype&&e.key.match(/[0-9\.\+\-\*]| |Enter/)){
		if(e.key=='Enter'){
			target=$("button:contains('=')")[0];
		}
		else if(e.keyCode==32){
			target=$("button:contains('AC')")[0];
		}
		else{
			target=$("button:contains("+e.key+")")[0];
		}
		
	}
	else if(e.__proto__==MouseEvent.prototype){
		target=e.target||e.srcElement;
	}
	else{
		return;
	}

	if(target.nodeName.toLowerCase()==='button'){
		target.className+=' press';
		if(target.innerHTML==='AC'){
			oAsr.innerHTML='0';
			oInp.innerHTML='0';
			AC_flag=true;
			return;
		}
		if(lmt_flag===true||AC_flag===true){
			oAsr.innerHTML='';
			oInp.innerHTML='';
			lmt_flag=false;
			AC_flag=false;
		}
		if(target.innerHTML==='='){
			if(oInp.innerHTML===''){
				return;
			}

			try  {
			     	eval(oInp.innerHTML);
			     	oInp.innerHTML=oAsr.innerHTML=eval(oInp.innerHTML);

			     }

			catch(exception) {
			     	oAsr.innerHTML='ERROR INPUT';
				    oInp.innerHTML='';
				    AC_flag=true;
			     }


			// if(eval(oInp.innerHTML)){
			// 	oInp.innerHTML=oAsr.innerHTML=eval(oInp.innerHTML);
			// }
			// else{
			// 	oAsr.innerHTML='ERROR INPUT';
			// 	oInp.innerHTML='';
			// }
			return;
		}
		if(oAsr.innerHTML.match(/[/+-/*/]/)){
			oAsr.innerHTML='';
		}
		if(checkLength(oAsr.innerHTML)){
			if(target.innerHTML.match(/[/+-/*/]/)){
				oInp.innerHTML+=target.innerHTML;
				oAsr.innerHTML=target.innerHTML;
				return;

			}
			oAsr.innerHTML+=target.innerHTML;
		}
		else {
			if(target.innerHTML.match(/[/+-/*/]/)){
				oInp.innerHTML=oAsr.innerHTML+target.innerHTML;
				oAsr.innerHTML='0';
				return;
			}
			oAsr.innerHTML='0';
			oInp.innerHTML='OUT OF LIMITED'
			lmt_flag=true;
			return;
		}
		oInp.innerHTML+=target.innerHTML;
	}
}

document.onmouseup=function(){
	$("button").removeClass("press");
}
document.onkeyup=function(){
	$("button").removeClass("press");
}

function checkLength(str){
	if(str.length>8){
		return false;
	}
	else{return true;}
}