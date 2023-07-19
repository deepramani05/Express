const express = require("express");

const server = express();
const conect=require("./database");
const user = require("./mongoose");
const { default: mongoose } = require("mongoose");
server.use(express.json());

let db = [
  {
    id: 1,
    title: "iPhone 9",
  },
  {
    id: 2,
    title: "iPhone X",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
  },
];
server.get("/home", (req, res) => {
  res.send("Hello World");
});

server.post("/login",async (req, res) => {
  let exists = false;
  for (let i = 0; i < db.length; i++) {
    if (db[i].name == req.body.name) {
      exists = true;
      break;
    }
  }
  if (exists) {
    res.send("already login");
  } else {
    db.push(req.body);
    res.send("welcome");
  }
  await user.create(req.body);
});

server.delete("/delete/:id",async (req, res) => {

  await user.findByIdAndDelete(req.params.id);
  res.send("deleted")
});

server.patch("/update/:id",async (req, res) => {
  await user.findByIdAndUpdate(req.params.id,req.body);
  res.send("updated");
})

server.get("/logout", async (req, res) => {
  let data= await user.find();
  res.send(data);
});

server.listen(8080, () => {
  console.log("server is running");
  conect();
});
