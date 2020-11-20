import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { getSimbriefData } from './simbriefApi';
import './aewx-metar-parser.d';
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
    simbriefUsername: string | undefined;
    departingAirport: string;
    arrivingAirport: string;
    flightDistance: string;
};

class App extends React.Component<AppProps, AppState> {
    state: AppState = {
        departingAirport: "KLAX",
        arrivingAirport: "KSFO",
        simbriefUsername: "",
        flightDistance: "",
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

    changeSimbriefUsername = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        this.setState({ simbriefUsername: event.target.value.toString() });
    }

    render() {
        return (
            <Router>
                <Toolbar fetchSimbrief={this.fetchSimbriefData}/>
                <div id="main-container">
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
                            <Profile changeSimbriefUsername={this.changeSimbriefUsername}/>
                        </Route>
                        <Route path="/">
                            <PreparationWidgets
                                departingAirport={this.state.departingAirport}
                                arrivingAirport={this.state.arrivingAirport}
                                flightDistance={this.state.flightDistance}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;