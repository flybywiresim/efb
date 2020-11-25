import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { getSimbriefData } from './simbriefApi';
import './aewx-metar-parser.d';
import Time from "./time/Time";
import Toolbar from "./toolbar/Toolbar";
import DashboardWidgets from "./dashboardWidget/DashboardWidget";
import LoadsheetWidget from "./loadsheetWidget/LoadsheetWidget";
import Settings from "./settings/Settings";
import Profile from "./profile/Profile";

import './App.scss';
import './time/Time.scss';
import './toolbar/Toolbar.scss';
import './dashboardWidget/DashboardWidget.scss';
import './loadsheetWidget/LoadsheetWidget.scss';
import './settings/Settings.scss';
import './profile/Profile.scss';

type AppProps = {};

type AppState = {
    simbriefUsername: string;
    departingAirport: string;
    arrivingAirport: string;
    flightDistance: string;
    flightETAInSeconds: string;
    currentTime: Date,
    initTime: Date,
    timeSinceStart: string,
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.updateCurrentTime = this.updateCurrentTime.bind(this);
        this.updateTimeSinceStart = this.updateTimeSinceStart.bind(this);
        this.fetchSimbriefData = this.fetchSimbriefData.bind(this);
    }

    state: AppState = {
        departingAirport: 'N/A',
        arrivingAirport: 'N/A',
        simbriefUsername: this.fetchSimbriefUsername(),
        flightDistance: 'N/A',
        flightETAInSeconds: 'N/A',
        currentTime: new Date(),
        initTime: new Date(),
        timeSinceStart: "00:00"
    }

    updateCurrentTime(currentTime: Date) {
        this.setState({currentTime: currentTime});
    }

    updateTimeSinceStart(timeSinceStart: string) {
        this.setState({timeSinceStart: timeSinceStart});
    }

    fetchSimbriefUsername() {
        const username = window.localStorage.getItem("SimbriefUsername");
        if (username === null) {
            return '';
        } else {
            return username;
        }
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
            flightETAInSeconds: simbriefData.flightETAInSeconds,
        });
    }

    changeSimbriefUsername = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        this.setState({ simbriefUsername: event.target.value.toString() });
        window.localStorage.setItem("SimbriefUsername", event.target.value.toString());
    }

    render() {
        return (
            <Router>
                <Time initTime={this.state.initTime} updateCurrentTime={this.updateCurrentTime} updateTimeSinceStart={this.updateTimeSinceStart}/>
                <Toolbar fetchSimbrief={this.fetchSimbriefData}/>
                <div id="main-container">
                    <Switch>
                        <Route path="/dashboard">
                            <DashboardWidgets
                                departingAirport={this.state.departingAirport}
                                arrivingAirport={this.state.arrivingAirport}
                                flightDistance={this.state.flightDistance}
                                flightETAInSeconds={this.state.flightETAInSeconds}
                                timeSinceStart={this.state.timeSinceStart} />
                        </Route>
                        <Route path="/loadsheet">
                            <LoadsheetWidget />
                        </Route>
                        <Route path="/flight">
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
                            <Profile
                                simbriefUsername={this.state.simbriefUsername}
                                changeSimbriefUsername={this.changeSimbriefUsername} />
                        </Route>
                        <Route path="/">
                            <DashboardWidgets
                                departingAirport={this.state.departingAirport}
                                arrivingAirport={this.state.arrivingAirport}
                                flightDistance={this.state.flightDistance}
                                flightETAInSeconds={this.state.flightETAInSeconds}
                                timeSinceStart={this.state.timeSinceStart}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;