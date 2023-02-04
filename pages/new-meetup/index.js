import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return (
    <>
      <h2>NewMeetupPage</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
