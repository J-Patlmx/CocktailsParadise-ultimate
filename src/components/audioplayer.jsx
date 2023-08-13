import React, { Component } from 'react';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isMuted: false,
    };
    this.audioRef = React.createRef();
  }

  togglePlay = () => {
    const audio = this.audioRef.current;
    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
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
        <audio ref={this.audioRef} src="lien_de_votre_morceau_audio.mp3" />
        <button onClick={this.togglePlay}>
          {this.state.isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={this.toggleMute}>
          {this.state.isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    );
  }
}

export default MusicPlayer;
