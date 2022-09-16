import React from 'react';
import Menu  from './Menu';
const Screen=(props)=>{
    
    return(
        <div className="screen-container p-2  bg-danger">
            <div className='screen bg-light'>
                <Menu
                selectedOption={props.selectedOption}
                options={props.options}
                />
            </div>
        </div>
    );
}
export default Screen;