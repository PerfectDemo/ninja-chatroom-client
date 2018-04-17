import {observable} from 'mobx';
import io from '../client/SocketClient';

var currentRoomStore = observable({
    open: false,
    room: null,
    joinRoom: function(id) {
        io.joinRoom(id);
        this.open = true;
    },

    leaveRoom: function() {
        this.room = null;
        this.open = false;
    }
});

export default currentRoomStore;