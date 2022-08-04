import { songs } from "./Api.js";
const play=document.getElementById('play');
const music=document.querySelector('audio');
const img_div=document.getElementById("img_div");
const title=document.getElementById("title");
const author=document.getElementById("author");
const curr_time=document.getElementById("curr_time");
const duration_time=document.getElementById("duration_time");
const datahide=document.getElementById('parent_ul')
const parent2=document.getElementById("parent2");

var playclicked=false;

const playclick =()=>{
    playclicked=true;
    console.log("play clicked");
    play.classList.replace("fa-play","fa-pause");
    music.play();
    play.title="pause";
    datahide.classList.remove("data_hide");
    parent2.style.display="block";
    
}

const pauseclick =()=>{
    playclicked=false;
    console.log("pause clicked");
    play.classList.replace("fa-pause","fa-play");
    music.pause();
    play.title="play";
    datahide.classList.add("data_hide");
    parent2.style.display="none";
}

play.addEventListener('click',()=>{
    playclicked?pauseclick():playclick()
})

const loadsongs =(songs) =>{
    title.textContent=songs.title;
    author.textContent=songs.author;
    music.src=`../musicplayerapp/${songs.name}.mp3`;
    let imgsrc=`../Images/${songs.name}.jpg`;
    img_div.style.backgroundImage= `url(${imgsrc}),radial-gradient(
        rgba(255, 49, 3, 0.896),
        rgba(251, 255, 0, 0.75))`;
}
// loadsongs(songs[2]);

var songindex=0;
const nextsong = () =>{
    songindex=(songindex+1)%songs.length;
    loadsongs(songs[songindex]);
    playclick();
}

const prevsong = () =>{
    songindex=(songindex-1+songs.length)%songs.length;
    loadsongs(songs[songindex]);
    playclick();
}



// progress js

music.addEventListener("timeupdate",(event)=>{
    console.log("current time is "+event.target.currentTime);
    console.log("duration time is "+event.target.duration);
    const{currentTime,duration}=event.target;
    let progresstime=(currentTime/duration)*100;
    progress_bar.style.width=`${progresstime}%`;

    //music currenttime update

    let min_currtime=Math.floor(currentTime/60);
    let sec_currtime=Math.floor(currentTime%60);
    let total_currtime=`${min_currtime}:${sec_currtime}`;
    if(sec_currtime<10)
    {
        sec_currtime=`0${sec_currtime}`
    }
     curr_time.textContent=`${min_currtime}:${sec_currtime}`
    
    // music duration update

    let min_duration=Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);

    // console.log(min_duration +" : " +sec_duration);
    let total_duration=`${min_duration}:${sec_duration}`;
    if(duration)
    {
        if(sec_duration<10)
        {
            sec_duration=`0${sec_duration}`
        }
        duration_time.textContent=`${min_duration}:${sec_duration}`
    }
});

progress_div.addEventListener("click",(event)=>{
    const{duration}=music;
    console.log("event offset is "+event.offsetX);
    console.log("event clientwidth is "+event.target.clientWidth);
    let move_progress=(event.offsetX/event.target.clientWidth)*duration;
    music.currentTime=move_progress;
    console.log(move_progress);
});
music.addEventListener("ended",nextsong);
next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);



img_div.addEventListener("click",(event)=>{
    console.log(event);
    const imgs=event.backgroundImage;
    console.log(imgs);
    console.log(event.path[0].baseURI);
})
