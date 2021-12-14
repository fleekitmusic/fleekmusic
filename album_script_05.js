let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list change and add few more
let All_song = [
  {
    name: "Dorassani",
    path: "song_site/music/kannadahitz/Dorassani-Vijay-Prakash.mp3",
    img: "song_site/image/kan-Dorassani.jpg",
    singer: "Vijay Prakash",
  },
  {
    name: "Chuttu Chuttu",
    path: "song_site/music/kannadahitz/Chuttu-Chuttu-Ravindra-Soragavi-Dr.-Shamitha-Malnad.mp3",
    img: "song_site/image/kan-chuttu-chuttu.jpg",
    singer: "Ravindra Soragavi",
  },
  {
    name: "Ide Swarga",
    path: "song_site/music/kannadahitz/Ide-Swarga--From-Love-Mocktail-2--Sanjith-Hegde-Nakul-Abhyankar.mp3",
    img: "song_site/image/kan-ide-swarga.jpg",
    singer: "Sanjith Hegde,Nakul Abhyankar",
  },
  {
    name: "Kannu Hodiyaka",
    path: "song_site/music/kannadahitz/Kannu-Hodiyaka-Shreya-Ghoshal.mp3",
    img: "song_site/image/kan-kannu-hodiyaka.jpg",
    singer: "Shreya Ghoshal",
  },
  {
    name: "Love You Chinna",
    path: "song_site/music/kannadahitz/Love-You-Chinna-Shruthi-V-S-Nakul-Abhyankar.mp3",
    img: "song_site/image/kan-love-you-chinna.jpg",
    singer: "Shruthi V S,Nakul Abhyankar",
  },
  {
    name: "Mungaru Maleye",
    path: "song_site/music/kannadahitz/Mungaru-Maleye-Sonu-Nigam.mp3",
    img: "song_site/image/kan-mungaru-maleye.jpg",
    singer: "Sonu Nigam",
  },
  {
    name: "Naav Maneg Hogodilla",
    path: "song_site/music/kannadahitz/Naav Maneg Hogodilla.mp3",
    img: "song_site/image/kan-naav-manege-hogodila.jpg",
    singer: "Vijay Prakash",
  },
  {
    name: "Nana Mele Nanageega",
    path: "music/kannadahitz/Nana-Mele-Nanageega-Sonu-Nigam.mp3",
    img: "image/kan-nana-mele.jpg",
    singer: "Sonu Nigam",
  },
  {
    name: "Nodutha Nannane",
    path: "song_site/music/kannadahitz/Nodutha-Nannane-Sanjith-Hegde.mp3",
    img: "song_site/image/kan-nodutha-nannane.jpg",
    singer: "Sanjith Hegde",
  },
  {
    name: "Ondu Mathale Nooru Helale",
    path: "song_site/music/kannadahitz/ondu-mathale-nooru-helale-song.mp3",
    img: "song_site/image/kan-ondu-maatheli.jpg",
    singer: "Sanjith Hegde",
  },
  {
    name: "Sariyaagi",
    path: "song_site/music/kannadahitz/Sariyaagi-Armaan-Malik.mp3",
    img: "song_site/image/kan-sariyaagi.jpg",
    singer: "Armaan Malik",
  },
  {
    name: "Shaane Top Agavle",
    path: "song_site/music/kannadahitz/Shaane-Top-Agavle-Vijay-Prakash.mp3",
    img: "song_site/image/kan-shaane-top-agavle.jpg",
    singer: "Vijay Prakash",
  },
  {
    name: "Soul Of Dia",
    path: "song_site/music/kannadahitz/Soul-Of-Dia-Sanjith-Hegde-Chinmayi-Sripada.mp3",
    img: "song_site/image/kan-dia.jpg",
    singer: "Sanjith Hegde,Chinmayi Sripada",
  },
  {
    name: "Summane Heege Ninnane",
    path: "song_site/music/kannadahitz/Summane-Heege-Ninnane-Shreya-Ghoshal-Sonu-Nigam.mp3",
    img: "song_site/image/kan-summane.jpg",
    singer: "Shreya Ghoshal,Sonu Nigam",
  },
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;

        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }


       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
