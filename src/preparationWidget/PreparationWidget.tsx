import React from 'react';
import FlightWidget from "./preparationWidgets/FlightWidget";
import WeatherWidget from "./preparationWidgets/WeatherWidget";
import LoadsheetWidget from "./preparationWidgets/LoadsheetWidget";

type PreparationWidgetsProps = {
    departingAirport: string,
    arrivingAirport: string,
    flightDistance: string,
    flightETAInSeconds: string,
    timeSinceStart: string,
}

type PreparationWidgetsState = {}

class PreparationWidgets extends React.Component<PreparationWidgetsProps, PreparationWidgetsState> {
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
            <div className="PreparationWidgets">
                <span id='title-todays-flight' className="WidgetTitle">Today's flight</span>
                <span id='title-wx' className="WidgetTitle">Weather</span>
                <span id='title-loadsheet' className="WidgetTitle">Loadsheet</span>

                <FlightWidget
                    name="todays"
                    dep={this.props.departingAirport}
                    arr={this.props.arrivingAirport}
                    elapsedTime="00:49"
                    distance={this.props.flightDistance}
                    eta={this.calculateFlightTime(this.props.flightETAInSeconds)}
                    timeSinceStart={this.props.timeSinceStart} />
                <FlightWidget
                    name="previous"
                    dep="EGLL"
                    arr="LFPG"
                    elapsedTime="01:25"
                    distance="274nm"
                    eta=""
                    timeSinceStart="" />

                <WeatherWidget name='origin' editIcao="yes" icao={this.props.departingAirport} />
                <WeatherWidget name='dest' editIcao="yes" icao={this.props.arrivingAirport} />

                <LoadsheetWidget/>
            </div>
        );
    }
}

export default PreparationWidgets;