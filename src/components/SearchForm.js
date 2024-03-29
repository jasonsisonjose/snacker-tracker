import React, {Component} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchForm extends Component {
  constructor() {
      super();
      this.state = {
          searchLocationQuery: ""
      }
  }

  handleSearchChange = (e) => {
      this.setState({
          searchLocationQuery: e.target.value
      })
  }


  handleFormSubmit = (e) => {
      e.preventDefault();

      this.props.onFormSubmit(this.state.searchLocationQuery)
  }

  render(){
      return (
          <div className = "searchForm">
              {/*add an event listener of form submit so the state only get set when the form is submitted*/}
              <form onSubmit={(e) => this.handleFormSubmit(e)}>
              <main style={{marginTop: '150px'}}>
                  <label
                  htmlFor = 'location'
                  arialabel = 'enter address, neighbourhood, city, province or postal code'
                  className = 'searchForm__label'
                  >I am looking for brunch spots near :       </label>
                  <input
                  type = 'text'
                  id = 'location'
                  placeholder = 'address, neighbourhood, city, province or postal code'
                  value = {this.state.searchLocationQuery}
                  onChange = {this.handleSearchChange}
                  className = 'searchForm__input'
                  />
                  <button
                  type = 'submit'
                  className = 'searchForm__button'
                  >Search

                  </button>
              </main>
              </form>
          </div>
      );
  }
}

export default SearchForm
