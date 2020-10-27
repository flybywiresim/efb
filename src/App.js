import React from "react";
import Toolbar from "./Toolbar.js";
import './App.scss';
import './Widget.js';
import Widgets from "./Widget";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departingAirport: "KLAX",
            arrivingAirport: "KSFO",
        };
    }

    render() {
        return (
            <div className="App">
                <Toolbar />
                <Widgets
                    departingAirport={this.state.departingAirport}
                    arrivingAirport={this.state.arrivingAirport}
                />
            </div>
        );
    }
}

export default App;