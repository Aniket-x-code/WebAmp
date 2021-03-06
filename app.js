// alert("hello")
const music=document.querySelector("audio");
const img=document.querySelector("img");
const play =document.getElementById("play");
const artist =document.getElementById("artist");
const title =document.getElementById("title");
const prev =document.getElementById("prev");
const next =document.getElementById("next");


const songs=[
    {
    name:"Webamp-1",
    title:"Until I Found You",
    artist:"Stephen Sanchez",
    },
    {
        name:"Webamp-2",
        title:"Alag Aasmaan",
        artist:"Anuv Jain",
    },
    {
        name:"Webamp-3",
        title:"Blue Bird",
        artist:"Ikimonogakari",
    },
    {
        name:"Webamp-4",
        title:"Waqt ki Baatein",
        artist:"Dream Note",
    },
    {
        name:"Webamp-5",
        title:"Heat Waves",
        artist:"Glass Animals",
    },
    
]




let isPlaying=false;
   //  function for pause
   const playMusic=() =>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
    };

//  function for pause
    const pauseMusic=() =>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
    };
    


    play.addEventListener("click" ,() =>{
      
        isPlaying ? pauseMusic() : playMusic();
    });

// changing music data 
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";

}; 

    // loadSong(songs[0]);
     var songIndex=0;
const nextSong=()=>
{   songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong=()=>
{   songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};


next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);