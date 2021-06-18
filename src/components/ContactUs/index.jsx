import React from "react";
import Form from "../Form";
import BorderLine from "../BorderLine";
import "./index.scss";

export default function ContactUs() {
  return (
    <div className="section-contact">
      <BorderLine />
      <div className="container">
        <div className="container__text">
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
