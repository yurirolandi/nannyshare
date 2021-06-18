import React from "react";
import Highlight from "../Highlight";
import Profileimage from "../../assets/img/ProfileImage.png";
import "./index.scss";

export default function DayCare() {
  return (
    <div className="section-care">
      <div className="container">
        <img src={Profileimage} alt="Profileimage" />
        <p className="text-highlight">
          <Highlight text="Sarah’s day care available now in North Sydney" />
        </p>
        <p className="text">Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </div>
    </div>
  );
}
