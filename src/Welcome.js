import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';


class Welcome extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
}
}

export default Welcome;