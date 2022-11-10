//inicializar websocket  para frontend
const socketCliente = io();

//recibimos mensaje desde el servidor
//parametros 1 nombre del mensaje 2 callback para manipular data
socketCliente.on("messageFromServer", (data) => {
  console.log("llego desde server " + data);
});
