var c=document.getElementById("randomCanvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
var x=50;
var y=50;
var restx=50;
var resty=50;
var left=false;
var right=false;
var enter=false;
var shift=false;
var previousTime;
var currentTime;
var timeDifference;
const tempo=60;

function drawNote(){
	ctx.beginPath();
	ctx.rect(x,y,10,10);
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();
}
function drawRest(){
	ctx2.beginPath();
	ctx2.rect(restx,resty,10,10);
	ctx2.fillStyle="black";
	ctx2.fill();
	ctx2.closePath();
}
function draw(){
	var d=new Date();
	//ctx.clearRect(0, 0, c.width, c.height);
	if(!enter){
		previousTime=d.getTime();
	}
	if(enter){
		currentTime=d.getTime();
		timeDifference=currentTime-previousTime;
		var actualTime=timeDifference*tempo/60*0.001;
		drawNote();
		drawRest();
/*		if(!shift){
			if(actualTime)
			if(right){ 
				if(timeDifference*tempo/60*0.001>0.7){
					//Add quarter note;
				}
				else if(timeDifference*tempo/60*0.001<=0.7 && timeDifference*tempo/60*0.001>=0.2){
					//Add 
				}
				previousTime=currentTime;
			}
			else if(left){

				previousTime=currentTime;
			}
			else{
				restx++;
			}
		}*/
	}
}
document.addEventListener("keydown",keyDown,false);
document.addEventListener("keyup",keyUp,false);
function keyDown(e){
	if(e.keyCode==80){
		right=true;
	}
	else if(e.keyCode==81){
		left=true;
	}
	else if(e.keyCode==13){
		enter=!enter;
	}
}
function keyUp(e){
	if(e.keyCode==80){
		right=false;
	}
	else if(e.keyCode==81){
		left=false;
	}
}
setInterval(draw,10);