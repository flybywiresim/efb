import logo from './fbw.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  render() {
      return (
          <div className="App">
              <Toolbar/>
          </div>
      );
  }
}

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { itemList: ["Testing1", "Testing2"], activeIndex: 0 }
    }

    render() {
        return (
            <div className="Toolbar">
                <div className="Toolbar-div">
                    <img src={logo} className="FBW-Logo" alt="logo" />
                    <ToolbarItem content="Testing1" />
                </div>
            </div>
        );
    }
}

class ToolbarItem extends React.Component {
    render() {
        return (
            <div id="ToolbarItem">
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default App;
