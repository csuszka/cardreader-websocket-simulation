import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8089, host: "0.0.0.0" });

wss.on('connection', function connection(socket) {
  console.log("connected")

  setInterval(()=>{
    socket.send(
      `{"device": "PROXYCARD","data": {"cardNumber": "xxxxxxx"}}`
      )}, 10000);

});

wss.on('error', console.error);

wss.on("close", () => {
    console.log("Disconnected from server");
});
