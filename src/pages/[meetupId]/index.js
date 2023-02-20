import React from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetups.image}
      title={props.meetups.title}
      address={props.meetups.address}
      description={props.meetups.description}
      id={props.meetups.id}
    />
  );
};
export const getStaticPaths = async () => {
  const cleint = await MongoClient.connect(
    "mongodb+srv://Umesh:Aku%400310@cluster0.ifc8q9b.mongodb.net/meetUp?retryWrites=true"
  );
  const db = cleint.db();
  const meetupCollection = db.collection("meetUp");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  const meetupData = meetups.map((value) => ({
    params: { meetupId: value._id.toString() },
  }));
  cleint.close();
  return {
    fallback: false,
    paths: meetupData,
  };
};
export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const cleint = await MongoClient.connect(
    "mongodb+srv://Umesh:Aku%400310@cluster0.ifc8q9b.mongodb.net/meetUp?retryWrites=true"
  );
  const db = cleint.db();
  const meetupCollection = db.collection("meetUp");
  const meetups = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  cleint.close();
  return {
    props: {
      meetups: {
        image: meetups.data.image,
        title: meetups.data.title,
        address: meetups.data.address,
        description: meetups.data.description,
        id: meetupId,
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
