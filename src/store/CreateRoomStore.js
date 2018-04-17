import {observable} from 'mobx';
import io from '../client/SocketClient';

var createRoomStore = observable({
    open: false,
    toggle: function() {
        console.log(this.open);
        this.open = !this.open;
    },

    createRoom: function(name) {
        var room = {name: name};
        io.createRoom(room);
        this.toggle();
    }
});

export default createRoomStore;