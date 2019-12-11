// import React, {Component} from 'react';
// import db from '../config/Firestore';
//
//
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {},
//       key: ""
//     };
//   }
//
//   //   updateInput = e => {
//   //   this.setState({
//   //     [e.target.name]: e.target.value
//   //   });
//   // }
//
//   componentDidMount() {
//   // e.preventDefault();
//   // db.settings({
//   //   timestampsInSnapshots: true
//   // });
//   // creates reference to first name
//   const userRef = db.collection('users').doc(this.props.match.params.id);
//   // console.log("this is name: ", this.state.firstName);
//
//   userRef.get().then(doc => {
//     // let user = doc.data();
//     //
//     // user = JSON.stringify(user);
//     if(doc.exists) {
//       this.setState({
//         user: doc.data(),
//         key: doc.id
//       });
//       console.log("Document data:", doc.data());
//     }else {
//       console.log("Nos such document!");
//     }
//   }).catch(function(error){
//     console.log("Error getting document:", error);
//   });
//
//   this.setState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   });
// };
//   render() {
//   return (
//       <form onSubmit={this.verifyUser}>
//
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           onChange={this.updateInput}
//           value={this.state.firstName}
//         />
//
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           onChange={this.updateInput}
//           value={this.state.lastName}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="email"
//           onChange={this.updateInput}
//           value={this.state.email}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="password"
//           onChange={this.updateInput}
//           value={this.state.password}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       );
//     }
//  }
//
// export default Login;
