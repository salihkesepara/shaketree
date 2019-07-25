import React from "react";
import PropTypes from "prop-types";
import Apple from "./Apple";

function Tree(props) {
  return (
    <div id="tree" className={props.className}>
      {props.apples.map(apple => {
        return <Apple key={apple.key} className={apple.className} />;
      })}

      <img src="./assets/images/tree.png" className="tree" />
    </div>
  );
}

Tree.propTypes = {
  className: PropTypes.string,
  apples: PropTypes.array
};

export default Tree;
