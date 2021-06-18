import React from "react";
import { FaPlay } from "react-icons/fa";
import { Experiment, Variant } from "react-lean-analytics";
import headerCard from "../../assets/img/headerCard.svg";
import "./index.scss";

const MyHeroExperience = ({ title, description }) => (
  <div className="container">
    <div className="container__text">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="container-video">
        <div className="play-video">
          <FaPlay />
        </div>
        <p>See hapu in action (27 seconds)</p>
      </div>
    </div>

    <div className="container__image">
      <img
        className="hero-image"
        src={headerCard}
        alt="manage Your Nannu Share"
      />
    </div>
  </div>
);

export default function Hero() {
  return (
    <div className="Hero">
      <Experiment
        trackedAction="text change"
        id="842d507a-dc2e-4985-88f1-e944aa73720e"
      >
        <Variant>
          {(callback) => (
            <MyHeroExperience
              onAction={callback}
              title="Easily create or join a local nanny share with Hapu;"
              description="Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare."
            />
          )}
        </Variant>
        <Variant>
          {(callback) => (
            <MyHeroExperience
              onAction={callback}
              title=" Create the childcare you need at a price you can afford"
              description="Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started."
            />
          )}
        </Variant>
      </Experiment>
    </div>
  );
}
