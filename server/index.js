const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A friend asks only for your time not your money.",
  ];

  // choose random fortune
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/color", (req, res) => {
  // generate a random color
  const randomRGB = () => Math.floor(Math.random() * 255);
  const rgb = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

  res.status(200).send(rgb);
});

app.listen(4000, () => console.log("Server running on 4000"));
