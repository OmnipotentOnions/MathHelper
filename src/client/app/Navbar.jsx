import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

var Navbar = () => (
  <div className="col-sm-3 col-md-2 sidebar">
    <ul className="nav nav-sidebar">
      <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
      <li><Link to='/Arena'>Arena</Link></li>
      <li><Link to='/Chart'>Chart</Link></li>
    </ul>
  </div>
);

export {Navbar};