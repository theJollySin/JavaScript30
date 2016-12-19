// get player elements
var player = document.querySelector('.player');
var video = player.querySelector('.viewer');
var progress = player.querySelector('.progress');
var progressBar = player.querySelector('.progress__filled');
var toggle = player.querySelector('.toggle');
var skipButtons = player.querySelector('.[data-skip]');
var ranges = player.querySelector('.player-slider');

// create functions
var togglePlay = function() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}


// hook up event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
