import React from "react";
import "./index.scss";

// eslint-disable-next-line react/prop-types
export default function ButtonPrimary({ text, handlerClick }) {
  return (
    <button type="button" className="button-primary" onClick={handlerClick}>
      {text}
    </button>
  );
}
