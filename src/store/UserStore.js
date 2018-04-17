import {observable} from 'mobx';
import io from '../client/SocketClient';

var UserStore = observable({
   name:'',
   id: '',
   currentRoomId: null,
   setUser: function(user) {
        this.name = user.name;
        this.id = user.id;        
   },   

   getUserId: function() {
       return this.id;
   },
   
});

export default UserStore;