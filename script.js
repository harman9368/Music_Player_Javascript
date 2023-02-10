const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


// we will create an array of object
const songs = [{
    name: "thapa-1",
    title: "no-love",
    artist: "shubh",
},
{
    name: "thapa-2",
    title: "her",
    artist: "shubh",
},
{
    name: "thapa-3",
    title: "baller",
    artist: "shubh",
},
{
    name: "thapa-4",
    title: "Babiha",
    artist: "Parminder Singh",
},
{
    name: "thapa-5",
    title: "Gypsy",
    artist: "Haryana",
},
{
    name: "thapa-6",
    title: "Levels",
    artist: "Sidhu Moose Wala",
},
{
    name: "thapa-7",
    title: "Ma lali peo lala mera",
    artist: "Jagpal Singh",
},
{
    name: "thapa-8",
    title: "Luk 28 kudi da",
    artist: "Diljit Dosanjh",
},
{
    name: "thapa-9",
    title: "Peaches",
    artist: "Diljit Dosanjh",
},
{
    name: "thapa-10",
    title: "Panjeban",
    artist: "Shivjot",
},
{
    name: "thapa-11",
    title: "Untouchable",
    artist: "Punjabi",
},
{
    name: "thapa-12",
    title: "Malwa-Block",
    artist: "Sidhu Moose Wala",
},
{
    name: "thapa-13",
    title: "Safar",
    artist: "Juss",
},
{
    name: "thapa-14",
    title: "295",
    artist: "Sidhu Moose Wala",
},
]


let isPlaying = false;

// for play functionality
 const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');
};

// for pause functionality
const pauseMusic =  () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
};

play.addEventListener("click", () => {
    if(isPlaying){
        pauseMusic();
    }else {
        playMusic();
    }
});

// changing the music data

// we will an array of object

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "musics/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

songIndex =0;

//loadSong(songs[1]);

const nextSong = () => {
    //songIndex++;
    // to repeate the playlist we should use the trick
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    // on clicking the next button the song should start automatically
    playMusic();
}

const prevSong = () => {
    // to repeate the playlist we should use the trick on clicking previous button previous song should play
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    // on clicking the previous button the song should start automatically
    playMusic();
}
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);