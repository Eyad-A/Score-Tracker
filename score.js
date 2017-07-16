var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Text = document.getElementById("p1text");
var p2Text = document.getElementById("p2text");
var numInput = document.querySelector("input");
var playingTo = document.getElementById("playingto");
var p1Score = 0;
var p2Score = 0;
var resetButton = document.getElementById("resetbutton");
var gameOver = false;
var max = 5;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
			p1Score++;
			if (p1Score === max) {
				gameOver = true;
				p1Text.classList.add("green");
			}
			p1Text.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === max) {
			gameOver = true;
			p2Text.classList.add("green");
		}
			p2Text.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1text.textContent = 0;
	p2text.textContent = 0;
	gameOver = false;
	p1Text.classList.remove("green");
	p2Text.classList.remove("green");
	gameOver = false;
}

numInput.addEventListener("change", function() {
	playingTo.textContent = this.value;
	max = Number(this.value);
	reset();
});