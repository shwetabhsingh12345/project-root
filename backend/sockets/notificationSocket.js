const socketIo = require('socket.io');

const setupWebSocket = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('newMessage', (message) => {
      io.emit('messageNotification', { message });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};

module.exports = setupWebSocket;
