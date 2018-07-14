const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact');

app.listen(port, function() {
  console.log(`🚀 ==> API server listening on port ${PORT}`);
});

