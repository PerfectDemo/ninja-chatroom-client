import React, { Component} from 'react';
import '../App.css';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {observer} from 'mobx-react';

const styles = {
    loginName: {
      'height:': '100em'
    }
}

export default observer(class CreatRoom extends Component {
    constructor(props) {
        super(props);   
        
        this.name = '';
    }   

    render () {
        const actions = [
            <FlatButton
              label="确定"
              primary={true}
              onClick={() => this.props.store.createRoom(this.name)}
            />,     
          ];

        return (           
            <div>
                <Dialog title="请输入房间名" open={this.props.store.open}
                    actions={actions}> 
                    <TextField fullWidth={true} inputStyle={styles.loginName} id="hello" onChange={(event, name)=> this.name = name}>                        
                    </TextField>
                </Dialog>
            </div>           
        )
    }
});


