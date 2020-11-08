import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Toolbar from "./Toolbar.js";
import PreparationWidgets from "./PreparationWidget.js";
import Settings from "./Settings.js";
import './App.scss';
import metarParse from "aewx-metar-parser";

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
            <Router>
                <div className="App">
                    <Toolbar />
                </div>
                <Switch>
                    <Route path="/preparation">
                        <PreparationWidgets
                            departingAirport={this.state.departingAirport}
                            arrivingAirport={this.state.arrivingAirport}
                        />
                    </Route>
                    <Route path="/flight-navigation">
                        <div>
                        </div>
                    </Route>
                    <Route path="/multiplayer">
                        <div>
                        </div>
                    </Route>
                    <Route path="/settings">
                        <div>
                            <Settings />
                        </div>
                    </Route>
                    <Route path="/">
                        <PreparationWidgets
                            departingAirport={this.state.departingAirport}
                            arrivingAirport={this.state.arrivingAirport}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;