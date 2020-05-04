const http = require('http');
const express = require('express');
const config = require('../config');
const cors = require('cors');
const socket = require('./lib/socket');
const bodyParser=require("body-parser"); 
const mongoose = require('mongoose'); 
let registrationRoutes = require('./route');

const MONGO_URL =`mongodb+srv://admin:sk9tHC4RaKHnDYC6@cluster0-mvguz.mongodb.net/video-call-soarlogic?retryWrites=true&w=majority` 

var app=express(); 
const server = http.createServer(app);

app.use('/', express.static(`${__dirname}/../client`));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", registrationRoutes);

mongoose.connect(MONGO_URL,{useUnifiedTopology: true,  useNewUrlParser: true}).then(()=>{
  server.listen(config.PORT, () => {
    socket(server);
    console.log('Server is listening at :', config.PORT);
  });
}).catch(err =>{
  console.log("Error:",err)
});