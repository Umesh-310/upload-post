import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  //
  if (req.method === "POST") {
    const data = req.body;

    const clint = await MongoClient.connect(
      "mongodb+srv://Umesh:Aku%400310@cluster0.ifc8q9b.mongodb.net/meetUp?retryWrites=true"
    );

    const db = clint.db();

    const meetupCollection = db.collection("meetUp");

    const result = await meetupCollection.insertOne({ data });

    clint.close();

    res.status(201).json({ mess: "inserting Done" });
    //   %40
  }
};
export default handler;
