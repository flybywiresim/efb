import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import metarParse from "aewx-metar-parser";

import Toolbar from "./Toolbar.js";
import PreparationWidgets from "./preparationWidget/PreparationWidget.js";
import Settings from "./settings/Settings.js";
import Profile from "./profile/Profile.js";

import './App.scss';
import './settings/Settings.scss';
import './profile/Profile.scss';
import './preparationWidget/PreparationWidget.scss';

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
                    <Route path="/profile">
                        <Profile nickname="AtomicLiquid" username="atomic" />
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