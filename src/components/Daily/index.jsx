import React from "react";
import ImageSection5 from "../../assets/img/ImageSection5.svg";
import BorderLine from "../BorderLine";
import "./index.scss";

export default function Daily() {
    return (
        <div className="section-daily">
            <BorderLine />
            <div className="container">
                <img src={ImageSection5} alt="ImageSection5" />
                <div className="container__text">
                    <h3>Coming soon: Nanny Share Daily Diary!</h3>
                    <p>
                        With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
                    </p>
                </div>
            </div>
        </div>
    )
}