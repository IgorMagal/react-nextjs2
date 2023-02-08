import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "id_1",
    image:
      "https://media.istockphoto.com/id/1346988230/photo/frontenac-castle-in-quebec-city.jpg?b=1&s=170667a&w=0&k=20&c=SUX8V4nIE3n9709i5ziZQPNMawQWV_FJ2vh2lmTKDfA=",
    title: "Meetup 1",
    address: "1st Street, NY NY",
  },
  {
    id: "id_2",
    image:
      "https://media.gettyimages.com/id/1168982879/photo/quebec-city-at-sunset.jpg?s=612x612&w=gi&k=20&c=mq7kLKWufRwWjAgFU57r1Jejv5ZiYMNpQffQDgUHSWA=",
    title: "Meetup 2",
    address: "1st Street, NY NY",
  },
  {
    id: "id_3",
    image:
      "https://media.istockphoto.com/id/1346988230/photo/frontenac-castle-in-quebec-city.jpg?b=1&s=170667a&w=0&k=20&c=SUX8V4nIE3n9709i5ziZQPNMawQWV_FJ2vh2lmTKDfA=",
    title: "Meetup 3",
    address: "1st Street, NY NY",
  },
];

const MeetupListPage = (props) => {
  return (
    <>
      <h2>MeetupListPage</h2>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from a server.
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // fetch data from a server.
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
};

export default MeetupListPage;
