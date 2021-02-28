import Express from "express";
const App = Express();
const port = 45030;
const object = {
  name: "Kevin",
  color: "Red"
};

App.get("/", function(req, res) {
  res.send("Hello World!");
});

App.get("/person", function(req, res) {
  res.json(object);
});

App.listen(port, function() {
  console.log("Server running!");
});