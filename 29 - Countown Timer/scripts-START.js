

var Timer = (function() {
  var mainTimer = document.getElementsByClassName("display__time-left")[0];
  var timeForm = document.customForm.minutes;
  var countDown;
  var startTime;
  var endTime;

  var timer = function() {
  	var secondsLeft = Math.round((endTime - Date.now()) / 1000);
  	if (secondsLeft < 0) {
  		clearInterval(countDown);
  		return;
  	}
    displayTimeLeft(secondsLeft);
  };

  var displayTimeLeft = function(seconds) {
    var hr = Math.floor(seconds / 3600);
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    if (hr > 0) {
      min = min > 9 ? min.toString() : '0' + min;
    }
    sec = sec > 9 ? sec.toString() : '0' + sec;
    var timeString = hr > 0 ? hr + ':' + min + ':' + sec : min + ':' + sec;
    mainTimer.textContent = timeString;
    document.title = timeString;
  };

  return {
  	startTimer: function(seconds) {
  	  clearInterval(countDown);
  	  startTime = Date.now();
  	  endTime = startTime + seconds * 1000;
  	  displayTimeLeft(seconds);
  	  countDown = setInterval(timer, 1000);
  	},
  	attachHandlers: function() {
  	  // handle pre-set buttons
  	  var buttons = document.getElementsByClassName('timer__button');
  	  for (var i=0; i < buttons.length; i += 1){
  	  	buttons[i].addEventListener('click', function() {
  	  	  Timer.startTimer(this.dataset['time']);
  	  	});
  	  }

      // handle user-entry box
  	  document.customForm.addEventListener('submit', function(e){
  	  	e.preventDefault();
  	  	var runTime = Math.round(this.minutes.value * 60);
  	  	if (!isNaN(runTime)) {
  	  	  Timer.startTimer(runTime);
  	    }
  	  	this.reset();
  	  });
  	}
  };
}());

Timer.attachHandlers();
