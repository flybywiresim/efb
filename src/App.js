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
                    <Route path="/Preparation">
                        <PreparationWidgets
                            departingAirport={this.state.departingAirport}
                            arrivingAirport={this.state.arrivingAirport}
                        />
                    </Route>
                    <Route path="/Flight & Navigation">
                        <div>
                        </div>
                    </Route>
                    <Route path="/Multiplayer">
                        <div>
                        </div>
                    </Route>
                    <Route path="/Settings">
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