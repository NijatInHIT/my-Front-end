var table=[0,0,0,0,0,0,0,0,0];
var mySide=0;

window.onload=function(){
	if(!localStorage['1']&&!localStorage['2']){
		localStorage['1']=0;
		localStorage['2']=0;
	}
	$("#player span:eq(0)").html(`playerA ${localStorage['1']}`);
	$("#player span:eq(1)").html(`playerB ${localStorage['2']}`);
	$("li").attr("",function(index){
		this.num=index;
	});

	$("#main>button:lt(2)").click(function(){
		$("#main>button:lt(4)").toggleClass("hidden");
		$("#main>p").toggleClass("hidden");
		$("#main>p:last").addClass("hidden");
	});

	$(".choose").click(function(){
		$(".choose").addClass("hidden");
		$("#main>p:eq(1)").toggleClass("hidden");
		$("#checkboard").removeClass("hidden");
		if(this.innerHTML==="X"){
			mySide=1;
			$(".order:eq(0)").addClass("myturn");
		}else {
			mySide=-1;
		     $(".order:eq(1)").addClass("myturn");
			}
	});

	$("#reset").on("click",function(){
		location.reload();	
	})

}





var ulCheckBoard=document.getElementsByTagName("ul")[0];
ulCheckBoard.onclick=function(_e){
	var ev=_e||window.event;
	var target=ev.target||ev.srcElement;
	var isWinFlag=false;
	if(target.nodeName.toLowerCase()==="li"){
		if(table[target.num]===0){

			if(mySide===1){
				target.innerHTML="X";
				table[target.num]=1;
				isWinFlag=isWin(1);
			}
			else{
				target.innerHTML="O";
				table[target.num]=-1;
				isWinFlag=isWin(-1);
			}
			if(!isWinFlag){
				$(".order").toggleClass("myturn");
				mySide=-mySide;
	
			}else{
				$(".order").removeClass("myturn");
			}
		}
		
	}
}



function isWin(thisSide){
	var arr_2d=[];
	arr_2d.push(table.slice(0,3));
	arr_2d.push(table.slice(3,6));
	arr_2d.push(table.slice(6));
	for(var i=0;i<3;i++){
		var winNum=0;
		for(var j=0;j<3;j++){
			if(arr_2d[i][j]!==thisSide){
				break;
			}
			winNum++;
		}
		if(winNum===3){
			winnerIs(thisSide);
			return true;
		}
	}
	for(var i=0;i<3;i++){
		var winNum=0;
		for(var j=0;j<3;j++){
			if(arr_2d[j][i]!==thisSide){
				break;
			}
			winNum++;
		}
		if(winNum===3){
			winnerIs(thisSide);
			return true;
		}
	}

	if(arr_2d[0][0]===thisSide&&arr_2d[1][1]===thisSide&&arr_2d[2][2]===thisSide){
		winnerIs(thisSide);
		return true;
	}
	if(arr_2d[0][2]===thisSide&&arr_2d[1][1]===thisSide&&arr_2d[2][0]===thisSide){
		winnerIs(thisSide);
		return true;
	}
	return false;
}


function winnerIs(thisSide){
	if(thisSide===-1){
		thisSide=2;
	}
	localStorage[thisSide+'']++;
	$("#player span:nth-child("+thisSide+")").css("color","blue").html(`player${thisSide==1?'A':'B'} ${localStorage[thisSide+'']}`);
	$("#checkboard").addClass("hidden");
	$("#winner").removeClass("hidden")[0].innerHTML+=":<br>Player"+thisSide+"<br>好棒棒哦";
	return;		
}

