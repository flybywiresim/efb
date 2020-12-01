import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import FlightWidget from "./dashboardWidgets/FlightWidget";
import WeatherWidget from "./dashboardWidgets/WeatherWidget";
import Map from "@flybywiresim/map";

type DashboardWidgetProps = {
    departingAirport: string,
    arrivingAirport: string,
    flightDistance: string,
    flightETAInSeconds: string,
    timeSinceStart: string,
}

type DashboardWidgetState = {}

class DashboardWidget extends React.Component<DashboardWidgetProps, DashboardWidgetState> {
    calculateFlightTime(flightETAInSeconds: string): string {
        const timeInMinutes: number = parseInt(flightETAInSeconds) * 0.0166;
        if (timeInMinutes.toString() === "NaN") {
            return "00:00";
        }

        const hours = (timeInMinutes / 60);
        const roundedHours = Math.floor(hours);
        const minutes = (hours - roundedHours) * 60;
        const roundedMinutes = Math.round(minutes);

        return (roundedHours <= 9 ? "0" : "") + roundedHours + ":" + (roundedMinutes <= 9 ? "0" : "") + roundedMinutes;
    }

    render() {
        return (
            <div className="DashboardWidget">
                <span id='title-todays-flight' className="WidgetTitle">Today's flight</span>
                <span id='title-wx' className="WidgetTitle">Weather</span>
                <span id='title-map' className="WidgetTitle">Map</span>

                <Route>
                    <div className="flight-widget">
                        <Switch>
                            <Route path="/dashboard/primary">
                                <FlightWidget
                                    name="todays"
                                    dep={this.props.departingAirport}
                                    arr={this.props.arrivingAirport}
                                    elapsedTime="00:49"
                                    distance={this.props.flightDistance}
                                    eta={this.calculateFlightTime(this.props.flightETAInSeconds)}
                                    timeSinceStart={this.props.timeSinceStart} />
                            </Route>
                            <Route path="/dashboard/secondary">
                                <FlightWidget
                                    name="secondary"
                                    dep="EGLL"
                                    arr="LFPG"
                                    elapsedTime="01:25"
                                    distance="274nm"
                                    eta="15:43"
                                    timeSinceStart="" />
                            </Route>
                            <Route path="/">
                                <FlightWidget
                                    name="todays"
                                    dep={this.props.departingAirport}
                                    arr={this.props.arrivingAirport}
                                    elapsedTime="00:49"
                                    distance={this.props.flightDistance}
                                    eta={this.calculateFlightTime(this.props.flightETAInSeconds)}
                                    timeSinceStart={this.props.timeSinceStart} />
                            </Route>
                            <Route path="/dashboard">
                                <FlightWidget
                                    name="todays"
                                    dep={this.props.departingAirport}
                                    arr={this.props.arrivingAirport}
                                    elapsedTime="00:49"
                                    distance={this.props.flightDistance}
                                    eta={this.calculateFlightTime(this.props.flightETAInSeconds)}
                                    timeSinceStart={this.props.timeSinceStart} />
                            </Route>
                        </Switch>
                    </div>
                </Route>

                <WeatherWidget name='origin' editIcao="yes" icao={this.props.departingAirport} />
                <WeatherWidget name='dest' editIcao="yes" icao={this.props.arrivingAirport} />
                <div className="map-widget">
                    <Map currentFlight="" disableSearch={false} disableInfo={false} />
                </div>
            </div>
        );
    }
}

export default DashboardWidget;