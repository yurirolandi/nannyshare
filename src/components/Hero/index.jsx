import React from "react";
import { FaPlay } from "react-icons/fa";
import headerCard from "../../assets/img/headerCard.svg"
import "./index.scss";

export default function Hero() {
    return (
        <div className="Hero">
            <div className="container">
                <div className="container__text">
                    <h2>
                        Easily create or join a local nanny share with Hapu
                    </h2>
                    <p>
                        Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.
                    </p>
                    <div className="container-video">
                        <div className="play-video">
                            <FaPlay />
                        </div>
                        <p>
                            See hapu in action (27 seconds)
                        </p>
                    </div>
                </div>

                <div className="container__image">
                    <img src={headerCard} alt="manage Your Nannu Share" />
                </div>
            </div>
        </div>

    )
}