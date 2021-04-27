import MongoClient from "mongodb";
const URL = "mongodb+srv://KevinConnolly:ZL5yEUFAtlcQMypa@cluster0.yuzwq.mongodb.net";

class Database {

    constructor() {
      this.connection = null;
      this.database = null;
      this.collection = null;
    }
  
    async connect(lab12, books) {
      this.connection = await MongoClient.connect(URL);
      this.database = this.connection.db(lab12);
      this.collection = this.database.collection(books);
    }
  
    async createOne(ISBN, title, author, description) {
      if (this.collection != null) {
        const result = await this.collection.insertOne({
          "ISBN": ISBN,
          "title": title,
          "author": author,
          "description": description
        });
        return {
          "ISBN": ISBN,
          "title": title,
          "author": author,
          "description": description
        };
      } else {
        return null;
      }
    }
  
    async readOne(ISBN) {
      if (this.collection != null) {
        const result = await this.collection.findOne({
          "ISBN": ISBN
        });
        return { result };
      } else {
        return { book: "not found" };
      }
    }
  
    async readMany(ISBN, title, author, description) {
      if (this.collection != null) { const result = await this.collection.find({
        "ISBN":ISBN,
        "title": title,
        "author": author,
        "description": description
        });
      }
      return { book: result };
    }
  
    async updateOne(ISBN, title, author, description) {
      if (this.collection != null) { const result = await this.collection.updateOne({ "ISBN": ISBN }, { $set: { "title": title, "author": author, "description": description } });
        return { "title": title, "author": author, "description": description };
      } else {
        return null;
      }
    }
  
    async deleteOne(ISBN) {
      if (this.collection != null) {
        const result = await this.collection.deleteOne({ "ISBN": ISBN });
        return { "books": result.deletedCount };
      } else {
        return { "books": 0 };
      }
    }
  
    close() {
      if (this.collection != null) {
        this.collection.close();
      }
    }
  }
  
  export default Database;