import React from "react";
import "./index.scss"


export default function ButtonPrimary({text, handlerClick}) {
    return (
        <button className="button-primary" onClick={handlerClick}>{text}</button>
    )
}
