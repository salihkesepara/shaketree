import React from "react";
import PropTypes from "prop-types";

function Apple(props) {
  return <img src="./assets/images/apple.png" className={`apple ${props.className}`} />;
}

Apple.propTypes = {
  className: PropTypes.string
};

export default Apple;
