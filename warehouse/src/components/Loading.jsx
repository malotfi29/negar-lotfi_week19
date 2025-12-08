import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <div style={{transform: "translate(-50%,50%)"}}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="2"
        strokeColor="rgba(85, 163, 240, 1)"
      />
    </div>
  );
}

export default Loading;
