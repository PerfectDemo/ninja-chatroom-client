import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Login from './component/Login'
import AppBar from 'material-ui/AppBar'
import Hallroom from './component/Hallroom'
import Chatroom from './component/Chatroom'
import CreateRoom from './component/CreatRoom'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {grey400} from 'material-ui/styles/colors'
import roomStore from './store/RoomListStore';
import createRoomStore from './store/CreateRoomStore';
import currentRoomStore from './store/CurrentRoomStore';
import messageStore from './store/MessageStore';


class App extends Component {
  state = {
    open: false
  }

  openDialog () {
    this.setState({
      open: true
    })
  }

  handleClose() {
    console.log('hello');
    this.setState({
      open: false
    })
  }


  render() {  

    return (     
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="PerfectDemo chatroom"
            iconElementRight={<FloatingActionButton mini={true} backgroundColor={grey400} onClick={() => createRoomStore.toggle()}>
                                <ContentAdd />
                             </FloatingActionButton>}
          />
          <Login />
          <CreateRoom store={createRoomStore} />
          <Hallroom store={roomStore} currentRoomStore={currentRoomStore} />
          <Chatroom currentRoomStore={currentRoomStore} messageStore={messageStore}/>
        </div>           
      </MuiThemeProvider> 
    );
  }
}

export default App;
