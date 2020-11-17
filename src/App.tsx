import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Toolbar from "./toolbar/Toolbar";
import PreparationWidgets from "./preparationWidget/PreparationWidget";
import Settings from "./settings/Settings";
import Profile from "./profile/Profile";

import './App.scss';
import './toolbar/Toolbar.scss';
import './settings/Settings.scss';
import './profile/Profile.scss';
import './preparationWidget/PreparationWidget.scss';

type AppProps = {};

type AppState = {
    departingAirport: string;
    arrivingAirport: string;
};

class App extends React.Component<AppProps, AppState> {
    state: AppState = {
        departingAirport: "LFPG",
        arrivingAirport: "EHAM",
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
                        <Profile displayname="" />
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