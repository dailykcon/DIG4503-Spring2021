import CORS from "cors";
import Express from "express";
import Database from "./database.js";

const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS());

const db = new Database();

db.connect("lab12", "books");

App.put("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  let result = await db.createOne(ISBN, title, author, description);
  res.json(result);
});

App.get("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const result = await db.readOne(ISBN);
  res.json(result);
});

App.post("/books/search", (req, res) => {
  const ISBN = req.query.ISBN;
  const title = req.query.title;
  const author = req.query.author;
  const description = req.query.description;
  const result = db.readMany(ISBN, title, author, description);
  res.json(result);
});

App.patch("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const result = await db.updateOne(ISBN, title, author, description);
  res.json(result);
});

App.delete("/books/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const result = await db.deleteOne(ISBN);
  res.json(result);
});

App.listen(port);

db.close();