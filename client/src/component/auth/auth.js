import React, { Component } from 'react';
import Axios from 'axios';

class Auth extends Component {
    state = {
        response : ''
    }
    google = () => {
        Axios.get('http://10.12.100.184:3001/users/auth/google').then((res) => {
            console.log(res);
            this.setState({response : res.data})
        })
    }
    // const ll = 
    render(){
        return(
            <React.Fragment>
                {this.state.response}
                 <br />
                 <a href="/users/auth/google" className="waves-effect waves-light btn deep-purple darken-2">signup with google</a> 
            </React.Fragment>
        );
    }
}

export default Auth;