import React from "react";

class Music extends React.Component {
  componentDidMount() {
    this.props.currentlyOnMusicPage();//run this function when component create will set the state of currentlyOnMusicPage to true
  }
  componentWillUnmount() {
    this.props.currentlyOnMusicPage();//run this function when component destroy will set the state of currentlyOnMusicPage to false
  }
  render() {
    const { songidx, Songs } = this.props;
    return (
      <div
        className="screen-music rounded-3"
        style={{
          backgroundImage: `url(${Songs[songidx].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <h2>{Songs[songidx].name}</h2>
        <div className="song-image">
          <img src={Songs[songidx].img} id="song-img" alt="song item"></img>
        </div>
        <div style={{ marginTop: 20 }}>
          <audio
            autoPlay="autoplay"
            controls="seeking"
            id="audio"
            src={Songs[songidx].url}
          ></audio>
        </div>
        <div className="screen-music-instruction text-light">
          <p>
            Press "<i className="fas fa-play"></i>/
            <i className="fas fa-pause"></i>" button to play/pause.
          </p>
        </div>
      </div>
    );
  }
}

export default Music;
