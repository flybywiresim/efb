import React from "react";
import Toolbar from "./Toolbar.js";
import PreparationWidgets from "./PreparationWidget.js";
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departingAirport: "LFPG",
            arrivingAirport: "EHAM",
        };
    }

    render() {
        return (
            <div className="App">
                <Toolbar />
                <PreparationWidgets
                    departingAirport={this.state.departingAirport}
                    arrivingAirport={this.state.arrivingAirport}
                />
            </div>
        );
    }
}

export default App;