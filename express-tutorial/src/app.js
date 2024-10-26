const express = require("express");

const mockUsers = [
  { id: 1, name: "Samuel", displayName: "Sammy2" },
  { id: 2, name: "Akorede", displayName: "Kdee" },
  { id: 3, name: "Israel", displayName: "Izzy" },
  { id: 4, name: "Daniel", displayName: "DevDan" },
];

const app = express();

const PORT = process.env.PORT || 3000;

//GET Request
app.get("/", (req, res) => {
  res.status(200).send(mockUsers);
});

app.get("/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) {
    return res.status(404).send("Invalid Request");
  }
  res.status(200).send(findUser);
});

//Route Parameter
app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
  }).on("error", (err) => {
    console.error("Server failed to start:", err);
  });
