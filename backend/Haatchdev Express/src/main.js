import express from "express";
import { users } from "./users.js";

const app = express();

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}, Wassup bro?`);
  //   res.json({ message: "Hello World!" });
});

app.get("/users", (req, res) => {
  res.json({ users });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" }); // Handle user not found
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3001");
});
