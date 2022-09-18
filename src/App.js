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
    //initial state
    this.temp_angle = 0;
    this.total_angle = 0;
    //background images
    this.background = [
      "https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?w=996&t=st=1663478552~exp=1663479152~hmac=f7ca1f8847b6ad1f54c6871ea34bf0dc3fb7e0e1d03179c87b39ff9667f918bc",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "https://img.freepik.com/premium-photo/wireless-sound-audio-headphones-colored-background-music-app-listening-podcasts-radio-audiobooks-concept-high-quality-photo_90380-3136.jpg",
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcHB8ZW58MHx8MHx8&w=1000&q=80",
    ];
    this.state = {
      options: ["Games", "Music", "Settings", "coverflow"],
      selected: 0,
      showPage: -1,
      general_options: ["Games", "Music", "Settings", "coverflow"],
      music_options: ["Songs", "Artists", "Albums"],
      song_idx: -1,
      current_music_selected: 1,
      currently_playing: false,
    };
  }
  componentDidMount() {
    var containerElement = document.getElementsByClassName("button-inner")[0];
    var zt = new ZingTouch.Region(containerElement);
    var innercircle = document.getElementsByClassName("button-inner-circle");
    zt.bind(containerElement, "rotate", (e) => {
      let dist = e.detail.distanceFromLast;
      this.total_angle += dist;
      this.temp_angle += dist;
      //rotate inner circle so that it rotates with the wheel
      innercircle[0].style.transform = `rotate(${this.total_angle}deg)`;
      if (this.temp_angle > 70) {
        this.setState({
          selected: (this.state.selected + 1) % this.state.options.length,
        });
        this.temp_angle = 0;
      }
      if (this.temp_angle < -70) {
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
    //Toggle menu
    if (screenMenu.contains("d-none")) {
      $(".screen-menu").removeClass("d-none");
    } else $(".screen-menu").addClass("d-none");
  };
  playClicked = () => {
    if ($("#audio")[0] !== undefined) {
      if ($("#audio")[0].paused) {
        //if audio is paused then play it
        $("#audio")[0].play();
        $(".button-inner").addClass("colored");
        $(".buttons-container").css(
          "background-image",
          "url(http://res.cloudinary.com/dvkxfgprc/image/upload/c_scale,w_440/v1511430406/giphy_8_ww3jdz.gif)"
        );
        return;
      }
      //else pause it
      $("#audio")[0].pause();
      $(".button-inner").removeClass("colored");
      $(".buttons-container").css(
        "background-image",
        "url(https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000)"
      );
    }
  };
  nextClicked = () => {
    if (this.state.currently_playing) {
      if (
        document
          .getElementsByClassName("screen-menu")[0]
          .classList.contains("d-none")
      ) {
        //if menu is not visible and changing song when playing
        if ($("#audio")[0] !== undefined) {
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
      //if menu is visible and it is music menu
      this.setState({
        options: this.state.general_menu,
        song_idx: -1,
        selected: 0,
      });
    if (
      document.getElementsByClassName("screen-menu")[0].classList.contains("d-none") &&
      this.state.options.length === 3 &&
      this.state.showPage === 0) 
    {// if i am on all songs page 
      if (this.state.current_music_selected === 5)
        this.setState({
          current_music_selected: 0,
        });
      else
        this.setState({
          current_music_selected: this.state.current_music_selected + 1,
        });
    }
  };
  prevClicked = () => {
    if (this.state.currently_playing) {
      if (
        document
          .getElementsByClassName("screen-menu")[0]
          .classList.contains("d-none")
      ) {//if menu is not visible and changing song when playing
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
    )//if menu is visible and it is music menu
      this.setState({
        options: this.state.general_options,
        song_idx: -1,
      });
    if (
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    ) {
      if (this.state.options.length === 3) {
        if (this.state.showPage === 0) {
          if (this.state.current_music_selected === 0)
          //if i am on all songs page
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
    if (
      this.state.currently_playing &&
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("d-none")
    ) {
      //if i am on currently playing page then click on select will make no sense
      return;
    }
    if (this.state.selected === 1 && this.state.options.length === 4) {
      //If i am on general menu and i select music
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
        //if i am on music menu and i select a song
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
    //select background image
    let background;
    if (!this.state.currently_playing && this.state.showPage !== 0) {
      if (this.state.options.length === 3) {
        background = this.background[0];
      } else if (this.state.options.length === 4) {
        background = this.background[2];
      }
    } else if (this.state.showPage === 0) {
      background = this.background[3];
    }
    return (
      <div className="App"
      style={{
        
      }}
      >
        <Screen
          // select random background
          background={background}
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
          currentlyPlaying={this.state.currently_playing}
        />
      </div>
    );
  }
}
export default App;
