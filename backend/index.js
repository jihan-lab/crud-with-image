import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import db from "./config/Database.js";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

db.authenticate();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, () => console.log("Server running at port 5000..."));
