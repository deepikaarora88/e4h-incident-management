import React from "react";
import PropTypes from "prop-types";

export const North = ({ className, height = "24", width = "24", style = {}, fill = "#7a2829", onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_1561)">
        <path d="M5 9L6.41 10.41L11 5.83V22H13V5.83L17.59 10.42L19 9L12 2L5 9Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_1561">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



North.propTypes = {
  /** custom width of the svg icon */
  width: PropTypes.string,
  /** custom height of the svg icon */
  height: PropTypes.string,
  /** custom colour of the svg icon */
  fill: PropTypes.string,
  /** custom class of the svg icon */
  className: PropTypes.string,
  /** custom style of the svg icon */
  style: PropTypes.object,
  /** Click Event handler when icon is clicked */
  onClick: PropTypes.func,
};