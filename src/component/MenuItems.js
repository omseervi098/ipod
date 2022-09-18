import React from "react";
class MenuItems extends React.Component {
  render() {
    const { options, selectedOption } = this.props;
    return (
      <div className="menu-items ">
        {options.map((option, idx) => {
          return (
            <div
              className={selectedOption === idx ? "selected item" : "item"}
              key={idx}
            >
              {option} <i className="fas fa-chevron-right hide"></i>
            </div>
          );
        })}
        {/* if on music menu then show extra option of go back */}
        {options.length === 3 ? (
          <div className="item">
            Go Back <i className="fas fa-backward"></i>{" "}
          </div>
        ) : null}
      </div>
    );
  }
}
export default MenuItems;
