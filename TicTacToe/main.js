let resultWin = document.querySelector(".win-window");
let resultDraw = document.querySelector(".draw-window");
let globalWindow = document.querySelector(".winning-board");
let startMenu = document.querySelector(".start-menu");
let form = document.getElementById("form");
let winnerMoves = document.getElementById("winner-h3");
let drawMoves = document.getElementById("draw-h3");
let firstPlayer;
let secondPlayer;
let counterX = 0;
let counterO = 0;

function showElement(el) {
	el.style.visibility = "visible";
}

function hideElement(el) {
	el.style.visibility = "hidden";
}


function startGame() {
	firstPlayer = document.getElementById("first-player").value;
	secondPlayer = document.getElementById("second-player").value;
	form.addEventListener("submit", function(e){
	e.preventDefault();
	});	
	hideElement(startMenu);
}

function gameboardCreate () {	
					        
					//0	   //1   //2
	let gameboard = [null, null, null, 
					 //3   //4   //5
					 null, null, null,  
					 //6   //7   //8
					 null, null, null]; 
	
	//First row 
	let f1 = document.getElementById('f1');
	let f2 = document.getElementById('f2');
	let f3 = document.getElementById('f3');

	//Second row 
	let s1 = document.getElementById('s1');
	let s2 = document.getElementById('s2');
	let s3 = document.getElementById('s3');

	//Third row 
	let t1 = document.getElementById('t1');
	let t2 = document.getElementById('t2');
	let t3 = document.getElementById('t3');

	let isPlayerX = true;
	let isGameWon = false;	

	function player(side,name) {

		/*
		function incrementCounter() {
			 counter+1;
		}

		function getCounter() {
			return counter;
		}
		*/
		

		function getSide() {
			return side;
		}
		function getName() {
			return name;
		}

		function doMove(cell) {
			let cellChoice = document.getElementById(cell);			
			//Adding values to array
			for(let i=0;i<=2;i++) { 
				if(cell==('f'+(i+1))) {
					gameboard[i]=(side);
				}
			}
			for(let i=3;i<=5;i++) { 
				if(cell==('s'+(i-2))) {
					gameboard[i]=(side);
				}
			}
			for(let i=6;i<=8;i++) { 				
				if(cell==('t'+(i-5))) {
					gameboard[i]=(side);
				}
			}
			cellChoice.innerText = side;
			cellChoice.setAttribute("onclick","");	
			cellChoice.style.cssText = "cursor:not-allowed;background-color: white;";
			console.log(gameboard);	
			console.log("X: " + counterX);
			console.log("O: " + counterO);	
			
		}
		return{doMove,getSide,getName}
	}	

	function checkWin(player) {	
		let side = player.getSide();
		let name = player.getName();
		

		function won() {
			isGameWon = true;	
			showElement(globalWindow);		
			showElement(resultWin);
			let winnerText = document.getElementById("winnerPlace");
			let counter;
			if(side=="X") {
				counter = counterX;				
			} else if(side=="O") {
				counter = counterO;				
			}
			if(counter ===3) {
			winnerText.innerHTML = name  + " WON!"; 	
			winnerMoves.innerHTML = "Just by " + counter + " clicks!!!";
			} else {
			winnerText.innerHTML = name  + " WON!"; 	
			winnerMoves.innerHTML = "By " + counter + " clicks";		
			}
			
							
		}	

		//Horizontal  wins
		if(gameboard[0]==side && gameboard[1]==side && gameboard[2]==side){
			won();
		} 
		else if(gameboard[3]==side && gameboard[4]==side && gameboard[5]==side){
			won();
		}	
		else if(gameboard[6]==side && gameboard[7]==side && gameboard[8]==side){
			won();
		}

		//Vertical  wins
		else if(gameboard[0]==side && gameboard[3]==side && gameboard[6]==side){
			won();
		}
		else if(gameboard[1]==side && gameboard[4]==side && gameboard[7]==side){
			won();
		}
		else if(gameboard[2]==side && gameboard[5]==side && gameboard[8]==side){
			won();
		}

		//Cross  wins

		else if(gameboard[0]==side && gameboard[4]==side && gameboard[8]==side){
			won();
		}
		else if(gameboard[2]==side && gameboard[4]==side && gameboard[6]==side){
			won();
		} 

	}

	function checkDraw(player1,player2) {
		let name1 = player1.getName();
		let name2 = player2.getName();
		function callDraw (){	
			drawMoves.innerHTML = name1 + " did " + counterX + " clicks and " + name2 + " did " + counterO + " clicks " ; 
			showElement(globalWindow);		
			showElement(resultDraw);
		}
		if(gameboard.every(element => element !== null) && isGameWon == false) {
			callDraw();
		}
	}
	function play(cell) {
		let playerX = player("X",firstPlayer);
		let playerO = player("O",secondPlayer);		
			if(isPlayerX == true) {	
				counterX++;				
				playerX.doMove(cell);						
				checkWin(playerX);
				checkDraw(playerX,playerO);				
				isPlayerX = false;		
			} else if(isPlayerX == false) {	
				counterO++;			
				playerO.doMove(cell);							
				checkWin(playerO);
				checkDraw(playerX,playerO);					
				isPlayerX = true;
							
			}
	}
	return{play,startGame}

}
let gameboard = gameboardCreate();










