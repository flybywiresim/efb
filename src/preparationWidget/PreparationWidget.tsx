import React from 'react';
import FlightWidget from "./preparationWidgets/FlightWidget";
import WeatherWidget from "./preparationWidgets/WeatherWidget";
import LoadsheetWidget from "./preparationWidgets/LoadsheetWidget";

type PreparationWidgetsProps = {
    departingAirport: string,
    arrivingAirport: string,
}

type PreparationWidgetsState = {}

class PreparationWidgets extends React.Component<PreparationWidgetsProps, PreparationWidgetsState> {
    render() {
        return (
            <div className="PreparationWidgets">
                <FlightWidget
                    id="Current"
                    name="Today's Flight"
                    dep={this.props.departingAirport}
                    arr={this.props.arrivingAirport}
                    elapsedTime="00:49"
                    distance="139nm"
                    eta="19:48"
                />
                <FlightWidget
                    id="Previous"
                    name="Previous Legs"
                    dep="EGLL"
                    arr="LFPG"
                    elapsedTime="01:25"
                    distance="274nm"
                    eta="" />
                <div className="WeatherWidgetDiv">
                    <p className="WidgetTitle">Weather</p>
                    <WeatherWidget editIcao="yes" icao={this.props.departingAirport} />
                    <WeatherWidget editIcao="yes" icao={this.props.arrivingAirport} />
                </div>
                <LoadsheetWidget />
            </div>
        );
    }
}

export default PreparationWidgets;