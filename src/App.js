import './App.css';
import './index.css'
import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './component/Buttons';
import Screen from './component/Screen';
import 'lodash';
import $ from 'jquery';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      options:['Games','Music','Settings','coverflow'],
      selected:1,
      showPage:-1,
      general_options:['Games','Music','Settings','coverflow'],
      music_options:['MyMusic','Artists','Albums','Songs'],
      song_idx:-1,
      currently_playing:false,
    }
  }
  componentDidMount(){
    var containerElement=document.getElementsByClassName('buttons-container')[0];
    var zt=new ZingTouch.Region(containerElement);
    zt.bind(containerElement,'rotate',(e)=>{
      if(e.detail.distanceFromLast>0){
   
          console.log('rotate right');
       }})
  }
  menuCliked(){
    
    
  }
  playClicked(){

  }
  nextClicked(){}
  prevClicked(){}
  selectClicked(){}
  render(){
    return (
      <div className="App">
        <Screen
        selectedOption={this.state.selected}
        options={this.state.options}
        showPage={this.state.showPage}
        songIdx={this.state.song_idx}
        currentlyPlaying={this.state.currently_playing}
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
