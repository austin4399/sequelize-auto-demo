
import config from 'config';
import { Example } from './models/Example';
import express, {Express, Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example 🤟" });
});


const start = async (): Promise<void> => {
  try {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();