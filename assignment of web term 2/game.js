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
var bomberAni ;
var gameOver = false;

function startbotton(){
	var god=document.getElementsByClassName('start');
	god[0].style.visibility='hidden';
	var moveit=document.getElementsByClassName('bomb');
	
		var bomberAni =  setInterval(function(){
			movebomb(bomberAni)
		},90);
		// 	var moveone=document.getElementsByClassName('bomb1');
		// setInterval(movebomb1,150);
		var five= document.createElement('section');
	var createBomb = setInterval( function(){
		multi(createBomb)
	}, 2000);
	


}
function movebomb(bomberAni){
	var moveit=document.getElementsByClassName('bomb');
	//move bomb by given numbers of pixels
	var postop=moveit[0].offsetTop;
	var posleft=moveit[0].offsetLeft;
	
	
	moveit[0].style.top=postop +8 + 'px';
	// var dirt=document.getElementsByTagName('section');
	// 	var postop=dirt[0].offsetTop;
	// dirt[0].style.top=postop +8 + 'px';
	// postop.style.left= Math.ceil(Math.random()*200)+"vh";
	var blastingArea = 540 + Math.floor(Math.random()*70);
	if( postop >  blastingArea){
		
		explosion(postop, posleft, bomberAni);
		moveit[0].remove();
		
		
	}
 }

function explosion(postop, posleft, bomberAni){
	
	document.getElementById("blasted").style.position="fixed";
	document.getElementById("blasted").style.top=(postop - 39) + "px";
	
	document.getElementById("blasted").style.left=(posleft - 54) + "px";
	// Detect
	
	
		var Character = document.getElementById("player").getBoundingClientRect();
		var charLeft = Character.left
		var charTop = Character.top 
		var charRight = Character.right 
		var charWidth = Character.width
		var charHeight = Character.height
		
		
		if(
			
			( Math.abs(charLeft - posleft) <= 40 ) && 
			( Math.abs(charTop - postop) <= 40 ) 
			
			 ){
				//  COllision detected
				document.getElementById('game-over').style.display="flex";
				// document.getElementsByTagName('li')[0].style.visibility='hidden';
				// document.getElementsByTagName('li')[1].style.visibility='hidden';
				// document.getElementsByTagName('li')[2].style.visibility='hidden';
				document.getElementById('game-over').innerHTML="<p> Game Over </p>"
		
				clearInterval(bomberAni);
			
				gameOver = true;
			 }

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




 function multi(createBomb){
	 if(gameOver == false){
		var five = document.createElement('div');
		five.style.left = Math.random(1) * window.innerWidth + 'px';
		 five.classList.add('bomb');
		  five.style.animation="down 8s 20";
	   document.body.appendChild(five); 
	   
	 
	 } else{
		clearInterval(createBomb)
		var bombs =  document.getElementsByClassName('bomb');
		console.log(bombs.length)
		for(x=0; x < bombs.length ; x++){
			bombs[x].style.display = "none";
		}
		
	 }
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
    // var numCircles= randomnumber(200);
    // 	for (var i = 0; i < numCircles; i++){
   var i=0;
   while (i<0);
	  i++;{
	

globe=document.getElementsByClassName('bomb')[0];	
		manybomb(globe);
		globe.addEventListener('click',startbotton);
	}
	// var six= document.getElementsByTagName('section');
 //  	  var postop=six[0].offsetTop;
 //  	 six[0].style.top=postop +8 + 'px';

// var plosion=document.getElementsByClassName('explosion')[0];


// var don=document.getElementsByTagName('section');
// for (var i = 0; i < don.length; i++) {
// 	don[0].addEventListener('click',fall)
// 		don[0].addEventListener('click',startbotton)
// }

}
document.addEventListener('DOMContentLoaded', myLoadFunction);
