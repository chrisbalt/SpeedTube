$(document).ready(function () {
    // Append 3 SpeedTube buttons to HTML5 player controls:
    $(".html5-player-chrome").append("<div class='SpeedTube'><div class='xp5' role='button' aria-label='Speed: x.5' tabindex='6501'>x.5</div><div class='x1' role='button' aria-label='Speed: x1' tabindex='6502'>x1</div><div class='x1p5' role='button' aria-label='Speed: x1.5' tabindex='6503'>x1.5</div><div class='x2' role='button' aria-label='Speed: x2' tabindex='6504'>x2</div></div>");

    // Change playback rate on click of 4 buttons as follows:
    $(".SpeedTube .xp5").click(function () {
        document.querySelector('video').playbackRate = 0.5;
    });

    $(".SpeedTube .x1").click(function () {
        document.querySelector('video').playbackRate = 1;
    });

    $(".SpeedTube .x1p5").click(function () {
        document.querySelector('video').playbackRate = 1.5;
    });

    $(".SpeedTube .x2").click(function () {
        document.querySelector('video').playbackRate = 2;
    });
});