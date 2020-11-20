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
                <span id='title-todays-flight' className="WidgetTitle">Today's flight</span>
                <span id='title-wx' className="WidgetTitle">Weather</span>
                <span id='title-loadsheet' className="WidgetTitle">Loadsheet</span>

                <FlightWidget name="todays" dep={this.props.departingAirport} arr={this.props.arrivingAirport} elapsedTime="00:49" distance="139nm" eta="19:48"/>
                <FlightWidget name="previous" dep="EGLL" arr="LFPG" elapsedTime="01:25" distance="274nm" eta="" />

                <WeatherWidget name='origin' editIcao="yes" icao={this.props.departingAirport} />
                <WeatherWidget name='dest' editIcao="yes" icao={this.props.arrivingAirport} />

                <LoadsheetWidget/>
            </div>
        );
    }
}

export default PreparationWidgets;