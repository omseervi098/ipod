import React from 'react';
import Menu  from './Menu';
import Songs from './Songs';
const Screen=(props)=>{
    console.log('on screen page')
    return(
       
        <div className="screen-container p-2  bg-danger">
            <div className='screen rounded-3 bg-light'>
                <Menu
                showpage={props.showPage}
                selectedOption={props.selectedOption}
                options={props.options}
                />
                {props.showPage===0 && props.options.length===3? 
                <Songs
                songIdx={props.songIdx}
                currentlyPlaying={props.currentlyPlaying}
                current_music_selected={props.current_music_selected}
                currentlyOnMusicPage={props.currentlyOnMusicPage}
                />:''}
            </div>
        </div>
    );
}
export default Screen;