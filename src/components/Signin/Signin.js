import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            logInEmail: '',
            logInPassword: ''
        }
    }

    onEmailChange = evt => {
        this.setState({ logInEmail: evt.target.value })
    }

    onPasswordChange = evt => {
        this.setState({ logInPassword: evt.target.value })
    }

    onSumbitLogIn = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.logInEmail,
                password: this.state.logInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props
        return (
            <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
                <main className='pa4 black-80'>
                    <div className='measure'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                            <legend className='f1 fw6 ph0 mh0'>Log in</legend>
                            <div className='mt3'>
                                <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                                <input
                                    className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                                    type='email'
                                    name='email-address'
                                    id='email-address'
                                    onChange={this.onEmailChange} />
                            </div>
                            <div className='mv3'>
                                <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                                <input
                                    className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password'
                                    name='password'
                                    id='password'
                                    onChange={this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className=''>
                            <input
                                onClick={this.onSumbitLogIn}
                                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                                type='submit'
                                value='Login' />
                        </div>
                        <div className='lh-copy mt3'>
                            <p onClick={() => onRouteChange('register')} className='f6 link dim black db pointer'>Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Login;