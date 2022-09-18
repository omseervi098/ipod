import React from "react";
import $ from "jquery";
const Buttons = (props) => {
  //This are for animation of the buttons
  let background = "";
  if (props.currentlyPlaying) {
    background =
      "http://res.cloudinary.com/dvkxfgprc/image/upload/c_scale,w_440/v1511430406/giphy_8_ww3jdz.gif";
    $(".button-inner").addClass("colored");
  } else {
    background =
      "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000";
    $(".button-inner").removeClass("colored");
  }
  return (
    <div
      className="buttons-container  px-5  py-3"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="button">
        <div className="button-inner">
          <div className="button-inner-circle" onClick={props.selectClicked}>
            <div className="button-circle"></div>
          </div>

          <div className="menu-btn">
            <i className="fas fa-bars" onClick={props.menuClicked}></i>
          </div>
          <div className="play-btn" onClick={props.playClicked}>
            <i className="fas fa-play"></i>
            <i className="fas fa-pause"></i>
          </div>
          <div className="next-btn">
            <i className="fas fa-forward" onClick={props.nextClicked}></i>
          </div>
          <div className="prev-btn">
            <i className="fas fa-backward" onClick={props.prevClicked}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buttons;
