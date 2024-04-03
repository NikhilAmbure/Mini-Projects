function toggleMute() {
    var volumeSlider = document.getElementById("volumeSlider");
    var muteButton = document.querySelector(".mute-button");

    if (volumeSlider.value > 0) {
        volumeSlider.value = 0;
        muteButton.textContent = "Unmute";
    } else {
        volumeSlider.value = 50; // Set default volume when unmuting
        muteButton.textContent = "Mute";
    }
}

document.getElementById("volumeSlider").addEventListener("input", function () {
    var volume = this.value;
    document.querySelector(".volume-value").textContent = volume; // Update volume value display
    adjustVolume(volume);
});


function adjustVolume(volume) {
    // Implement logic to adjust volume in your application
    console.log("Volume adjusted to: " + volume);
}
