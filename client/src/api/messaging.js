import io from 'socket.io-client'
import store from '../store'
// const socket = io.connect('http://localhost:3001')
const socket = io.connect('http://10.68.0.105:3001')

export function addMessage(message) {
    socket.emit('new message', message)
}

export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})