import gameboardCreate from "./gameboard.js";
import startGame, {form, p1, p2} from "./start.js";

const letters = /^[A-Za-z]+$/;


const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");

const startButton = document.getElementById("start-button");

window.startGame = startGame;



(function() {
	p1.addEventListener("input",function(e){
		let name =	e.target.value;
		let valid = letters.test(name);
			if(!valid) {
				span1.style.scale = "1";
				p1.style.borderBotom = "2px solid red";

				startButton.disabled = true;	
				startButton.style.cssText = "cursor:not-allowed;";
						
			} 
			else if(valid) {
				startButton.disabled = false;	
				startButton.style.cssText = "cursor:pointer;";
				span1.style.scale = "0";	
				p1.style.borderBotom = "2px solid black";					
						
			}
	});
	
	p2.addEventListener("input",function(e){
		let name =	e.target.value;
		let valid = letters.test(name);
			if(!valid) {
				span2.style.scale = "1";
				p2.style.borderBotom = "2px solid red";
	
				startButton.setAttribute("onclick","");	
				startButton.style.cssText = "cursor:not-allowed;";
				
			} 
			else if(valid) {
				span2.style.scale = "0";	
				p2.style.borderBotom = "2px solid black";	
				startButton.setAttribute("onclick","gameboard.startGame()");	
				startButton.style.cssText = "cursor:pointer;";				
				
			}
	});
}());

form.addEventListener("submit", async function(e){
	e.preventDefault()});	


let gameboard = gameboardCreate();
window.gameboard = gameboard;



