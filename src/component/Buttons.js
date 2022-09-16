import React from 'react';

const Buttons=(props)=>{
    return (
        <div className="buttons-container bg-info px-5 py-2">
            <div className="button bg-light">
                <div className="button-inner">
                    <div className="button-inner-circle" onClick={props.selectClicked}></div>
                    <div className="menu-btn">
                        <i className="fas fa-bars" onClick={props.menuClicked}></i>
                    </div>
                    <div className="play-btn" onClick={props.playClicked}>
                        <i className="fas fa-play" ></i>
                        <i className='fas fa-pause'></i>
                    </div>
                    <div className="next-btn">
                        <i className="fas fa-forward" onClick={props.nextClicked}></i>
                    </div>
                    <div className="prev-btn">
                        <i className="fas fa-backward" onClick={props.prevClicked} ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Buttons;