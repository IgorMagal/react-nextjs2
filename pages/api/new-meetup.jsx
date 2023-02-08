// /api/new-meetup/

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const obj = Object.fromEntries(data);

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://igormagal:3Ukp1UDqYFKf9Z6d@cluster0.htt1uoh.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const collection = client.db().collection("meetups");
      const result = await collection.insertOne(obj);

      console.log("Result from DB");
      console.log(result);
      client.close();
      res.status(201).json({ message: "Meetup inserted succesfully!" });
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
  }
};

export default handler;

//MongoDb Conn
//
