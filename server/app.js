const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb://admin:admin@cluster0-shard-00-00-t6a6f.mongodb.net:27017,cluster0-shard-00-01-t6a6f.mongodb.net:27017,cluster0-shard-00-02-t6a6f.mongodb.net:27017/graphql-demo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
);

mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use("/graphql", graphqlHttp({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("listening on port 4000");
});
