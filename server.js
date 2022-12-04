const express = require("express");
const routes = require("./routes/routes");
const apiRoutes = require("./routes/apiRoutes");

//standard server code
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {console.log(`Listening on PORT: ${PORT}`)})
