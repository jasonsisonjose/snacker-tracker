import React from 'react';
import './toolbar.css';
import About from '../About';
// import { withRouter, Link } from 'react-router-dom';

const Toolbar = props => {


  return (
    <header className="toolbar">
      <nav className="toolbar_nav">

        <div className="toolbar_logo"><a href="/">SNACKER TRACKER
          <div className="toolbar_logo_text">GET YOUR SNACK ON.</div></a></div>
        <div className="logo_spacer" />
        <div className="toolbar_nav_items">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href= "/">LOGIN</a></li>
            <li><a href= "src/components/About.js/">ABOUT</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
// line 33 to add picture bac
export default Toolbar;
