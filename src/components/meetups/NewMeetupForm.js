import { useRef } from "react";

import Card from "../ui/Card";
import calsses from "./NewMeetupForm.module.css";
function NewMeetupForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        console.log(meetupData);
    }

    return (
        <Card>
            <form className={calsses.form} onSubmit={submitHandler}>
                <div className={calsses.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input
                        type="text"
                        required
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={calsses.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={calsses.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        required
                        id="address"
                        ref={addressInputRef}
                    />
                </div>
                <div className={calsses.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        required
                        rows="5"
                        ref={descriptionInputRef}
                    />
                </div>
                <div className={calsses.action}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
