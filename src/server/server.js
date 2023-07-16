require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const ViteExpress = require("vite-express");

mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
}); 

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB!'));

app.use(express.json())

const hockeyPlayersRouter = require('./routes/hockeyPlayers');
app.use('/hockeyPlayers', hockeyPlayersRouter);
 
ViteExpress.listen(app, 3000, () => 
  console.log("Server is listening on port 3000...")
);
   