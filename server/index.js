require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const { usersRouter } = require("./routes/usersRoutes.js");
const { saloonsRouter } = require("./routes/saloonsRoute.js");

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/saloons", saloonsRouter);
app.use(
  cors({
    origin: "https://saloonsyncc.onrender.com",
    optionsSuccessStatus: 200,
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected");
    app.listen(process.env.PORT, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
