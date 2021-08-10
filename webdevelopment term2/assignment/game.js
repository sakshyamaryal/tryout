var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}



function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(player.offsetLeft, newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}



var globe;
  
function startbotton(){
	var god=document.getElementsByClassName('start');
	god[0].style.visibility='hidden';
	var moveit=document.getElementsByClassName('bomb');
	setInterval(movebomb,90);
	// 	var moveone=document.getElementsByClassName('bomb1');
	// setInterval(movebomb1,150);
	  var five= document.createElement('section');
   setInterval( multi, 2400);



}
function movebomb(){
	var moveit=document.getElementsByClassName('bomb');
	//move bomb by given numbers of pixels
	var postop=moveit[0].offsetTop;
	moveit[0].style.top=postop +8 + 'px';
	// var dirt=document.getElementsByTagName('section');
	// 	var postop=dirt[0].offsetTop;
	// dirt[0].style.top=postop +8 + 'px';
	// postop.style.left= Math.ceil(Math.random()*200)+"vh";
	if( postop >  585){
		moveit[0].remove();
		
		explosion();
	}
 }

function explosion(){
	document.getElementById("blasted").style.display = "inline";
	setInterval(function(){
	document.getElementById("blasted").style.display = "none";					
	},2000);
}

 
 

	//randompositon for bomb and return the value of var
	function randomnumber(maxi){
	 var anywhere=Math.ceil(Math.random()*maxi);
		return anywhere;
	}
	//random positon of bomb
function manybomb(bot){
	var many=document.getElementsByClassName('bomb')[0];
	ran=randomnumber(window.innerWidth);
	bot.style.left=ran +'px';

}



	//	rand=randomnumber(window.innerHeight);
//	bot.style.position='absolute';
//	bot.style.left=ran +'px';
	//bot.style.top=rand +'px';
	//bot.style.width=300 +'px';
	//bot.style.heigth=300 +'px';
//	many.appendChild(bot);
//var topposition=randomnumber(window.innerHeight);
//var leftposition=randomnumber(window.innerWidth);
//bot.style.top=topposition + 'px';




 function multi(){
	 var five = document.createElement('section');
	five.style.left = Math.random(1) * window.innerWidth + 'px';
	 five.classList.add('bomb');
   document.body.appendChild(five); 
  // five.style.animation="down 8s 20";
    // var ani=document.getElementsByClassName('bomb')[0];
    // ani.style.animation="down 6s 20";
    // ani.style.animationDelay="2s";
   //  ani.style.animationDirection="reverse";

	
  }
 


function exp(){
	var plosion=document.getElementsByClassName('explosion')[0];

}



function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
	var god=document.getElementsByClassName('start');
  god[0].addEventListener('click',startbotton);
	var moveit=document.getElementsByClassName('bomb');
	 // moveit[0].style.visibility='hidden';
  // setInterval(movebomb,90);
//for random position of bomb
    var numCircles= randomnumber(200);
    	for (var i = 0; i < numCircles; i++){
  // var i=0;
  // while (i<0);{
	 // i++;
	

globe=document.getElementsByClassName('bomb')[0];	
		manybomb(globe);
		globe.addEventListener('click',startbotton);
	}
	// var six= document.getElementsByTagName('section');
 //  	  var postop=six[0].offsetTop;
 //  	 six[0].style.top=postop +8 + 'px';

var plosion=document.getElementsByClassName('explosion')[0];


// var don=document.getElementsByTagName('section');
// for (var i = 0; i < don.length; i++) {
// 	don[0].addEventListener('click',fall)
// 		don[0].addEventListener('click',startbotton)
// }

}
document.addEventListener('DOMContentLoaded', myLoadFunction);














//java script codes practice

/*function startbotton(){
	var god=document.getElementsByClassName('start');
	god[0].style.visibility='hidden';
	//var moveit=document.getElementsByClassName('bomb');
//	var postop=moveit[0].offsetTop;
	//moveit[0].style.top=postop +4 + 'px';

//setInterval(startbotton,1000)


}

*/

/*function vanish(){
	var god=document.getElementsByClassName('start');
	
	god[0].addEventListener('click',startbotton);
//	var moveit=document.getElementsByClassName('bomb');
//	moveit[0].addEventListener('click',startbotton);
	
//	if (	god[0].style.opacity=0) {}
//setInterval(startbotton,100);
}
function can(){
	setInterval(this);
}
function cht(){
	var moveit=document.getElementsByClassName('bomb');
	moveit[0].addEventListener('click',startbotton);
}

*/
//document.addEventListener('DOMContentLoaded',vanish);

//function movebomb(){
//	var moveit=document.getElementsByClassName('bomb');
 //moveit[0].style.visibility='hidden';
	/*var moveit= randomNumber(289);
	for (var i = 0; i < moveit[0].length; i++) {
		
	
}*/
  // moveit[0].addEventListener('click',vanish);
	//var postop=moveit[0].offsetTop;
//	moveit[0].style.top=postop +8 + 'px';
	
	
//}



/*function push(){
	timeout=setInterval(move,10);

var god=document.getElementsByClassName('start');
	god[0].addEventListener('click',startbotton);
	
	var moveit=document.getElementsByClassName('bomb');
 


	setInterval(movebomb,90);

	

}


document.addEventListener('DOMContentLoaded',push);

*/
/*var randombomb;
function randomNumber(max){
var num=Math.floor(Math.random()*maxvalue);
return num;
}
function addElement(nine) {
	var body = document.getElementsByClassName('bomb')[0];
    randombomb.style.left=250 +'px';
     randombomb.style.top=250 +'px';

    body.appendChild(randombomb);
}
function pause(){
	var numCircles= randomNumber(200);
	for (var i = 0; i < numCircles; i++){
		randombomb=document.createElement('div');
		addElement(randombomb);
		randombomb.addEventListener('click',startbotton);

	} 
}
document.addEventListener('DomContentLoaded',pause);

*/
//make bomb fall

