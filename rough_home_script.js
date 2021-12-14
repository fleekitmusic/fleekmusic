class Application extends React.Component {
  constructor(){
    super()
    this.scroll = this.scroll.bind(this)
  }


  scroll(direction){
    let far = $( '.image-container' ).width()/2*direction;
    let pos = $('.image-container').scrollLeft() + far;
    $('.image-container').animate( { scrollLeft: pos }, 1000)
  }

  render() {
    return <div className="main">
      <h1 className="title">Scrolling Image Slider</h1>
      <div className="wrapper">
        <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
        <div className="songs-container">
        <div class="songs">
          <p class="song_name">Trending anime hits</p>
          <img class="Img_song" src="song_site/image/FireTheme.jpg" width="100%" height="54px">
          <p>#</p>
          <div class="button_container">
              <a href="song_site/album03.html"><button class="Play_music_button" type="button" name="button">Play</button></a>
          </div>
        </div>

        <div class="songs">
          <p class="song_name">Kabir Singh</p>
          <img class="Img_song" src="song_site/image/Ksingh.jpg" width="100%" height="74px">
          <p>#</p>
          <div class="button_container">
            <a href="song_site/album01.html"><button class="Play_music_button" type="button" name="button">Play</button></a>
          </div>
        </div>

        <div class="songs">
          <p class="song_name">Trending meme hits</p>
          <img class="Img_song" src="song_site/image/bees.jpg" width="100%" height="54px">
          <p>#</p>
          <div class="button_container">
              <a href="song_site/album04.html"><button class="Play_music_button" type="button" name="button">Play</button></a>
          </div>
        </div>

        <div class="songs">
          <p class="song_name">Shershaah</p>
          <img class="Img_song" src="song_site/image/Sher.jpg" width="100%" height="75px">
          <p>#</p>
          <div class="button_container">
              <a href="song_site/album02.html"><button class="Play_music_button" type="button" name="button">Play</button></a>
          </div>
        </div>

        <div class="songs">
          <p class="song_name">Kannada Top hitz</p>
          <img class="Img_song" src="song_site/image/kan-dia.jpg" width="100%" height="55px">
          <p>#</p>
          <div class="button_container">
              <a href="song_site/album05.html"><button class="Play_music_button" type="button" name="button">Play</button></a>
          </div>
        </div>

        <div class="songs">
          <p class="song_name">Top Trending hit songs</p>
          <img class="Img_song" src="song_site/image/kan-nana-mele.jpg" width="100%" height="55px">
          <p>#</p>
          <div class="button_container">
              <a href="song_site/album06.html"><button class="Play_music_button" type="button" name="button">Play</button></a>
          </div>
        </div>

        <div class="songs">
          <p class="song_name">Kannada Top hitz</p>
          <img class="Img_song" src="song_site/image/kan-dia.jpg" width="100%" height="55px">
          <p>#</p>
          <div class="button_container">
              <a href="song_site/album05.html"><button class="Play_music_button" type="button" name="button">Play</button></a>
          </div>
        </div>
        </div>
        <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
      </div>
    </div>;
  }
}

React.render(<Application/>,
  document.getElementById('app'));
