const express = require('express');

const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mlab database
mongoose.connect('mongodb://casey:test123@ds237947.mlab.com:37947/gql-ninja');

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Listening for requests on port 4000');
});
