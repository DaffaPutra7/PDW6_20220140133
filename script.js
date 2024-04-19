// Mendapatkan elemen audio
var audio = document.querySelector(".song-track");
// Mendapatkan elemen video
var video = document.getElementById("bg-video");
// Mendapatkan elemen untuk mengisi progress bar
var progressBarFill = document.getElementById("progress-bar-fill");
// Mendapatkan elemen untuk menampilkan waktu
var timeDisplay = document.querySelector(".time-display");
// Mendapatkan tombol play
var playButton = document.querySelector(".play-button");
// Mendapatkan tombol pause
var pauseButton = document.querySelector(".pause-button");

// Fungsi untuk memutar atau menghentikan audio dan video
function playPause() {
    if (audio.paused) {
        audio.play();
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline-flex";
    } else {
        audio.pause();
        video.pause();
        playButton.style.display = "inline-flex";
        pauseButton.style.display = "none";
    }
}

// Fungsi untuk memutar mundur video dan audio
function skipBackward(seconds) {
    audio.currentTime -= seconds;
    video.currentTime -= seconds;
}

// Fungsi untuk memutar maju video dan audio
function skipForward(seconds) {
    audio.currentTime += seconds;
    video.currentTime += seconds;
}

// Event listener untuk mengupdate waktu audio
audio.addEventListener("timeupdate", function() {
    var currentTime = formatTime(audio.currentTime);
    var duration = formatTime(audio.duration);
    timeDisplay.textContent = currentTime + " / " + duration;

    var progress = (audio.currentTime / audio.duration) * 100;
    progressBarFill.style.width = progress + "%";
});

// Fungsi untuk memformat waktu dalam format mm:ss
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}

// Menambahkan event listener untuk mendengarkan saat video atau audio selesai diputar
audio.addEventListener("ended", function() {
    // Menghentikan pemutaran audio
    audio.pause();
    // Menghentikan pemutaran video
    video.pause();
    // Mengatur waktu kembali ke awal
    audio.currentTime = 0;
    video.currentTime = 0;
});

video.addEventListener("ended", function() {
    // Menghentikan pemutaran video
    video.pause();
    // Menghentikan pemutaran audio
    audio.pause();
    // Mengatur waktu kembali ke awal
    video.currentTime = 0;
    audio.currentTime = 0;
});