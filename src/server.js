const express = require("express");
const { Server } = require("socket.io");
const app = express();
const port = "8080";
//Creamos el servidor rest de express
const serverExpress = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//io:servidor del web socket
const io = new Server(serverExpress); //conectamos con el servidor principal
