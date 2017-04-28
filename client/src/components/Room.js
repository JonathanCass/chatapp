import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import moment from 'moment'
import {addMessage} from '../api/messaging'
import styles from './Room.styles'

class Room extends Component {
    constructor() {
        super()
        this.state={
            message:'',
            color:'#000000',
            font:'Serif',
            size: 18
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            username: this.props.username,
            time: moment().format('LTS'),
            message: this.state.message,
            color: this.state.color,
            font: this.state.font,
            size: Number(this.state.size)  
        })
        this.setState({     //Clears message after entering
            message: ''
        })
    }
    componentWillMount() {  //If username is not set redirects to login page
        if (!this.props.username) {
            this.props.history.push('/')
        }
    }
    componentWillUpdate() {
        var node = this.refs.messages
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
    }
    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            var node = this.refs.messages
            node.scrollTop = node.scrollHeight
        }
    }
    render(){
        return(
            <div style={styles.roomContainer}>
                
                <div style={styles.inputContainer}>
                    <form onSubmit={this.handleSubmit}>
                        <input style={styles.textEntry} onChange={this.handleChange} name='message' type='text' placeholder='Input Message' value={this.state.message} /> 
                        <input style={styles.colorEntry} onChange={this.handleChange} name='color' type='color' value={this.state.color} />
                        <select style={styles.fontEntry} onChange={this.handleChange} name='font'>
                            <option value="Comfortaa">Comfortaa</option>
                            <option value="Share">Share</option>
                            <option value="Chonburi">Chonburi</option>
                            <option value="Press Start 2P">Press Start 2P</option>
                            <option value="Orbitron">Orbitron</option>
                        </select>
                        <select style={styles.sizeEntry} onChange={this.handleChange} name='size'>
                            <option value={14}>14</option>
                            <option value={16}>16</option>
                            <option value={18}>18</option>
                            <option value={20}>20</option>
                        </select>
                    </form>
                </div>
                
                <div style={styles.messagesContainer} ref='messages'>
                    <ul style={styles.messages}>
                        {this.props.messages.map((entry)=>(
                            <li style={styles.entry} key={Math.random()}>
                                <div style={styles.avatar}>A</div>
                                <div style={styles.messageContainer}>
                                    <div style={styles.timeName}>
                                        <span style={styles.name}>{entry.username + ":" }</span>
                                        <span style={{color: entry.color, fontFamily: entry.font, fontSize: entry.size }}>
                                            {entry.message}
                                        </span>
                                        <div style={styles.time}>{entry.time}</div> 
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>    
                </div>

            </div>
        )
    }
}
function mapStateToProps(appState) {
    return {
        messages: appState.messages, username: appState.username
    }
}

export default connect(mapStateToProps)(Room)