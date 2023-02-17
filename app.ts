import express, { Request, Response } from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Welcome to tutorials API" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
