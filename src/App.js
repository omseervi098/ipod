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
    this.total_angle = 0;
    this.background = ['https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?w=996&t=st=1663478552~exp=1663479152~hmac=f7ca1f8847b6ad1f54c6871ea34bf0dc3fb7e0e1d03179c87b39ff9667f918bc','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80','https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80','https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcHB8ZW58MHx8MHx8&w=1000&q=80'];
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
      document.getElementsByClassName("button")[0];
    var zt = new ZingTouch.Region(containerElement);
    var innercircle = document.getElementsByClassName('button-inner-circle');
    zt.bind(containerElement, "rotate", (e) => {
      //rotate the wheel
      let dist = e.detail.distanceFromLast;
      this.total_angle += dist;
      this.temp_angle += dist;
      //rotate inner circle so that it rotates with the wheel
      innercircle[0].style.transform = `rotate(${this.total_angle}deg)`;
      if (this.temp_angle > 120) {
        this.setState({
          selected: (this.state.selected + 1) % this.state.options.length,
        });
        this.temp_angle = 0;
      }
      if (this.temp_angle < -120) {
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
    //select random background
    let background;
    if(!this.state.currently_playing &&this.state.showPage!==0){
      if(this.state.options.length===3){
     background = this.background[0];
      }else if(this.state.options.length===4){
        background = this.background[2];
      }
    }else if(this.state.showPage===0){
      background = this.background[3];
    }
    return (
      <div className="App">
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
        />
      </div>
    );
  }
}
export default App;
