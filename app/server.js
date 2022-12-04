const express = require("Express");
const routes = require("../routes/routes");
const noteRoutes = require("../routes/noteRoutes");
require("dotenv").config();

//standard server code
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routes);
app.use("/note", noteRoutes);

app.listen(PORT, () => {console.log(`Listening on PORT: ${PORT}`)})