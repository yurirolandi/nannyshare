import React from "react";
import Highlight from "../Highlight";
import BorderLine from "../BorderLine";
import ImageSection3 from "../../assets/img/ImageSection3.svg";
import "./index.scss";

export default function SharedPayments() {
    return (
        <div className="section-shared">
             <BorderLine />
            <div className="container">
                <img className="image-payments" src={ImageSection3} alt="ImageSection3" />
                <div className="container__text">
                    <h3>Shared payments made simple</h3>
                    <p>
                        Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
                    </p>

                    <p>
                        <Highlight text="Read how Bridget’s share (without Hapu) ended over $15"/>                       
                    </p>
                </div>
            </div>           
        </div>
    )
}