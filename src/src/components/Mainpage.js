import React, {Component} from 'react';
import DisplayRestaurant from './DisplayRestaurant';



class Mainpage extends Component{
  constructor(props) {
  super(props);
  this.state = {
    searchLocationQuery: null
  };
}
//
// onFormSubmit = (searchLocationQuery) => {
//   this.setState({
//     searchLocationQuery: searchLocationQuery
//   })
//
// }

render() {
  return (
    <div className="App">
    <main style={{marginTop: '120px'}}>
      <DisplayRestaurant
        searchLocationQuery = {this.state.searchLocationQuery}/>
    </main>
    </div>
  );
}
}





export default Mainpage;
