import React, {Component} from 'react';
import fire from '../config/Firestore';
 import './Register.css';



class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      fireErrors: '',
      formTitle: 'SIGN IN TO YOUR ACCOUNT',
      loginBtn: true
    };

  }

  handleChange = e => { // updates what you click on like password or email
    this.setState({[e.target.name] : e.target.value}); //
  }

  login = e => {
    e.preventDefault();
    const userRef = fire.firestore().collection("users");
    console.log("pring something");
    let userExists = 0;
    console.log("name:", this.state.firstName);
    const query = userRef.where("firstName", "==", this.state.firstName);
      query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              console.log(doc.id, " => ", doc.data());
              console.log("other data: ", doc.data().firstName);
              userExists = 1;
          })

      })
      .catch(function(error) {
        console.log("Error getting documents:", error);
      });

        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          this.setState({fireErrors: error.message}) });



      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });

  }


  register = e => {
    e.preventDefault(); // when submit button clicked this will prevent it from page loading
    //
    const userRef = fire.firestore().collection('users').add({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    });
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
      this.setState({fireErrors: error.message})
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

  }

  getAction = action => {
    if(action === 'reg') {
      this.setState({formTitle: 'Register New User' , loginBtn: false, fireErrors: ''});
    }else {
      this.setState({formTitle: 'SIGN IN TO YOUR ACCOUNT' , loginBtn: true, fireErrors: ''});
    }
  }

  render(){

    let errorNotification = this.state.fireErrors ?
      (<div className = "Error"> {this.state.fireErrors} </div>) : null;

    let submitBtn = this.state.loginBtn ?
      (<input className = "loginBtn" type = "submit" onClick={this.login} value = "LOGIN" />) :
      (<input className = "loginBtn" type = "submit" onClick={this.register} value = "Register" />);
    let login_register = this.state.loginBtn ?
      (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>):
      (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>);

    return(

      <main style={{marginTop: '150px'}}>
        <div className = "form_block">
          <div id="title">{this.state.formTitle}</div>
          <div className = "body">
            {errorNotification}
            <form>
              <input type = "text"
              value={this.state.firstName}
              onChange={this.handleChange} // save the text that is inputted to this.state.email
              placeholder="First Name"
              name="firstName" />

              <input type = "text"
              value={this.state.lastName}
              onChange={this.handleChange} // save the text that is inputted to this.state.email
              placeholder="Last Name"
              name="lastName" />

              <input type = "text"
              value={this.state.email}
              onChange={this.handleChange} // save the text that is inputted to this.state.email
              placeholder="Email"
              name="email" />

              <input type = "password"
              value={this.state.password}
              onChange={this.handleChange} // save the text that is inputted to this.state.email
              placeholder="Password"
              name="password" />

              {submitBtn}
            </form>
              {login_register}
          </div>
        </div>
      </main>

    );
  }
}


export default Register;
