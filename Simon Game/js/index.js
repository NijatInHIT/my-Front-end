var checkFlag=false;
var trueOrder=[];
var startFlag=false;
$(document).ready(function(){
    $(".four-part").on('mousedown',function(){
        $(this).addClass("clickDown");
    });
    $(".four-part").on('mouseup',function(){
        $(this).removeClass("clickDown");
    });


    function moduleLight(level,trueOrder){
        if(!level){
            level=1;
        }
        while(trueOrder.length<level){
            var a1=Math.ceil(Math.random()*4);
            if(trueOrder.length==0){
                trueOrder.push(a1);
            }
            else if(a1!=trueOrder[trueOrder.length-1]){
                trueOrder.push(a1);

            }
       }
       for(let i=0;i<trueOrder.length;i++){
          setTimeout((i)=>{
              $(`#part-${trueOrder[i]}`).addClass(`part-${trueOrder[i]}-light`);
          },i*1000,i);
          setTimeout((i)=>{
            $(`#part-${trueOrder[i]}`).removeClass(`part-${trueOrder[i]}-light`);
        },i*1000+500,i);
       }
       return trueOrder;
    }

    function checkClick(trueOrder){
        checkFlag=true;
        var checkTime=0;
        var checkTimer=setTimeout(()=>{
            if(checkFlag==true){
                checkFlag=false;
                startFlag=false;
                $(".four-part").unbind("click");
                $(".show-word").html("!!");
                $(".show-word").addClass("word-flick");
                setTimeout(()=>{
                    $(".show-word").removeClass("word-flick");
                },3000);
                
            }
        },6000);
        $(".four-part").on("click",function(e){
            if(checkTime<trueOrder.length){
                if(this.id.slice(-1)==trueOrder[checkTime]){
                    $(".show-grade").html((function(){
                        var a1=$(".show-grade").html()-0+1;
                        if(a1<10) return ('00'+a1);
                        else if(a1>100) return (a1);
                        else return ('0'+a1);
                    })());
                    console.log('true',this.id);
                    if(checkTime++ ==trueOrder.length-1){
                        $(".four-part").unbind("click");
                        $(".show-word").html(trueOrder.length+1>10?trueOrder.length+1+'':'0'+(trueOrder.length+1));
                        checkFlag=false;
                        clearTimeout(checkTimer);
                        $(".show-word").addClass("word-flick");
                        setTimeout(()=>{
                            $(".show-word").removeClass("word-flick");
                            setTimeout(()=>{gameStart(++trueOrder.length);},500);
                        },1000);
                    }
                    
                }else{
                    $(".show-word").html("!!");
                    $(".show-word").addClass("word-flick");
                    checkFlag=false;
                    clearTimeout(checkTimer);
                    $(".four-part").unbind("click");
                    startFlag=false;
                    setTimeout(()=>{
                        $(".show-word").removeClass("word-flick");
                    },3000);
                }
                
            }
        });
    }

    function gameStart(level){
        startFlag=true;
        trueOrder=[];
        trueOrder=moduleLight(level,trueOrder);
        setTimeout((trueOrder)=>{
            checkClick(trueOrder);
        },(level-1)*1000+600,trueOrder);
    }


    $(".start").on("click",()=>{
        if(!startFlag){
            $(".show-grade").html('000');
            startFlag=true;
            $(".show-word").html('01');
            $(".show-word").addClass("word-flick");
            setTimeout(()=>{
                $(".show-word").removeClass("word-flick");
                gameStart(1);
            },1000);
        }
    });

    
});