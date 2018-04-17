import {observable, action, computed, decorate} from 'mobx';

class RoomListStore {
    roomList = []

    get getRoom() {
        return this.roomList;
    }

    setRoom(roomList) {
        this.roomList = roomList;
    }

    addRoom(room) {
        this.roomList.push(room);
    }
}

decorate(RoomListStore, {
    roomList: observable,
    getRoom: computed,
    addRoom: action,
    setRoom: action
});

export default new RoomListStore();