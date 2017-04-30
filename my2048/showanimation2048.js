function showNumberAnimation(X,Y,newNumber){
	var thisCell=document.getElementById("number-cell-"+X+"-"+Y);
	thisCell.style.backgroundColor=getNumberBgColor(newNumber);
	thisCell.style.color=getNumberColor(newNumber);
	thisCell.innerHTML=newNumber;
	var $cell=$(thisCell);
	$cell.animate({
		width:'100px',
		height:'100px',
		top:getPosTop(X)+'',
		left:getPosLeft(Y)+''

	},250);


}


function showMoveAnimation(fromI,fromJ,toI,toJ){
	var $cell=$('#number-cell-'+fromI+'-'+fromJ);   //忘了#号啊
	$cell.animate({
		top:getPosTop(toI),
		left:getPosLeft(toJ)
	},200);
}

// function showMoveAnimation( fromx , fromy , tox, toy ){

//     var numberCell = $('#number-cell-' + fromx + '-' + fromy );
//     numberCell.animate({
//         top:getPosTop(tox),
//         left:getPosLeft(toy )
//     },200);
// }