function darkenSVG(button) {
    var allButtons = document.querySelectorAll('.write_calendar__days button', );
    allButtons.forEach(function(btn) {
        var img = btn.querySelector('img');
        img.style.filter = "brightness(1)";
    });

    var img = button.querySelector('img');
    var currentBrightness = img.style.filter || "brightness(1)";

    img.style.filter = currentBrightness === "brightness(1)" ? "brightness(0.8)" : "brightness(1)";
}

function darkenSVG1(button) {
    var allButtons1 = document.querySelectorAll('.write_time__columns');
    allButtons1.forEach(function(btn) {
        var img1 = btn.querySelector('img');
        img1.style.filter = "brightness(1)";
    });

    var img1 = button.querySelector('img');
    var currentBrightness1 = img1.style.filter || "brightness(1)";

    img1.style.filter = currentBrightness1 === "brightness(1)" ? "brightness(0.8)" : "brightness(1)";
}
