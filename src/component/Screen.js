import React from 'react';
import Menu  from './Menu';
import Songs from './Songs';
const Screen=(props)=>{
    return(
       
        <div className="screen-container p-2 bg-danger">
            <div className='screen rounded-3 bg-light' style={{
               backgroundImage: `url(${props.background})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
            }}>
                <div className='rounded-3' style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    height: '100%',
                }}>
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
        </div>
    );
}
export default Screen;