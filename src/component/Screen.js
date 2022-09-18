import React from "react";
import Menu from "./Menu";
import Songs from "./Songs";
import Game from "./Game";
import Setting from "./Setting";
import Coverflow from "./Coverflow";
import Artists from "./Artists";
import Albums from "./Albums";
const Screen = (props) => {
  return (
    <div className="screen-container pt-2 px-2"
    style={
      {
        background:"url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000')"
      }
    }
    >
      <div
        className="screen rounded-3"
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="rounded-3"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "100%",
          }}
        >
          <Menu
            showpage={props.showPage}
            selectedOption={props.selectedOption}
            options={props.options}
          />
          {props.showPage === 0 && props.options.length === 4 ? <Game /> : ""}
          {props.showPage === 2 && props.options.length === 4 ? (
            <Setting />
          ) : (
            ""
          )}
          {props.showPage === 3 && props.options.length === 4 ? (
            <Coverflow />
          ) : (
            ""
          )}

          {props.showPage === 0 && props.options.length === 3 ? (
            <Songs
              songIdx={props.songIdx}
              currentlyPlaying={props.currentlyPlaying}
              current_music_selected={props.current_music_selected}
              currentlyOnMusicPage={props.currentlyOnMusicPage}
            />
          ) : (
            ""
          )}
          {props.showPage === 1 && props.options.length === 3 ? (
            <Artists />
          ) : (
            ""
          )}
          {props.showPage === 2 && props.options.length === 3 ? <Albums /> : ""}
        </div>
      </div>
    </div>
  );
};
export default Screen;
