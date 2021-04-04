//import Express from "express";
import MongoClient from "mongodb";

const url =
  "mongodb+srv://KevinConnolly:ZL5yEUFAtlcQMypa@cluster0.yuzwq.mongodb.net";

class Database {
  constructor() {
    this.connection = null;
    this.database = null;
    this.collection = null;
  }

  async connect() {
    this.connection = await MongoClient.connect(url, { useUnifiedTopology: true});
    this.database = this.connection.db("lab10");
    this.collection = this.database.collection("people");
  }

  async createOne() {
    if (this.collection != null) {
      let results = await this.collection.insertOne({
        firstName: "Kevin",
        lastName: "Connolly",
        favoriteColor: "Red"});
      return results;
    }
  }

  async readOne() {
    if (this.collection != null) {
      let results = await this.collection.findOne({
        firstName: " ",
        lastName: " ",
        favoriteColor: " "});
      return results;
    }
  }

  close() {
    if (this.collection != null) {
      this.collection.close();
    }
  }
}

export default Database;