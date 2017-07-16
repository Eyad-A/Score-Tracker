var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Text = document.getElementById("p1text");
var p2Text = document.getElementById("p2text");
var p1Score = 0;
var p2Score = 0;
var reset = document.getElementById("reset");
var gameOver = false;
var max = 5;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
			p1Score++;
			if (p1Score === max) {
				gameOver = true;
			}
			p1Text.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === max) {
			gameOver = true;
		}
			p2Text.textContent = p2Score;
	}
});

reset.addEventListener("click", function() {
	p1Score = 0;
	p2Score = 0;
	p1text.textContent = 0;
	p2text.textContent = 0;
	gameOver = false;
});