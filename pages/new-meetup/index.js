import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: enteredMeetupData,
      headers: { "Content-Type": "application/JSON" },
    });
    //const data = await response.json();

    console.log(response.status);
  };

  return (
    <>
      <h2>NewMeetupPage</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
