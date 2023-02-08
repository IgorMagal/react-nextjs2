import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetUpDetailsPage = (props) => {
  return (
    <MeetupDetail
      image={props.data.image}
      title={props.data.title}
      address={props.data.address}
      description={props.data.description}
    />
  );
};

export default MeetUpDetailsPage;

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: `id_1`,
        },
      },
      {
        params: {
          meetupId: "id_2",
        },
      },
      {
        params: {
          meetupId: "id_3",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // get data from an API.
  const meetupId = context.params.meetupId;
  return {
    props: {
      data: {
        image:
          "https://media.istockphoto.com/id/1346988230/photo/frontenac-castle-in-quebec-city.jpg?b=1&s=170667a&w=0&k=20&c=SUX8V4nIE3n9709i5ziZQPNMawQWV_FJ2vh2lmTKDfA=",
        id: meetupId,
        title: "Meetup Details",
        address: "1st Street, NY NY",
        description: "This is meetup number 1.",
      },
    },
  };
};
