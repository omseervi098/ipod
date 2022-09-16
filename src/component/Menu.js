import React from "react";
import MenuItems from "./MenuItems";
class Menu extends React.Component {
  render() {
    return (
      <div className="screen-menu">
        <MenuItems
          options={this.props.options}
          selectedOption={this.props.selectedOption}
        />
      </div>
    );
  }
}
export default Menu;
