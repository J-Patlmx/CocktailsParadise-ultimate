import React, { Component } from 'react';

class MusicPlayer  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.audioRef = React.createRef();
  }

  togglePlay = () => {
    const audio = this.audioRef.current;
    if (!this.state.isPlaying) {
      audio.play().catch(error => {
        console.error("Erreur de lecture :", error);
      });
    } else {
      audio.pause();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

   toggleMute = () => {
     const audio = this.audioRef.current;
     audio.muted = !this.state.isMuted;
     this.setState({ isMuted: !this.state.isMuted });
   };

  render() {
    return (
      <div>
        <audio ref={this.audioRef}>
          <source src="https://latinareggaeton.ice.infomaniak.ch/latinareggaeton.mp3" type="audio/mpeg" />
          Votre navigateur ne prend pas en charge lélément audio.
        </audio>


          <div className="button-player">
                  <button className='playPause'
                      onClick={this.togglePlay}>
                      {this.state.isPlaying ? '⏸️' : '▶️'}
                  </button>

                  <button className='muteunmute' 
                      onClick={this.toggleMute}>
                      {this.state.isMuted ? '🔈' : '🔇'}
                  </button>
          </div>

      </div>
    );
  }
}

export default MusicPlayer ;
