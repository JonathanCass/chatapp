const initialState = {
    messages: [],
    username: ''
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            console.log("Api Reducer Switch Case ADD_MESSAGE running")
            return {...state, messages: [...state.messages, action.message]}
        case 'LOGIN':
            return {...state, username: action.username}
        default:
            return state
    }
}