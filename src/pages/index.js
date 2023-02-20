import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import React from "react";

function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
}

export const getStaticProps = async () => {
  const clint = await MongoClient.connect(
    "mongodb+srv://Umesh:Aku%400310@cluster0.ifc8q9b.mongodb.net/meetUp?retryWrites=true"
  );
  const db = clint.db();
  const meetupCollection = db.collection("meetUp");
  const meetups = await meetupCollection.find().toArray();
  const meetupData = meetups.map((value) => ({
    title: value.data.title,
    image: value.data.image,
    address: value.data.address,
    id: value._id.toString(),
  }));
  return {
    props: {
      meetups: meetupData,
    },
    revalidate: 10,
  };
};

// export async function getServerSideProps(constext) {
//   const req = context.req;
//   const res = contextres;
//   return {
//     props: {
//       meetups: DUMMY,
//     },
//   };
// }
// sudo apt install gnome-shell-extension-prefs

export default Home;
