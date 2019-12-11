import React, {Component} from 'react';
import fire from './config/Firestore';
import Toolbar from './components/toolbar/Toolbar';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';


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

  render() {
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
