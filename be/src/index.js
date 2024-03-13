import express from "express";
import db from "./database.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  try {
    const q = "SELECT * FROM users";

    db.query(q, (err, result) => {
      if (err) return res.status(500);

      return res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(2024, () => console.log("Server running..."));
