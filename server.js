var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var cors = require("cors");

app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected");
});

http.listen(8080, () => {
  console.log("listening on :8080");
});
