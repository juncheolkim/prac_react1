import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoaging] = useState(true);
    const [LoadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoaging(true);
        fetch(
            "https://react-getting-started-174ef-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };

                    meetups.push(meetup);
                }

                setIsLoaging(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={LoadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;
