import React from 'react';

import FlightWidget from './preparationWidgets/FlightWidget';
import WeatherWidget from './preparationWidgets/WeatherWidget';
import LoadsheetWidget from './preparationWidgets/LoadsheetWidget';

type PreparationWidgetsProps = {
    departingAirport: string,
    arrivingAirport: string,
    flightDistance: string,
    flightETAInSeconds: string
}

type PreparationWidgetsState = {
    icao: string,
}

class PreparationWidgets extends React.Component<PreparationWidgetsProps, PreparationWidgetsState> {
    state: PreparationWidgetsState = {
        icao: "LFPG",
    };

    calculateFlightTime(flightETAInSeconds: string): string {
        const timeInMinutes: number = parseInt(flightETAInSeconds) * 0.0166;
        if (timeInMinutes.toString() === "NaN") {
            return "00:00";
        }

        const hours = (timeInMinutes / 60);
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours) * 60;
        const rminutes = Math.round(minutes);

        return rhours + ":" + rminutes;
    }

    render() {
        return (
            <div className="PreparationWidgets">
                <FlightWidget
                    id="Current"
                    name="Today's Flight"
                    dep={this.props.departingAirport}
                    arr={this.props.arrivingAirport}
                    elapsedTime="00:00"
                    distance={this.props.flightDistance}
                    eta={this.calculateFlightTime(this.props.flightETAInSeconds)}
                />
                <FlightWidget
                    id="Previous"
                    name="Previous Legs"
                    dep="EGLL"
                    arr="LFPG"
                    elapsedTime="01:25"
                    distance="274nm"
                    eta="3"
                />
                <WeatherWidget
                    icao={this.state.icao}/>
                <LoadsheetWidget />
            </div>
        );
    }
}

export default PreparationWidgets;