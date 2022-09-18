import React from 'react';

class Music extends React.Component
{
    componentDidMount()
    {
        this.props.currentlyOnMusicPage();
    }
    componentWillUnmount()
    {
        this.props.currentlyOnMusicPage();
    }
    render()
    {
        //Fill song progress bar
        
        const {songidx, Songs}=this.props;
        return (
            <div className="screen-music rounded-3" style={{
                backgroundImage: `url(${Songs[songidx].img})` ,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
                <h2>{Songs[songidx].name}</h2>
                <div className="song-image">
                    <img src={Songs[songidx].img} id="song-img" alt="song item"></img>
                </div>
                <div style={{marginTop:20}}>
                   
                    <audio autoPlay="autoplay" controls id="audio" src={Songs[songidx].url}></audio>
                    
                </div>
                <div className='screen-music-instruction text-light'>
                    <p>
                        Press "<i className="fas fa-play"></i>/<i className="fas fa-pause"></i>" button to play/pause.
                    </p>
                </div>
            </div>
        );
    }
};

export default Music;