import React, {Component } from 'react';
import PostData from '../data/restaurant.json';
class PostsList extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount(){
    let url = "./restaurant.json";
    var jsonParse = JSON.stringify(this.state.data);
    console.log(jsonParse);

    Request.get(url)
      .then((res) => {
        this.setState(
          {
            data: res.body.data
          }
        );

        console.log('url -' + url);
        console.log('res -' + res.body.data);
      })
      .catch(function(err) {
        alert(err);
      });
  }





  render() {
    return(
      <div>
        <h1> Hello There </h1>
        {PostData.map((postDetail, index)=>{
          return <h1>{postDetail.name}</h1>
        })}

      </div>
    )
  }
}

export default PostsList;
