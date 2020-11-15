import React from "react";
import propTypes from "prop-types";
import SVGAnimation from "../SVGAnimation";

const NavItemBackground = (props) => {
  const navItemBackgroundState = {
    paths: [
      {
        shortPath:
          "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H59.4602C68.5949 16.5398 76 9.13469 76 0V89C76 79.4303 68.2422 71.6726 58.6726 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
        longPath:
          "M0 44.1062C0 28.8817 12.3419 16.5398 27.5664 16.5398H169.46C178.595 16.5398 186 9.13469 186 0V89C186 79.4303 178.242 71.6726 168.673 71.6726H27.5664C12.3419 71.6726 0 59.3307 0 44.1062Z",
      },
    ],
  };

  return (
    <svg
      width="186"
      height="89"
      viewBox="0 0 186 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <filter
        id="inset-shadow"
        x="-70px"
        y="-70px"
        width="200%"
        height="200%"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
      <path
        d={navItemBackgroundState.paths[0].shortPath}
        filter="url(#inset-shadow)"
      >
        <SVGAnimation
          duration="0.1s"
          attType="XML"
          beginAnimation="startAnimation.click"
          attName="d"
          fill="freeze"
          from={navItemBackgroundState.paths[0].shortPath}
          to={navItemBackgroundState.paths[0].longPath}
          id={`expand-${props.id}`}
        />
        <SVGAnimation
          duration="0.1s"
          attType="XML"
          beginAnimation="startAnimation.click"
          attName="d"
          fill="freeze"
          from={navItemBackgroundState.paths[0].longPath}
          to={navItemBackgroundState.paths[0].shortPath}
          id={`subtract-${props.id}`}
        />
      </path>
    </svg>
  );
};

export default NavItemBackground;

NavItemBackground.propTypes = {
  id: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
};
