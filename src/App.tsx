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
    flightETAInSeconds: string;
    simbriefUsername: string | undefined;
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.fetchSimbriefData = this.fetchSimbriefData.bind(this);
    }

    state: AppState = {
        departingAirport: "N/A",
        arrivingAirport: "N/A",
        flightDistance: "N/A",
        flightETAInSeconds: "N/A",
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
            flightDistance: simbriefData.distance,
            flightETAInSeconds: simbriefData.flightETAInSeconds
        });
    }

    handleArrivalDepartureUpdates() {

    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Toolbar fetchSimbrief={this.fetchSimbriefData} />
                </div>
                <Switch>
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
                            flightETAInSeconds={this.state.flightETAInSeconds}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;