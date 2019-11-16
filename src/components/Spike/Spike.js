import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';


class Spike extends Component {
  render() {
    return (
     <div></div>
  )}
}

export default connect()(Spike);
