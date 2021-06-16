import React, { useEffect, useState } from "react";
import ButtonPrimary from "../Button/index";
import shape from "../../assets/img/shape.png";
import "./index.scss";

export default function NavBar() {
    const [backgroundColor, setBackgroundColor] = useState("transparent");

    function handleShareHost(){
        console.log("hello")
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "transparent" : "#7e49c3";
            setBackgroundColor(backgroundcolor)
        })
    }, [])
    return (
        <div className="header" style={{background: backgroundColor}}>
            <nav className="navbar">
                <div className="navbar-itens">
                    <div className="navbar-itens__logo">
                        <img src={shape} alt="Nanny Share" />
                    </div>
                    <ul className="navbar-itens__content">
                        <li className="navbar__link">Create Your Nanny Share</li>
                        <li className="navbar__link">Browse Shares</li>
                        <li className="navbar__link">Our Story</li>
                    </ul>
                </div>
                <div className="navbar-buttons">
                    <ul className="navbar-buttons__content">
                        <li className="navbar__link"><ButtonPrimary text="Become a Nanny Share Host" handlerClick={handleShareHost} /></li>
                        <li className="navbar__link">Sign In</li>
                    </ul>                    
                </div>
            </nav>
        </div>
    )
}