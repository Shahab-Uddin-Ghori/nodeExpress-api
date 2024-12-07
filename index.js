import express from "express";
const app = express();

const PORT = 4001;

const taskOBJ = [
  {
    title: "task 1",
    date: "05-dec",
  },

  {
    title: "task 2",
    date: "05-dec",
  },

  {
    title: "task 3",
    date: "05-dec",
  },
];

app.listen(PORT, () => console.log("sever is running port ", PORT));
app.get("/", (req, res) => {
  res.send("get req");
});

app.post("/", (req, res) => {
  res.status(200).send(taskOBJ);
});
app.put("/", (req, res) => {
  res.send("this is put res  ");
});
app.delete("/", (req, res) => {
  res.send("this is delete resq from my api testing ");
});
