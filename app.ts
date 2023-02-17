import express, { Request, Response } from "express";

import routes from "./routes";
import middlewares from "./middlewares";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Welcome to tutorials API" });
});

app.use("/tutorials", routes.tutorialRouter);
app.use(middlewares.errorHandling);

app.listen(port, () => console.log(`Server running on port ${port}`));
