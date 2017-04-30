function getPosTop(i){
	return (i+1)*20+100*i;
}

function getPosLeft(j){
	return (j+1)*20+100*j;

}

function getNumberBgColor(m){
	switch(m){
		case 2:return "#eee4da";break;
		case 4:return "#eda0c8";break;
		case 8:return "#f2b179";break;
		case 16:return "#f59563";break;
		case 32:return "#f67c5f";break;
		case 64:return "#f65e3b";break;
		case 128:return "#edcf72";break;
		case 256:return "#edcc61";break;
		case 512:return "#9c0";break;
		case 1024:return "#33b5e5";break;
		case 2048:return "#09c";break;
		case 4096:return "#a6c";break;
		case 8192:return "#93c";break;

	}
	return 'black';

}

function getNumberColor(m){
	if(m<10){
		return '#776e65';
	}
	return 'white';
}

function getOneNumber(){                  //zhe li ke yi you hua 
	if(noSpace()===false){
		return false;
	}

	var X=parseInt(Math.floor(Math.random()*4));
	var Y=parseInt(Math.floor(Math.random()*4));

	while(true){
		if(board[X][Y]==0){
			break;
		}
		else{
			X=parseInt(Math.floor(Math.random()*4));
			Y=parseInt(Math.floor(Math.random()*4));
		}
	}
	var newNumber;
	if(Math.random()<0.5){
		newNumber=2;
	}
	else{
		newNumber=4;
	}


	board[X][Y]=newNumber;
	showNumberAnimation(X,Y,newNumber);
	return true;

}

function noSpace(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]==0){
				return true;
			}
		}
	}
	return	false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveLeft(){
	if(canMoveLeft()){
		for(var i=0;i<4;i++){
			for(var j=1;j<4;j++){
				var flag=true
				if(board[i][j]!=0){
					for(var k=0;k<j;k++){
						if(flag==true&&board[i][k]==0&&noBlock(i,j,k)){
							showMoveAnimation(i,j,i,k);
							board[i][k]=board[i][j];
							board[i][j]=0;
							break;
						}
						else if(flag==true&&board[i][k]==board[i][j]&&noBlock(i,j,k)){
							showMoveAnimation(i,j,i,k);
							board[i][k]+=board[i][j];
							board[i][j]=0;
							break;
						}
					}
				}
			}
		}
	}



	setTimeout(updataBoardView,200);
}

function canMoveLeft(){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j]!=0){
    			if(board[i][j-1]==0||board[i][j]==board[i][j-1]){
					return true;
				}
			}
			
		}
	}
	return false;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveUp(){
	if(canMoveUp()){
		for(var i=1;i<4;i++){
			for(var j=0;j<4;j++){

				if(board[i][j]!=0){
					for(var k=0;k<i;k++){
						 if(board[k][j]==0&&noBlockDown(i,j,k)){
							showMoveAnimation(i,j,k,j);
							board[k][j]=board[i][j];
							board[i][j]=0;
							break;
						}
						 else if(board[k][j]==board[i][j]&&noBlockDown(i,j,k)){
							showMoveAnimation(i,j,k,j);
							board[k][j]+=board[i][j];
							board[i][j]=0;
							break;
						}
					}
				}
			}
		}
	}



	setTimeout(updataBoardView,200);
}


function canMoveUp(){
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]!=0){
    			if(board[i-1][j]==0||board[i][j]==board[i-1][j]){
					return true;
				}
			}
			
		}
	}
	return false;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function moveRight(){
	if(canMoveRight()){
		for(var i=0;i<4;i++){
			for(var j=2;j>=0;j--){
				if(board[i][j]!=0){
					for(var k=3;k>j;k--){
						if(board[i][k]==0&&noBlock(i,k,j)){
							showMoveAnimation(i,j,i,k);
							board[i][k]=board[i][j];
							board[i][j]=0;
							break;
						}
						else if(board[i][k]==board[i][j]&&noBlock(i,k,j)){
							showMoveAnimation(i,j,i,k);
							board[i][k]+=board[i][j];
							board[i][j]=0;
							break;
						}
					}
				}
			}
		}
	}



	setTimeout(updataBoardView,200);

}
function canMoveRight(){
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){
			if(board[i][j]!=0){
    			if(board[i][j+1]==0||board[i][j]==board[i][j+1]){
					return true;
				}
			}
			
		}
	}
	return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function moveDown(){
	if(canMoveDown()){
		for(var i=2;i>=0;i--){
			for(var j=0;j<4;j++){

				if(board[i][j]!=0){
					for(var k=3;k>i;k--){
						 if(board[k][j]==0&&noBlockDown(k,j,i)){
							showMoveAnimation(i,j,k,j);
							board[k][j]=board[i][j];
							board[i][j]=0;
							break;
						}
						 else if(board[k][j]==board[i][j]&&noBlockDown(k,j,i)){
							showMoveAnimation(i,j,k,j);
							board[k][j]+=board[i][j];
							board[i][j]=0;
							break;
						}
					}
				}
			}
		}
	}



	setTimeout(updataBoardView,200);

}

function canMoveDown(){
	for(var i=0;i<3;i++){
		for(var j=0;j<4;j++){
			if(board[i][j]!=0){
    			if(board[i+1][j]==0||board[i+1][j]==board[i][j]){
					return true;
				}
			}
			
		}
	}
	return false;

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function noBlock(i,j,k){                              //zhe li you ken 
	for(var m=k+1;m<j;m++){
		if(board[i][m]!=0){
			return	false;
		}
	}
	return true;
}

function noBlockDown(i,j,k){
	for(var m=k+1;m<i;m++){
		if(board[m][j]!=0){
			return false;
		}
	}
	return true;
}
