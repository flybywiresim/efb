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
import { getSimbriefData, ISimbriefData } from './simbriefApi';

import './App.scss';
import './toolbar/Toolbar.scss';
import './settings/Settings.scss';
import './profile/Profile.scss';
import './preparationWidget/PreparationWidget.scss';

type AppProps = {};

type AppState = {
    departingAirport: string;
    arrivingAirport: string;
    flightDistance: string;
    simbriefUsername: string | undefined;
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.fetchSimbriefData = this.fetchSimbriefData.bind(this);
    }

    state: AppState = {
        departingAirport: "",
        arrivingAirport: "",
        flightDistance: "",
        simbriefUsername: "Legitness101"
    }

    async fetchSimbriefData() {
        if (!this.state.simbriefUsername) {
            return;
        }

        console.log("Fetching simbriefData");
        const simbriefData = await getSimbriefData(this.state.simbriefUsername);
        console.info(simbriefData);
        this.setState({
            departingAirport: simbriefData.origin.icao,
            arrivingAirport: simbriefData.destination.icao,
            flightDistance: simbriefData.distance
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Toolbar fetchSimbrief={this.fetchSimbriefData} />
                </div>
                <Switch>
                    <Route path="/preparation">
                        <PreparationWidgets
                            departingAirport={this.state.departingAirport}
                            arrivingAirport={this.state.arrivingAirport}
                            flightDistance={this.state.flightDistance}
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
                        <Profile displayname="atomic" />
                    </Route>
                    <Route path="/">
                        <PreparationWidgets
                            departingAirport={this.state.departingAirport}
                            arrivingAirport={this.state.arrivingAirport}
                            flightDistance={this.state.flightDistance}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;