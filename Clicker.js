<!DOCTYPE html>
<html>
<head>
	<title>Simple Game</title>
</head>
<body>

	<h1>Simple Game</h1>
	<p>Click the button as many times as you can in 10 seconds!</p>

	<button id="button" onclick="clickButton()">Click me!</button>
	<p>Time remaining: <span id="time">10</span> seconds</p>
	<p>Score: <span id="score">0</span></p>

	<script>
		var timeLeft = 10;
		var score = 0;

		function clickButton() {
			score++;
			document.getElementById("score").innerHTML = score;
		}

		var countdown = setInterval(function() {
			timeLeft--;
			document.getElementById("time").innerHTML = timeLeft;

			if (timeLeft <= 0) {
				clearInterval(countdown);
				alert("Time's up! You scored " + score + " points.");
			}
		}, 1000);
	</script>

</body>
</html>
