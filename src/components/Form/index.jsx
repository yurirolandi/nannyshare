import React, { useState } from "react";
import ButtonPrimary from "../Button";
import { jungleServices } from "../../services/jungleServices";
import { ToastContainer, toast } from 'react-toastify';
import "./index.scss";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const notify = (text) => toast.success(text);
    const notifyError = (text) => toast.error(text);



    async function handlerSubmit(event) {
        event.preventDefault();

        if (name === "") {
            notifyError("Name is required!!!");
            return
        }

        if (email === "") {
            notifyError("Email is required!!!");
            return
        }

        if (!email.includes('@')) {
            notifyError("invalid email");
            return
        }

        let body = {
            name,
            email
        }

        const result = await jungleServices.postForm(body);

        if (result) {
            notify("Form sent successfully!!!");
            setName("");
            setEmail("");
        } else {
            notifyError("An error occurred while trying to send the form");
            setName("");
            setEmail("");
        }
    }

    return (
        <form className="share-form">

            <div className="input-block">
                <input
                    id="name"
                    placeholder="Your name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <input
                    id="email"
                    placeholder="Your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ButtonPrimary text="Send" handlerClick={handlerSubmit} />
            </div>

            <ToastContainer />
        </form>
    )
}