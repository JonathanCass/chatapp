const initialState = {
    messages: [],
    user : {
        name: '',
        icon: '',
        color:'',
    }
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.message]}
        case 'LOGIN':
            return {...state, user: {name:action.name, icon:action.icon, color:action.color}}
        default:
            return state
    }
}