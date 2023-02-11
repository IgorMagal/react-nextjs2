import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const MeetUpDetailsPage = (props) => {
  //console.log(props.meetupData.image);
  return (
    <>
      <Head>
        <title>React Meetups: Details</title>
        <meta
          name="description"
          content="Browse a hige list of great React Meetups!"
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export default MeetUpDetailsPage;

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://igormagal:3Ukp1UDqYFKf9Z6d@cluster0.htt1uoh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((m) => ({ params: { meetupId: m._id.toString() } })),
  };
};

export const getStaticProps = async (context) => {
  // get data from an API.
  const meetupId = new ObjectId(context.params.meetupId);
  //console.log(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://igormagal:3Ukp1UDqYFKf9Z6d@cluster0.htt1uoh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({
    _id: meetupId,
  });

  client.close();
  //console.log(meetup);

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        title: meetup.title,
      },
    },
  };
};
