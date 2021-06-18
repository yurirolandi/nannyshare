import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Highlight from "../Highlight";
import BorderLine from "../BorderLine";
import calendar from "../../assets/img/calendar.svg";
import Logo from "../../assets/img/Logo.svg";
import "./index.scss";

export default function Footer() {
  return (
    <footer className="footer-page">
      <div className="footer-page__colunmn">
        <div className="footer-page__text">
          <h3>Become a nanny share host</h3>
          <p>Takes less than 5 minutes to get started</p>
        </div>
        <div className="footer-page__button">
          <div className="button__logo">
            <img src={calendar} alt="calendar" />
          </div>

          <div className="button__text">
            <p>Create Your Nanny Share</p>
            <p className="text-small">Takes less than 5 minutes</p>
          </div>
        </div>
        <div className="footer-page__text">
          <p>
            <Highlight text="Or browse local nanny-shares" />
          </p>
        </div>
      </div>

      <div className="footer-page__row">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text">
          <ul>
            <li>Share Your Nanny</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Terms &amp; Privacy</li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
      <BorderLine />
      <p className="copyright">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  );
}
