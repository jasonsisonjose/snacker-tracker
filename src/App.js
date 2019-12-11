// import React, {Component} from 'react';
// import Register from './components/Register';
// // import Login from './components/Login';
// import fire from './config/Firestore';
// import Home from './components/Home';
// import firebase from 'firebase';
// require('firebase/auth');
// // import About from './components/About';

// import logo from './logo.svg';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from './config/Firestore';
import Toolbar from './components/toolbar/Toolbar';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
// import PostsList from './posts/PostsList';
import DisplayRestaurant from './components/DisplayRestaurant';
import './App.css';
// import About from './components/About';

import Mainpage from './components/Mainpage';

class App extends Component {
  constructor (){
    super();
    this.state = {
      user: null
    }
  }

  // callBack = (childData) => {
  //   this.setState({
  //     user:childDate
  //   }, () => {console.log("Set State: ", this.state)})
  // }
  componentDidMount() {
    this.authListener();
  }
  //
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
  render() {
    // const { showSearch } = this.props.route;
    return(
      <div className = "App">
        <Toolbar />

        <main style={{marginTop: '90px'}}>
          {this.state.user ? (<Home />) : (<Register />)}
        </main>

      </div>
    );
  }
}


export default App;
