import React from "react";
import Highlight from "../Highlight";
import ImageSection1 from "../../assets/img/ImageSection1.svg";
import "./index.scss";

export default function Costs() {
  return (
    <div className="section-costs">
      <div className="container">
        <div className="container__text">
          <h3>
            Share your home, <br /> nanny and costs
          </h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. <Highlight text="Hapu means tribe" /> and it’s our
            foundational 3 tribal principles that empowers you to create and
            manage your own tribe. A tribe that together has the power to create
            new affordable solutions in childcare that work for you and your
            community.
          </p>
          <p>
            <Highlight text="Ready to get started?" />
          </p>
        </div>
        <img className="cost-image" src={ImageSection1} alt="ImageSection1" />
      </div>
    </div>
  );
}
