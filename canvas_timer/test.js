var color=['rgb(90,13,67)','rgb(255,255,255)','rgb(244,13,100)','rgb(179,197,135)','rgb(18,53,85)','rgb(148,41,135)','rgb(89,61,67)','rgb(175,18,88)','rgb(24,205,173)','rgb(114,83,52)',]
var pic_table;
var balls=[];
function print_location(ctx){
	delete differents['9'];
	for(var i in differents){
	//	add_balls(i,differents[i]);
		pic_print(i,differents[i],ctx);
	}
	differents={};  // zhe li mei you gai a !!!
}

// function add_balls(location,number){
// 	for(var i=0;i<pic_table[number].length;i++)
// }

function pic_print(location,number,ctx){
	ctx.beginPath();
	ctx.clearRect(126*location,0,126,768);
	for(var i=0;i<pic_table[number].length;i++){
		for(var j=0;j<pic_table[number][1].length;j++){
			if(pic_table[number][i][j]==1){
				var rdmC=Math.floor(Math.random()*10);
				var rdmX=selectFrom(4,8)*(Math.random()>0.5?1:-1);
				var rdmY=selectFrom(-20,-8);
				var one_ball={x:(2*j+1)*r+location*126+200,y:(2*i+1)*r+200,r:8,g:1,vx:rdmX,vy:rdmY,color1:color[rdmC]}
				balls.push(one_ball);
				ctx.arc((2*j+1)*r+location*126,(2*i+1)*r+200,7,0,Math.PI*2);
				ctx.fill();
				ctx.beginPath();
			}
		}
	}
}
function selectFrom(startNumber, endNumber) {
    var choice = endNumber - startNumber + 1;
    return Math.floor(Math.random() * choice + startNumber)
}



function update_time(){
	var myDate=new Date();
	nowtime=myDate.toTimeString();
	differents['9']=0;
	for(var i=0;i<8;i++){
		if(nowtime[i]!==mytime[i]){
			differents[''+i+'']=nowtime[i];
			differents['9']=1;
		}
	}
	return nowtime;
}


function print_ball(ctx2){
	ctx2.clearRect(0,0,1530,900);
	var i;
	for(i in balls){
		ctx2.beginPath();
		ctx2.fillStyle=balls[i].color1;
		ctx2.arc(balls[i].x,balls[i].y,balls[i].r,0,Math.PI*2);
		ctx2.closePath();
		ctx2.fill();
	}
}
function update_ball(){
	var i;
	for(i in balls){
		balls[i].x+=balls[i].vx;
		balls[i].vy+=balls[i].g;
		balls[i].y+=balls[i].vy;
		if(balls[i].y>768){
			balls[i].y=768;
			balls[i].vy=-(balls[i].vy)*0.7;
		}
		if(balls[i].x>1530||balls[i].x<2){
			delete balls[i];
		}
	}
}



var differents={"9":0};
var r=9;
window.onload=function(){
	var canvas=document.getElementsByTagName('canvas')[0];
	var ctx2=document.getElementById('can2').getContext('2d');	
	var ctx=canvas.getContext('2d');
	canvas.width=1530;
	canvas.height=768;
	var nowtime=null;
	ctx.strokeStyle='rgb(252,157,154)';
	ctx.fillStyle='rgb(254,67,101)';
	pic_print(2,10,ctx);
	pic_print(5,10,ctx);
	mytime='aa:bb:cc';
	addNewBall=balls.length;
	setInterval(function(){
		nowtime=update_time();

		if(differents['9']===1){
			mytime=nowtime;
			print_location(ctx);
		}
	},30);
	setTimeout(function(){
		balls=[];                       //为了提高性能，少写一个嵌套函数循环，
		setInterval(function(){
			var ni =Math.random();
			print_ball(ctx2);
			update_ball();
		},30);
	},500);
}