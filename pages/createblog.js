import { useState } from "react";
import Navbar from "../components/Navbar";
import { API_ROOT_URL, VALIDATION_MESSAGE, CREATE_SUCCESS_MESSAGE } from '../utils/constants';

const createblog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        if (title && body) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const bodyData = JSON.stringify({
                title,
                body
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: bodyData,
            };

            fetch(API_ROOT_URL, requestOptions)
                .then(response => response.text())
                .then(result => {
                    alert(`${CREATE_SUCCESS_MESSAGE} \n ${result} `)
                    setBody("");
                    setTitle("");
                })
                .catch(error => console.log('error', error));
        } else {
            alert(VALIDATION_MESSAGE)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="form-wrapper">
                <input
                    name="title"
                    value={title}
                    placeholder="Enter the title"
                    onChange={(event) => setTitle(event.target.value)}
                    className="input"
                />
                <textarea rows="6"
                    name="body"
                    value={body}
                    placeholder="Enter the body"
                    onChange={(event) => setBody(event.target.value)}
                    className="text-area"
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="button">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default createblog;