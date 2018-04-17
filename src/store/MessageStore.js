import {observable, action, computed, decorate} from 'mobx';
import userStore from './UserStore';
import io from '../client/SocketClient';

class MessageStore {
    messageList = [];

    get getMessageList() {
        return this.messageList;
    }   

    addMessage(message) {
       var isSelf = message.user.id == userStore.getUserId();
       message.self = isSelf;
       this.messageList.push(message);
       console.log(this.messageList);
    }

    sendMessage(message) {
        console.log('message:', message);
        io.sendMessage(message);
    }
}

decorate(MessageStore, {
    messageList: observable,
    getMessageList: computed,
    addMessage: action,
    sendMessage: action
});

class Message {
    constructor(content, user) {
        this.content = content;
        this.user = user;     
        this.self = false;   
    }  

    set content(content) {
        this.content = content;
    } 

    set user(user) {
        this.user = user;
    }
    
    get content() {
        return this.content;
    }

    get user() {
        return this.user;
    }

    get self() {
        return this.self;
    }

    set self(s) {
        this.self = s;
    }

    getContent() {
        return this.content;
    }

    getUser() {
        return this.user;
    }
}

export default new MessageStore();