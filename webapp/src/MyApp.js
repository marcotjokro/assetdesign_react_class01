import React, { Component } from 'react';
var QRCode = require('qrcode.react');

class MyApp extends Component {
	
	state={
		status:"Status"
	}
	
	handleButt=()=>{
		this.setState({
			status:"You clicked a button!"
		})
	}
	
	handleInp=()=>{
		this.setState({
			status:"You typed "+this.refs.myInp.value+"!"
		})
	}
	
  render() {
    return (
      <div className="app">
				<button onClick={this.handleButt}>Click Me!</button>
				<input ref="myInp" type="text" placeholder="Type something in here" onKeyUp={this.handleInp}></input>
				<div>{this.state.status}</div>
				<QRCode value={this.state.status}/>
      </div>
    );
  }
}

export default MyApp;
