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
    name: "Sariyaagi",
    path: "song_site/music/kannadahitz/Sariyaagi-Armaan-Malik.mp3",
    img: "song_site/image/kan-sariyaagi.jpg",
    singer: "Armaan Malik",
  },
  {
    name: "Teri Meri Gallan Hogi Mashhur",
    path: "song_site/music/shershaah/Teri_Meri_Gallan_Hogi_Mashhur.mp3",
    img: "song_site/image/Sher.jpg",
    singer: "1",
  },
  {
    name: "Bekhayali",
    path: "song_site/music/Kabirsingh/Bekhayali__Kabir_Singh.mp3",
    img: "song_site/image/Ksingh.jpg",
    singer: "Sachet Tandon",
  },
  {
    name: "Soul Of Dia",
    path: "song_site/music/kannadahitz/Soul-Of-Dia-Sanjith-Hegde-Chinmayi-Sripada.mp3",
    img: "song_site/image/kan-dia.jpg",
    singer: "Sanjith Hegde,Chinmayi Sripada",
  },
  {
    name: "Stayin'Alive",
    path: "song_site/music/meme/Bee Gees Stayin Alive Official Music Video.mp3",
    img: "song_site/image/bees.jpg",
    singer: "Bee Gees",
  },
  {
    name: "Tujhe Kitna Chahne Lage",
    path: "song_site/music/Kabirsingh/Tujhe_Kitna_Chahne_Lage__Kabir_Singh.mp3",
    img: "song_site/image/Ksingh.jpg",
    singer: "Arijit Singh",
  },
  {
    name: "Chuttu Chuttu",
    path: "song_site/music/kannadahitz/Chuttu-Chuttu-Ravindra-Soragavi-Dr.-Shamitha-Malnad.mp3",
    img: "song_site/image/kan-chuttu-chuttu.jpg",
    singer: "Ravindra Soragavi",
  },
  {
    name: "Ashes on The Fire",
    path: "song_site/music/anime/Attack on Titan Season 4 OST Ashes on The FireMain Theme.mp3",
    img: "song_site/image/FireTheme.jpg",
    singer: "Linked Horizon",
  },
  {
    name: "Nana Mele Nanageega",
    path: "song_site/music/kannadahitz/Nana-Mele-Nanageega-Sonu-Nigam.mp3",
    img: "song_site/image/kan-nana-mele.jpg",
    singer: "Sonu Nigam",
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
