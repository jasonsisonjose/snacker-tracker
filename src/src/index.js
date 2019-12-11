import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import Mainpage from './components/Mainpage';
import Toolbar from './components/toolbar/Toolbar';
import About from './components/About';
import Register from './components/Register';
// import Register from './components/Register';
// import Login from './components/Login';
// import Edit from './components/Edit';
const routing =(
  <Router>
    <div>
      <Toolbar />
      <hr />
      <switch>
      <Route exact path="/mainpage" component={Mainpage} />
      <Route exact path="/home" component={Mainpage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={About} />
      <Route exact path="/login" render={props =>
        (<Register {...props} pieceOfState={this.state.pieceOfState}/>)
      }/>
    </switch>
  </div>

</Router>
);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
