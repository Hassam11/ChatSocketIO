import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const PORT = 4000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (body) => {
    console.log(body);
    socket.broadcast.emit("message", {
        body,
        from: socket.id.slice(6)
    }); 
  });
});

httpServer.listen(PORT);
console.log("PORT LISTEN: ", PORT);
