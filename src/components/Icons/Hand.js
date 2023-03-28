// icon:hand | Fontawesome https://fontawesome.com/ | Fontawesome
import * as React from "react";

function IconHand(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill={props.fill}
      height="3em"
      width="3em"
      {...props}
    >
      <path
        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v272c0 1.5 0 3.1.1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6l112.4 107c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"
        values={props.values}
      />
    </svg>
  );
}

export default IconHand;
