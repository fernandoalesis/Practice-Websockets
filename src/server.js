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

//middlewares
//damos acceso a la carpeta public para ver el index
app.use(express.static(__dirname + "/public"));

//crear conexion con socket cliente
//parametros: 1 evento connection, 2 callback para trabajar variables de la conexion del cliente
io.on("connection", (socket) => {
  console.log("nuevo socket conectado", socket.id);
  //enviar informacion del servidor al frontend
  //parametros: 1 evento (cualquiera) 2 respuesta
  socket.emit("messageFromServer", "conectado exitosamente");
});
