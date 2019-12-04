// import logo from './logo.svg';
import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from './config/Fire';
import Toolbar from './components/toolbar/Toolbar';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import About from './components/About';


class App extends Component {
  constructor (){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }
//29:47
  render(){
    return(
      <div className = "App">
        <Toolbar />

        <main style={{marginTop: '90px'}}>
          {this.state.user ? (<Home />) : (<LoginRegister />)}
        </main>

      </div>
    );
  }
}




export default App;
