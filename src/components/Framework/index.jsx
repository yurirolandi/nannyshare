import React from "react";
import Highlight from "../Highlight";
import ImageSection4 from "../../assets/img/ImageSection4.svg";
import BorderLine from "../BorderLine";
import "./index.scss";

export default function Framework() {
  return (
    <div className="framework">
      <BorderLine />
      <div className="container">
        <div className="container__text">
          <h3>A framework built for the long term</h3>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>

          <p>
            <Highlight text="Read how Hapu’s tribal background defines our app" />
          </p>
        </div>
        <img
          className="framework-image"
          src={ImageSection4}
          alt="ImageSection4"
        />
      </div>
    </div>
  );
}
