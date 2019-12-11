import React, {Component} from 'react';
import fire from '../config/Firestore';
import DisplayRestaurant from './DisplayRestaurant';
import SearchForm from './SearchForm';
import Toolbar from './toolbar/Toolbar';


class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    searchLocationQuery: null
  };
}
logout = () => {
    fire.auth().signOut();
  }

onFormSubmit = (searchLocationQuery) => {
  this.setState({
    searchLocationQuery: searchLocationQuery
  })

}

render() {
  return (
    <div className="App">
      <Toolbar />
     <SearchForm onFormSubmit = {this.onFormSubmit}/>
      <DisplayRestaurant
        searchLocationQuery = {this.state.searchLocationQuery}/>
        <button onClick={this.logout}>Logout</button>
    </div>
  );
}
}


export default Home;

// <div>
//   <h1>Home Page!</h1>
//
//   <DisplayRestaurant />
//   <button onClick={this.logout}>Logout</button>
// </div>
