import React, {Component} from 'react';
import '../App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {observer} from 'mobx-react';

const messList = [
    {
    name: 'hello1',
    content: 'yes!  hello',
    },
    {
        name: 'hello2',
        content: 'yes!  herwllo',
        self: false,
    },
    {
        name: 'hello3',
        content: 'yes!  helffeflo',
        self: false,
    },
    {
        name: 'hello2',
        content: 'yes!  helffeflo',
        self: true,

    },
    {
        name: 'hello3',
        content: 'yes!  helfsfffeflo',
        self: true,
    },
    {
        name: 'hello5',
        content: 'yes!  helffeflo',
        self: true,
    },
    {
        name: 'hello1',
        content: 'yes!  helddffeflo',
        self: false,
    },
    {
        name: 'hello3',
        content: 'yes!  helffewreflo',
        self: false,
    },
    {
        name: 'hello3',
        content: 'yes!  helff424eflo',
        self: false,
    },
    {
        name: 'hello1',
        content: 'yes!  helddffeflo',
        self: false,
    },
    {
        name: 'hello3',
        content: 'yes!  helffewreflo',
        self: false,
    },
    {
        name: 'hello3',
        content: 'yes!  helff424eflo',
        self: false,
    },
]

export default observer(class Chatroom extends Component {
    constructor(props) {
        super(props);       
        this.content = '';
        this.state = {
            content: '',
        }
    } 

    handleChange(content) {        
        this.setState({content: content});          
    }

    sendContent() {
        var _messageList = this.refs.messageList;
        this.props.messageStore.sendMessage(this.state.content);
        this.setState({content: ''});      
        setTimeout(() =>_messageList.scrollTop = _messageList.scrollHeight , 500);

    }

    render() {        
        let messageList = this.props.messageStore.getMessageList;
        let sendMessage = this.props.messageStore.sendMessage;
        let open = this.props.currentRoomStore.open;
        return (
            open ? 
            <div className="chatroom">
                <div className="message-list" ref="messageList">
                    { messageList.map((obj) => <Message message={obj}/> )}
                </div>
                <div className="input">
                    <TextField fullWidth={true} value={this.state.content} onChange={(event, content)=> this.handleChange(content)} style={{width: '85%', marginRight : '2em'}}/>
                    <RaisedButton primary={true} label="发送" onClick={() =>this.sendContent() }/>
                </div>
            </div> :''
        )
    }
});

var Message = observer(class MessageOb extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        let {self, user, content} = this.props.message;
        
        
        return (
           !self ?
            <div class="message message-left">
                <div><p>{user.name}</p></div>
                <Paper style={styles.paper}>{content}</Paper>
           </div> : 
            <div class="message message-right">                
                <Paper  style={styles.paper}>{content}</Paper> 
                <div><p>{user.name}</p></div>
            </div>
        );
    }
});

const styles = {
    paper: {       
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        padding: '1em 1em 1em 1em'
    }
}