import React from "react";

const Die = (props) => {
  return (
    <button
      style={{
        color: props.isHeld ? "black" : "black" ,
        backgroundColor: props.isHeld
          ? "rgba(244, 233, 33, 0.34)"
          : "rgba(243, 218, 218, 0.399)",
      }}
      onClick={props.setValue}
    >
      {props.value}
    </button>
  );
};

export default Die;
