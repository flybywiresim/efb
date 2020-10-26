import React from "react";
import Toolbar from "./Toolbar.js";
import './App.css';
import './Widget.js';
import Widgets from "./Widget";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Toolbar />
                <Widgets />
            </div>
        );
    }
}

export default App;