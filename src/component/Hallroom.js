import React, { Component} from 'react';
import '../App.css';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import imgSrc from '../image/chatroom.png';
import {observer} from "mobx-react";

const roomList = [
    {
        name: 'hello1',
        count: 1,
    }, 
    {
        name: 'hello53451',
        count: 11,
    },
    {
        name: 'hell333o1',
        count: 13,
    },
    {
        name: 'hello1',
        count: 16,
    },
    {
        name: 'hel53535lo1',
        count: 14,
    }, 
    {
        name: 'hel53535lo1',
        count: 14,
    }, 
    {
        name: 'hel53535lo1',
        count: 14,
    }, 
    {
        name: 'hel53535lo1',
        count: 14,
    },     
]

const styles = {
    container: {
        width: '29%',
        display: 'flex',   
        padding: '1.2em',
        height: '350px'         
    }
}

export default observer(class Hallroom extends Component {    
    constructor(props) {
        super(props);
    }
    
    joinRoom(id) {
        console.log('join room:', id);
        this.props.currentRoomStore.joinRoom(id);
    }
   
    render () {  
       let {open, joinRoom} = this.props.currentRoomStore;     
       
        return (   
            !open ?        
            <div className="hall">
              {
                this.props.store.roomList.map((obj) => 
                    <div style={styles.container}>
                        <Card>                        
                            <CardTitle title={`房间名:${obj.name}`} subtitle={`人数:${obj.users.length}`} />
                            <img src={imgSrc} width={'90%'} />  
                            <CardActions>
                                <RaisedButton label="进入" onClick={() => this.joinRoom(obj.id)}/>                            
                            </CardActions>               
                        </Card>       
                    </div>           
                )
              }
            </div> : ''
        )
    }
});