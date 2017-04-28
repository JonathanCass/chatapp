import React, {Component} from 'react'
import {login} from '../api/messaging'
import 'font-awesome/css/font-awesome.css'

const styles = {
    avatarBox:{
        fontSize: 22,
        height: 50,
        width: 300,
        border: '1px solid grey',
        borderRadius: 10,
        display: 'inline-block',
        marginLeft: 20,
        lineHeight: '50px',
        textIndent: 20,
    },
    name:{
        width: 200,
        height: 50,
        fontSize: 18,
        textIndent: 10,
        margin: 20
    },
    icon:{
        width: 320,
        height: 50,
        fontSize: 18,
        textIndent: 10
    },
    color:{
        height: 50,
        border: 0
    },
    link:{
        textDecoration: 'none',
        color: 'black',
        fontSize: 18,
        width: 100,
        height: 50,
        display: 'inline-block',
        border: '2px solid black',
        marginLeft: 20
    }
}

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            icon: 'user',
            iconColor: 'black'
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.username)
        this.props.history.push('/room')
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input style={styles.name} placeholder='Enter Username' name='username' onChange={this.handleChange} />
                    <input style={styles.icon} placeholder='Enter Name of Font Awesome Icon' name='icon' onChange={this.handleChange} />
                    <div style={styles.link}><a  href="http://fontawesome.io/icons/"> Icon List </a></div>
                    <input style={styles.color} onChange={this.handleChange} name='iconColor' type='color' value={this.state.iconColor} />
                    <div style={styles.avatarBox}>Current Avatar<i style={{color:this.state.iconColor}} className={'fa fa-'+this.state.icon} aria-hidden="true"></i></div>
                </form>
            </div>
        )
    }
}

export default Login