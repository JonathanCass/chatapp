import React, {Component} from 'react'
import {login} from '../api/messaging'
import styles from './Login.styles.js'
import 'font-awesome/css/font-awesome.css'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            icon: 'user',
            iconColor: '#18FFFF'
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.username, this.state.icon, this.state.iconColor )
        this.props.history.push('/room')
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input style={styles.name} placeholder='Enter Username' name='username' onChange={this.handleChange} />
                    <input style={styles.icon} placeholder='Enter Name of Font Awesome Icon' name='icon' onChange={this.handleChange} />
                    <div style={styles.link}><a style={styles.anchor} href="http://fontawesome.io/icons/"> Icon List </a></div>
                    <div style={styles.avatarBox}>Current Avatar<i style={{color:this.state.iconColor,lineHeight: '50px',marginRight: 20,fontSize: 32,WebkitTextStroke:'1px black'}} className={'fa fa-'+this.state.icon} aria-hidden="true"></i></div>
                    <div style={styles.colorBox}> Choose Color for Icon</div>
                    <div style={styles.circle}><input style={styles.iconColor} onChange={this.handleChange} name='iconColor' type='color' value={this.state.iconColor} /></div>
                    <button style={styles.submitUser}>Submit User</button>
                </form>
            </div>
        )
    }
}

export default Login