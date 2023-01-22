import Card from "../ui/Card";
import calsses from "./NewMeetupForm.module.css";
function NewMeetupForm() {
    return (
        <Card>
            <form className={calsses.form}>
                <div className={calsses.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={calsses.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={calsses.control}>
                    <label htmlFor="address">Address</label>
                    <input type="url" required id="address" />
                </div>
                <div className={calsses.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5" />
                </div>
                <div className={calsses.action}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
