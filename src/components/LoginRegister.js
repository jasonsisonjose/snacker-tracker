import React, {Component} from 'react';
import fire from '../config/Fire';
import './LoginRegister.css';


class LoginRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      fireErrors: '', // error will be said through here
      formTitle: 'Login',
      loginBtn: true // to check if it clicked on the register button or not
    };

  }

  handleChange = e => { // updates what you click on like password or email
    this.setState({[e.target.name] : e.target.value}); //
  }

  login = e => {
    e.preventDefault(); // when submit button clicked this will prevent it from page loading
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
      this.setState({fireErrors: error.message})
    });
  }

  register = e => {
    e.preventDefault(); // when submit button clicked this will prevent it from page loading
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
      this.setState({fireErrors: error.message})
    });

  }

  getAction = action => {
    if(action === 'reg') {
      this.setState({formTitle: 'Register New User' , loginBtn: false, fireErrors: ''});
    }else {
      this.setState({formTitle: 'Login' , loginBtn: true, fireErrors: ''});
    }
  }



  render(){

    let errorNotification = this.state.fireErrors ?
      (<div className = "Error"> {this.state.fireErrors} </div>) : null;

    let submitBtn = this.state.loginBtn ?
      (<input className = "loginBtn" type = "submit" onClick={this.login} value = "Enter" />) :
      (<input className = "loginBtn" type = "submit" onClick={this.register} value = "Register" />);
    let login_register = this.state.loginBtn ?
      (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>):
      (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>);
      // onClick={() => this.getAction('reg')}

    return(
      <div className = "form_block">
        <div id="title">{this.state.formTitle}</div>
        <div className = "body">
          {errorNotification}

          <form>
            email:
            <input type = "text"
            value={this.state.email}
            onChange={this.handleChange} // save the text that is inputted to this.state.email
            name="email" />

            password:

            <input type = "password"
            value={this.state.password}
            onChange={this.handleChange} // save the text that is inputted to this.state.email
            name="password" />

            {submitBtn}
          </form>
            {login_register}
        </div>

      </div>
    );
  }
}


export default LoginRegister;
