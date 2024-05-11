// scripts.js
const hlsPlayer = document.getElementById('hlsPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const volumeControl = document.getElementById('volumeControl');
var airPlay = document.getElementById('airplay');

const HLSStreamUrl = 'https://streams.radiomast.io/d12679e5-06b3-4f6c-ae90-4fe125e30dfb/hls.m3u8';

// Initialize HLS.js
if (hlsPlayer.canPlayType('application/vnd.apple.mpegurl')) {
    hlsPlayer.src = 'https://streams.radiomast.io/d12679e5-06b3-4f6c-ae90-4fe125e30dfb';
}
else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(HLSStreamUrl);
    hls.attachMedia(hlsPlayer);
} 

// Play/Pause button functionality
playPauseButton.addEventListener('click', () => {
    if (hlsPlayer.paused) {
        hlsPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        hlsPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Volume control
volumeControl.addEventListener('input', () => {
    hlsPlayer.volume = volumeControl.value;
});

// Airplay
if (window.WebKitPlaybackTargetAvailabilityEvent) {
    hlsPlayer.addEventListener('webkitplaybacktargetavailabilitychanged', function(event) {
        switch (event.availability) {
            case "available":
                airPlay.style.display = 'block';
                break;
            default:
                airPlay.style.display = 'none';
        }
        airPlay.addEventListener('click', function() {
            hlsPlayer.webkitShowPlaybackTargetPicker();
        });
    });
}else {
    airPlay.style.display = 'none';
}