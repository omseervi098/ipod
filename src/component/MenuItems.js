import React from 'react';
class MenuItems extends React.Component{
    render(){
        const {options,selectedOption}=this.props;
        return (   
            <div className="menu-items ">
                {options.map((option,idx)=>{
                    return (
                        <div className={selectedOption===idx?'selected item':'item'} key={idx}>
                            {option} <i className="fas fa-chevron-right hide"></i>
                        </div>
                    );
                }
                )}
            </div>        
        )
    }
}
export default MenuItems;