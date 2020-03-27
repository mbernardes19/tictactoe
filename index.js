const PORT = process.env.PORT || 3000;
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
let playerX;
let playerO;
let board = {
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    d5: '',
    d6: '',
    d7: '',
    d8: '',
    d9: ''
}

function hasWon(select) {
    const {d1, d2, d3, d4, d5, d6, d7, d8, d9} = board;
    const {elementId, type} = select;
    if (
        d1 === type && d2 === type && d3 === type ||
        d1 === type && d4 === type && d7 === type ||
        d1 === type && d5 === type && d9 === type ||
        d4 === type && d5 === type && d6 === type ||
        d7 === type && d8 === type && d9 === type ||
        d7 === type && d5 === type && d3 === type ||
        d2 === type && d5 === type && d8 === type ||
        d3 === type && d6 === type && d9 === type
    ) {
        return true
    } else {
        return false;
    }
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('X inserted', (selected) => {
        board[selected.elementId] = 'X';
        io.emit('X inserted', selected);
        if (hasWon(selected)) {
            io.emit('X has won');
            Object.entries(board).forEach(([key, value]) => {
                board[key] = '';
            });
        }
    });

    socket.on('O inserted', (selected) => {
        board[selected.elementId] = 'O';
        io.emit('O inserted', selected);
        if (hasWon(selected)) {
            io.emit('O has won');
            Object.entries(board).forEach(([key, value]) => {
                board[key] = '';
            });
        }
    });

    socket.on('X selected by player', (socketId) => {
        playerX = socketId;
    });

    socket.on('O selected by player', (socketId) => {
        playerO = socketId;
    });
});

http.listen(PORT, function(){
  console.log('listening on *:3000');
});