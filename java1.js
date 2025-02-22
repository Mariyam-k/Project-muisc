const songs = [
    { title: "Shinuoga E-wa", artist: "Fujit Kaze", album: "HELP EVER HURT NEVER", src: "/music/Fujii Kaze - Shinunoga E-Wa (Lyrics).mp3", cover: "/image/Fujii_Kaze_-_Help_Ever_Hurt_Never.png" },
    { title: "Chaleya", artist: "Jawan", album: "Jawan", src: "/muiscs/JAWAN_ Chaleya (Hindi) _ Shah Rukh Khan _ Nayanthara _ Atlee _ Anirudh _ Arijit S, Shilpa R _ Kumaar.mp3", cover:"/image/Chaleya_album_cover.jpg"},
    { title: "Ahistha Ahistha", artist: "Kazinama ", album: "Kazinama · Musarrat Nazire", src: "/muiscs/Musarrat Nazir - Ahista Ahista _ Kazinama _ Various Anime.mp3", cover: "/image/ahista-ahista-.jpg" },
    
    
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const repeatButton = document.getElementById("repeat");
const infiniteButton = document.getElementById("infinite");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const songTitle = document.getElementById("song-title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");
const albumArt = document.getElementById("album-art");

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    album.textContent = song.album;
    audio.src = song.src;
    albumArt.src = song.cover;
}

playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "&#10074;&#10074;";
    } else {
        audio.pause();
        playPauseButton.innerHTML = "&#9654;";
    }
});

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = "&#10074;&#10074;";
});

prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = "&#10074;&#10074;";
});

audio.addEventListener("timeupdate", () => {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

seekBar.addEventListener("input", () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});

repeatButton.addEventListener("click", () => {
    audio.loop = !audio.loop;
    repeatButton.style.color = audio.loop ? "green" : "white";
});

infiniteButton.addEventListener("click", () => {
    audio.addEventListener("ended", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
    });
    infiniteButton.style.color = "green";
});
document.querySelector(".exit-btn").addEventListener("click", () => {
window.history.back(); // Takes the user to the previous page
});


loadSong(currentSongIndex);
