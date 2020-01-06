import React from "react";
import axios from 'axios';
class Login extends React.Component {
    state = {
        cred: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        console.log("hello")
        this.setState({
            cred: {
                ...this.state.cred,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        console.log(this.state.cred);
        axios
            .post('api-login-goes-here', this.state.cred)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err => console.log(err.response));
    };

    render() {

        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.cred.username}
                        onChange={this.handleChange}

                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.cred.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }

}
export default Login;