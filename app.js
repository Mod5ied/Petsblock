import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import { env } from "process";
import { config } from "dotenv";
import { json } from "express";
import routes from "./routes/routes.js";
//for ES6 purposes
export const __dirname = path.dirname(fileURLToPath(import.meta.url));
config();

app.use(json());

//routes
app.use("/pets/", routes);
// app.get(["/", "/list"], (req, res) => {
//   res.sendFile("./views/list.html", { root: __dirname });
// });

// app.get("/upload", (req, res) => {
//   res.sendFile("./views/upload.html", { root: __dirname });
// });

// app.get("/query", (req, res) => {
//   res.sendFile("./views/query.html", { root: __dirname });
// });

// app.get("*", (req, res) => {
//   res.status(404).sendFile("./views/404page.html", { root: __dirname });
// });

app.listen(env.PORT, () => {
  console.log("Running on: " + env.PORT);
});
