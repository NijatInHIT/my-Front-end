var board= new Array();
var score=0;
window.onload=function(){


 newGame();
 var oBtn=document.getElementById('newgamebutton');
 oBtn.onclick=newGame;    // xie jin qu 
}

function newGame(){
	alert('newgame');
	init();
	getOneNumber();
	getOneNumber();

}




function init(){
	for(var i=0;i<4;i++){
		board[i]=new Array();
		for(var j=0;j<4;j++){
			var str='grid-cell-'+i+'-'+j;
			var gridCell=document.getElementById(str);
			gridCell.style.left=getPosLeft(j)+'px';
			gridCell.style.top=getPosLeft(i)+'px';
			board[i][j]=0;
		}
	}


	updataBoardView();
}


function updataBoardView(){

	$('.number-cell').remove();

	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'"+"></div>");
			var thisCell=document.getElementById("number-cell-"+i+"-"+j);
			if(board[i][j]==0){
				thisCell.style.height='10px';
				thisCell.style.width='10px';
				thisCell.style.top=getPosTop(i)+50+'px';    //zhe li wei shenme yao jia ne ?
				thisCell.style.left=getPosLeft(j)+50+'px';
				thisCell.style.backgroundColor="red";
			}
			else{
				thisCell.style.height='100px';
				thisCell.style.width='100px';
				thisCell.style.top=getPosTop(i)+'px';    //zhe li wei shenme yao jia ne ?
				thisCell.style.left=getPosLeft(j)+'px';
				thisCell.style.backgroundColor=getNumberBgColor(board[i][j]);
				thisCell.style.color=getNumberColor(board[i][j]);
				thisCell.innerHTML=board[i][j];
				

			}


		}
	}


document.onkeydown=function(event){
	switch(event.keyCode){
		case 37:{									// left
			if(moveLeft()==false){
				return;
			}
			getOneNumber();
			isGameOver();
			break;

		}
		case 38:{									// up
			if(moveUp()==false){	
				return;
			}
			getOneNumber();
			isGameOver();
			break;
		}
		case 39:{									// right
			if(moveRight()==false){
				return;
			}
			getOneNumber();
			isGameOver();
			break;
		}
		case 40:{                                   // down
			if(moveDown()==false){
				return;
			}
			getOneNumber();
			isGameOver();
			break;
		}
		default:{
			break;
		}
	}
}


function isGameOver(){
	//
}

















}