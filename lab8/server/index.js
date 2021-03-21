// Import Express
import Express from "express";

// Import CORS
import CORS from "cors";

// Create an instance of Express
const App = Express();

// Store a port number
const port = 45030;

App.use(CORS());

let names = [
  "Cortney",
  "Dewayne",
  "Trenton",
  "Pamala",
  "Ettie",
  "Errol",
  "Lorrie",
  "Hang",
  "Lauryn",
  "Caterina",
  "Isa",
  "Marcela"
];

App.put("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = { name: person };
    names.push(person);
    res.json(result);
});

App.get("/people/:person", (req, res) => {
  let person = req.params.person;
  let result = { name: "Name not found" };

  names.forEach(value => {
    if (value == person) {
      result = { name: value };
    }
  });
  res.json(result);
});

App.get("/search/:name", (req, res) => {
  let result = { search: ["Name not found"] };
  let arrayResult = [];

  names.forEach(value => {
    if (value.includes(req.params.name)) {
      arrayResult.push(value);
    }
  });

  if (arrayResult.length > 0) {
    result = { search: arrayResult };
  }

  res.json(result);
});

// Listen (and start server)
App.listen(port, () => {
  console.log("Server running!");
});

