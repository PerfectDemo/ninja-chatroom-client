import React, { Component} from 'react';
import '../App.css';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import socket from '../client/SocketClient';

const styles = {
    loginName: {
      'height:': '100em'
    }
}

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            name: '',
        }

        this.name = '';
    }

    handleClose() {     
        socket.enterName(this.name);
        this.setState({
            open: false
          })
    }

    _onChange(name) {
        this.name = name;
    }

    render () {
        const actions = [
            <FlatButton
              label="确定"
              primary={true}
              onClick={() => this.handleClose()}
            />,     
          ];

        return (
            <div>
                <Dialog title="请输入用户名" open={this.state.open}
                    actions={actions}> 
                    <TextField fullWidth={true} inputStyle={styles.loginName} id="hello" onChange={(event, name) => this._onChange(name)}>                        
                    </TextField>
                </Dialog>

            </div>
        )
    }
}


