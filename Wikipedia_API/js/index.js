
var oClose=document.getElementById('cross');
oClose.onclick=function(){
	
	
	
	$("#form1").toggleClass("open");
	if($("#form1").hasClass("open")){
		$("#search").focus();
	}
	else{
		$(".piece").addClass("notshow");
		$("#main").removeClass("got");
   $("#search").val("");
	}
	
}

document.onkeydown=function(e){
	var keyNum=window.event?e.keyCode:e.which;
	if(keyNum==13){
		$(".piece").addClass("notshow");
		if($("#form1").hasClass("open")){
			var oInput=document.getElementById("search");
			if(oInput.value!==''){
					var keyWord=$("#search").val();
 					var api='https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
 					var callBack='&callback=JSON_CALLBACK';
 					var page='https://en.wikipedia.org/?curid=';
					$.ajax({
  					     url: ""+api+keyWord+callBack,
   					     type: 'GET',
     					 dataType: 'JSONP',//here
      					 success: function (data) {
      					 	if(data.query){
      					 		goSearch(data.query.pages);
      					 	}
      					 	else{
      					 		alert("noFound");
      					 	}
      					 },
      					 complete:function(a,b){
      					 }
   
   				});
				
			}
		}
	}
}

// function loadXML(){
// 	var xmlhttp;
// 	if(window.XMLHttpRequest){
// 		xmlhttp= new XMLHttpRequest();
// 	}
// 	else{
// 		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	xmlhttp.onreadystatechange=function(){

// 		if(xmlhttp.readyState==4&&xmlhttp.status==200){
// 			return $.parseJSON(xmlhttp.responseText);
// 		}
// 		else{
// 			console.log(xmlhttp.status);
// 		}
// 	}
// 	var keyWord=$("#search").val();
// 	var api='https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
// 	var callBack='&callback=JSON_CALLBACK';
// 	var page='https://en.wikipedia.org/?curid=';

// 	xmlhttp.open("GET",""+api+keyWord+callBack,true);
// 	xmlhttp.send();
// }


function goSearch(index){
	$("#main").addClass("got");
	$("#result").css("display","block");
	var i=1;
	var page='https://en.wikipedia.org/?curid=';
	$.each(index,function(a,b){
		$(".piece:eq("+(i-1)+")").removeClass("notshow");
		$(".piece:nth-child("+i+")").attr("href",page+index[a]['pageid']);
		$(".piece:nth-child("+i+") h2")[0].innerHTML=index[a]['title'];
		$(".piece:nth-child("+i+") p")[0].innerHTML=index[a]['extract'];
		if(index[a]["pageimage"]){
			$(".piece:nth-child("+i+") img").attr("src",index[a]["thumbnail"]["source"]);
			$(".piece:nth-child("+i+") img").attr("alt",index[a]["pageimage"]);
		}
		else{
			$(".piece:nth-child("+i+") img").css("opacity","0");
		}
		i=i+1;
	});

	
}


    // search.removeClass('fullHeight');
    // var title = input.val();
    // var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    // var cb = '&callback=JSON_CALLBACK';
    // var page = 'https://en.wikipedia.org/?curid=';