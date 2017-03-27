var net = require('net')

function bin2String(array) {
  var result = "";
  for (var i in array) {
    result += String.fromCharCode(array[i]);
  }
  return result;
}

net.createServer(function (socket) {
  socket.name = socket.remoteAddress + ":" + socket.remotePort

  console.log('connected to', socket.name)

  socket.write("Server says Welcome \n")

  socket.on('data', function (data) {
    console.log('recieved from client: ', data.toString())
    socket.write("Echo " + data.toString(), 'utf-8');// + data.toString(), 'utf-8')
  });

  socket.on('end', function () {
    console.log('disconnected');
  });

  // Log it to the server output too
  //process.stdout.write(message)
}).listen(process.argv[2]);

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port \n", process.argv[2]);
