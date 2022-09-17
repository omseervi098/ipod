import "./App.css";
import "./index.css";
import React from "react";
import ZingTouch from "zingtouch";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./component/Buttons";
import Screen from "./component/Screen";
import "lodash";
import $ from "jquery";
class App extends React.Component {
  constructor() {
    super();
    this.temp_angle = 0;
    // this.temp_selected=0;
    this.state = {
      options: ["Games", "Music", "Settings", "coverflow"],
      selected: 1,
      showPage: -1,
      general_options: ["Games", "Music", "Settings", "coverflow"],
      music_options: ["Songs", "Artists", "Albums"],
      song_idx: -1,
      current_music_selected: 1,
      currently_playing: false,
    };
  }
  componentDidMount() {
    var containerElement =
      document.getElementsByClassName("buttons-container")[0];
    var zt = new ZingTouch.Region(containerElement);
    zt.bind(containerElement, "rotate", (e) => {
      let dist = e.detail.distanceFromLast;
      this.temp_angle += dist;
      if (this.temp_angle > 90) {
        this.setState({
          selected: (this.state.selected + 1) % this.state.options.length,
        });
        this.temp_angle = 0;
      }
      if (this.temp_angle < -90) {
        let selected = this.state.selected - 1;
        if (selected < 0) selected = this.state.options.length - 1;
        this.setState({ selected });
        this.temp_angle = 0;
      }
    });
  }
  menuCliked = () => {
    let screenMenu =
      document.getElementsByClassName("screen-menu")[0].classList;

    if (screenMenu.contains("d-none")) {
      $(".screen-menu").removeClass("d-none");
    } else $(".screen-menu").addClass("d-none");
  };
  playClicked = () => {
    if($('#audio')[0]!==undefined){
      if($('#audio')[0].paused){
        $('#audio')[0].play();
        return;
      }
      $('#audio')[0].pause();
  
    }
  };
  nextClicked = () => {
    if (this.state.currently_playing) {
      if (
        document
          .getElementsByClassName("screen-menu")[0]
          .classList.contains("d-none")
      ) {
        if ($("#audio")[0] !== undefined){
          
          if (this.state.song_idx === 5) {
            this.setState({
              song_idx: 0,
            });
            return;
          }
          if (this.state.song_idx !== 5) {
          this.setState({
            song_idx: this.state.song_idx + 1,
          });
          return;
          }
        }
       }
    }

    if (
      this.state.options.length === 3 &&
      !document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    )
      this.setState({
        options: this.state.general_menu,
        song_idx: -1,
        selected: 0,
      });
    if (
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    ) {
      if (this.state.options.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.current_music_selected === 5)
            this.setState({
              current_music_selected: 0,
              
            });
          else
            this.setState({
              current_music_selected: this.state.current_music_selected + 1,
              
            });
        }
      }
    }
  };
  prevClicked = () => {
    if (this.state.currently_playing) {
      if (
        document
          .getElementsByClassName("screen-menu")[0]
          .classList.contains("d-none")
      ) {
        if ($("#audio")[0] !== undefined)
         
          if (this.state.song_idx === 0) {
            this.setState({
              song_idx: 5,
            });
            return;
          }
        if (this.state.song_idx !== -1) {
          this.setState({
            song_idx: this.state.song_idx - 1,
          });
          return;
        }
      }
    }

    if (
      this.state.options.length === 3 &&
      !document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    )
      this.setState({
        options: this.state.general_options,
        song_idx: -1,
        selected: 0,
      });
    if (
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    ) {
      if (this.state.options.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.current_music_selected === 0)
            this.setState({
              current_music_selected: 5,
              song_idx: -1,
            });
          else
            this.setState({
              current_music_selected: this.state.current_music_selected - 1,
              song_idx: -1,
            });
        }
      }
    }
  };
  selectClicked = () => {
    console.log(this.state.currently_playing);
    if (
      this.state.currently_playing &&
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    ) {
      return;
    }
    if (this.state.selected === 1 && this.state.options.length === 4) {
      this.setState({
        options: this.state.music_options,
        selected: 0,
        showPage: -1,
        song_idx: -1,
      });
      return;
    }
    if (
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    ) {
      if (
        this.state.options.length === 3 &&
        this.state.showPage === 0 &&
        this.state.song_idx === -1
      ) {
        this.setState({
          song_idx: this.state.current_music_selected,
        });
        return;
      }
    }
    this.setState({
      showPage: this.state.selected,
      song_idx: -1, //we dont want to play any song
      selected: 0,
    });
    this.menuCliked();
  };
  currentlyOnMusicPage = () => {
    this.setState({
      currently_playing: !this.state.currently_playing,
    });
  };
  render() {
    return (
      <div className="App">
        <Screen
          selectedOption={this.state.selected}
          options={this.state.options}
          showPage={this.state.showPage}
          songIdx={this.state.song_idx}
          currentlyPlaying={this.state.currently_playing}
          current_music_selected={this.state.current_music_selected}
          currentlyOnMusicPage={this.currentlyOnMusicPage}
        />
        <Buttons
          menuClicked={this.menuCliked}
          playClicked={this.playClicked}
          nextClicked={this.nextClicked}
          prevClicked={this.prevClicked}
          selectClicked={this.selectClicked}
        />
      </div>
    );
  }
}
export default App;
