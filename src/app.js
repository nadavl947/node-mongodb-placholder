const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const MongoClient = mongodb.MongoClient;
const dbName = "blog";
const connectionUrl = "mongodb://127.0.0.1:27017";

const usersRoutes = require("./routes/usersRoutes");
const postsRoutes = require("./routes/postsRoutes");
const todosRoutes = require("./routes/todosRoutes");
const moviesRoutes = require("./routes/moviesRoutes");

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log("connection faild");
    }

    const db = client.db(dbName);

    app.use((req, res, next) => {
      res.locals.db = db;
      res.locals.mongodb = mongodb;
      next();
    });

    app.use("/users", usersRoutes);
    app.use("/posts", postsRoutes);
    app.use("/todos", todosRoutes);
    app.use("/movies", moviesRoutes);
  }
);

app.listen(3000, () => {
  console.log("app is on port 3000");
});
