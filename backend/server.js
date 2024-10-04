import "dotenv/config";
import express from "express";
import { todoRoute } from "./Routes/Todos.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/todo", todoRoute);

app.listen(3000, () => console.log(`Server started on port ${port}`));
