import io from 'socket.io-client';
import roomStore from '../store/RoomListStore';
import userStore from '../store/UserStore';
import messageStore from '../store/MessageStore';

var socket = io();

socket.on('connection', () => {
    console.log('已连接！');   
});

socket.on('roomList', (roomList) => {
    console.log(roomList);
    roomStore.setRoom(roomList);
});

socket.on('enterName', (user) => {
    console.log('enterName:');
    console.log(user);
    userStore.setUser(user);
});

socket.on('sendMessage', (message) => {
    console.log('recive message:', message);
    messageStore.addMessage(message);
});

function joinRoom(id) {
    socket.emit('joinRoom', id);
}

function enterName(name) {
    socket.emit('enterName', name);
}

function createRoom(room) {
    socket.emit('createRoom', room);
}

function sendMessage(content) {
    socket.emit('sendMessage', content);
}

export default {
    enterName: enterName,
    createRoom: createRoom,
    joinRoom: joinRoom,
    sendMessage: sendMessage,
}
