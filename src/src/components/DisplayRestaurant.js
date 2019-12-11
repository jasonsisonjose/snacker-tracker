/* jshint esversion: 6 */
import React, { Component } from "react";
import yelp from 'yelp-fusion';
import axios from 'axios';
import './DisplayRestaurant.css'
// import Dropdown from '../dropdownmenu/Dropdown';


class DisplayRestaurant extends Component {

      constructor(props) {
          super(props);
          //props.state is linked with the result sending back from its child a.k.a the result we returned in SearchForm element
          this.state = {
          //leverage the state to store the information return from API to make loading faster
          results: [],
          errorState: null,
          loading: false,
          index: 0,
          };
      }


      componentDidMount () {
          this.getRestaurantsFromApi('Fullerton');
      }

      componentDidUpdate (prevProps, prevState) {
          if(this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
              this.setState({
                  results: [],
              }, () => this.getRestaurantsFromApi(this.props.searchLocationQuery))
          }
      }
      //function to get information from API
      getRestaurantsFromApi = (locationSearched) => {
          //UI feedback to tell the user when we are retrieving infromation from the API
          this.setState({ loading: true })

          //using a proxy server cors-anywhere to get rid of the CROS probblem
          //SUPER HOT TIP: passing the location variable, which equals to the user's input (see below). Instead of grabbbing the entire API, it will only retrieve the restaurants that are closed to the lcoation information we entered. This makes the lodading wayyyyyyy faster.
          axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
          //required authorization format from API
          headers: {
              //to get the API from the .env file use process.env.{variable name}
              Authorization: 'Bearer 0CXTw0A9ICuRceSreQ0EKan6-sqY9fUcyyQU7_S5BPdEWPVOObcEeia5boBWT_3c3TVVRxbfScCTBxeXHnJiIA-Dn2BAu6pYrWsWiLQ_IEyYM2C95eAkeC8e7CfnXXYx'
          },
          //option params passed to API call to retrieve only breakfast and lunch spots
          params: {
              categories: 'breakfast_brunch',
              limit: '3'

          }
          })
          .then((res) => {
              console.log(res.data.businesses)
              //change the state of App to reflect on the result we are given from the API
              //at the same time, setting the loading state to false
              this.setState({ results: res.data.businesses, loading: false })
          })
          .catch((err) => {
              //fire the errorState message if there is no information return from the API
              this.setState({ errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`, loading: false })
          })
      }

      renderEmptyState () {
          return (
              <h2 className = "heading-tertiary">`Hang tight! We are working on getting you the list of best brunch spots in your neighbourhood! `</h2>
          )
      }

      handleClickNext = () => {
          let newIndex = this.state.index < this.state.results.length - 1 ? this.state.index += 1 : 0;
          console.log(newIndex);
          this.setState({index:newIndex});
        }


      render() {
            const Restaurants = this.state.results.map((result) => {

                return (
                  <div key={result.id} className="restaurant-card">

              <img src={result.image_url} className="restaurant-card-pic"/>

            <div className="restaurant-card-information">
              <h2> {result.name} </h2>
              <p>Genre: {result.categories[0].title} </p>
              <p> Address: {result.location.display_address[0]}, {result.location.display_address[1]}  </p>
              <p> Phone: {result.phone} </p>
              <p> Rating: {result.rating} </p>
              <p> Price: {result.price}</p>
              <div className="restaurant-card-buttons">
                <div className="restaurant-card-dislikebutton">
                  <button onClick = {this.handleClickNext} className="restaurant-dislike-button"> Dislike </button>
                </div>
                <div className="restaurant-card-likebutton">
                  <button id={result.id} onClick = {this.handleClickNext} className="restaurant-like-button"> Like </button>
                </div>
              </div>
            </div>

          </div>
                );
            });

            return (
              <div>
              {Restaurants[this.state.index]}
                </div>

          )}

  }
export default DisplayRestaurant;
