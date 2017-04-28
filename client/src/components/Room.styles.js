
const styles = {
    avatar:{
        borderRadius: 10,
        width: 20,
        height: 20,
        textAlign: 'center',
        lineHeight: '22px',
        marginRight: 10
    },
    entry: {
        display:'flex',
        border: '1px solid grey',
        borderWidth: '0 0 1px 0'
    },
    room: {
        position:'relative',
        height:'100%'
    },
    messagesContainer: {
        position:'absolute',
        top:0,
        bottom:100,
        overflow:'auto',
        width:'95%',
    },
    inputContainer: {
        position:'absolute',
        textAlign:'center',
        bottom:0,
        height:60,
        width:'100%',
        border: '2px solid red',
        borderRadius: 5,
        background: 'black',
        padding: 10
    },
    textEntry: {
        width:'85%',
        height:30,
        lineHeight:'30px',
        fontSize:16,
        outline:0,
        border: '2px solid #777',
    },
    timeName:{
        display: 'inline-block'
    },
    name:{
        marginRight: 10
    },
    time:{
       position: 'absolute',
       right: 0,
       display: 'inline-block',
       lineHeight: '26px',
    },
    sizeEntry:{
        height:30,
    },
    fontEntry:{
        height:30,
    },
    colorEntry:{
        height:30,
    }
}

export default styles