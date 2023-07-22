console.log("Welcome to Spotify");

//Initialize the variables//
let songIndex = 0;
let audioElement = new Audio('songs1.mp3')
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))


let songs = [
    {songName:"Let me Down slowly ",filepatth:"songs1.mp3",coverpath:"image1.webp"},
    {songName:"Shiv Kailasho Ke Wasi ",filepatth:"songs2.mp3",coverpath:"image2.webp"},
    {songName:"BHOLE _ Baba Hansraj ",filepatth:"songs3.mp3",coverpath:"image3.webp"},
    {songName:"har har mahadav",filepatth:"songs4.mp3",coverpath:"image4.webp"},
    {songName:"Jai Bhole Baba ",filepatth:"songs5.mp3",coverpath:"image5.webp"},
    {songName:"Mera Bhola Hai Bhandari ",filepatth:"songs6.mp3",coverpath:"image.6.webp"},
    {songName:"Ram Song (Dushera Special)",filepatth:"songs7.mp3",coverpath:"image7.webp"},
    {songName:"Shamshaan - Hansraj Raghuwanshi",filepatth:"songs8.mp3",coverpath:"image8.webp"},
    {songName:"Shera Waali ",filepatth:"songs9.mp3",coverpath:"image9.webp"},
    {songName:"Shiv Kailasho Ke ",filepatth:"songs10.mp3",coverpath:"image10.webp"},
]
songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverpath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audio event/pause click//
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
   
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
         makeAllplays();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         masterSongName.innerText = songs[songIndex].songName;
         audioElement.src = `songs${songIndex+1}.mp3`;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
         
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
   }
   else{
    songIndex += 1;
   }
         audioElement.src = `songs${songIndex+1}.mp3`;
         masterSongName.innerText = songs[songIndex].songName
         audioElement.currentTime = 0;
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
   }
   else{
    songIndex -= 1;
   }
         audioElement.src = `songs${songIndex+1}.mp3`;
         masterSongName.innerText = songs[songIndex].songName
         audioElement.currentTime = 0;
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
})