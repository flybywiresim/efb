import React from 'react';
// @ts-ignore
import WeatherWidget from "./WeatherWidget.tsx";
import metarParser from 'aewx-metar-parser';
import NXApi from './NXApi';
import { render } from 'react-dom';

type PreparationWidgetsProps = {
    departingAirport: string,
    arrivingAirport: string,
}

type PreparationWidgetsState = {
    icao: string,
    weatherSource: string
}

type FWidgetProps = {
    id: string,
    name: string,
    dep: string,
    arr: string,
    elapsedTime: string,
    distance: string,
    eta: string,
}

type FWidgetState = {
    elapsedFlightTime: Date,
}

type WeatherWidgetProps = {
    icao: string,
}

type WeatherWidgetState = {
    metar: object,
}

class PreparationWidgets extends React.Component<PreparationWidgetsProps, PreparationWidgetsState> {
    state: PreparationWidgetsState = {
        icao: "LFPG",
        weatherSource: "vatsim"
    };

    render() {
        return (
            <div className="PreparationWidgets">
                <FWidget
                    id="Current"
                    name="Today's Flight"
                    dep={this.props.departingAirport}
                    arr={this.props.arrivingAirport}
                    elapsedTime="00:49"
                    distance="139nm"
                    eta="19:48"
                />
                <FWidget
                    id="Previous"
                    name="Previous Legs"
                    dep="EGLL"
                    arr="LFPG"
                    elapsedTime="01:25"
                    distance="274nm"
                    eta="" />
                <WeatherWidget icao={this.state.icao} source={this.state.weatherSource} />
                <LoadsheetWidget />
            </div>
        );
    }
}

class FWidget extends React.Component<FWidgetProps, FWidgetState> {
    state: FWidgetState = { elapsedFlightTime: new Date() };

    render() {
        return (
            <div className="FWidgetDiv">
                <p className="WidgetTitle">{this.props.name}</p>
                <div id="Panel">
                    <div id="DepArr">
                        <div>
                            <p>
                                {this.props.dep}
                                <i> </i>
                                <i className="material-icons">send</i>
                                <i> </i>
                                {this.props.arr}
                            </p>
                        </div>
                    </div>
                    <div id="Time">
                        <p id="Title">TIME</p>
                        <p>{this.props.elapsedTime}</p>
                    </div>
                    <div id="Distance">
                        <p id="Title">DISTANCE</p>
                        <p>{this.props.distance}</p>
                    </div>
                    <div id="ETA">
                        <p id="Title">{this.props.id === "Previous" ? "" : "ETA (UTC)"}</p>
                        <p>{this.props.eta}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// class WeatherWidget extends React.Component<WeatherWidgetProps, WeatherWidgetState> {
//     state = { metar: {} };

//     async componentDidMount() {
//         const returned = await NXApi.getMetar(this.props.icao, "vatsim");
//         const metar = returned.metar;
//         this.setState({ metar: metarParser(metar)});
//     }

//     render() {
//         return (
//             <div className="WeatherWidgetDiv">
//                 <p className="WidgetTitle">Weather</p>
//                 <div id="Panel">

//                 </div>
//             </div>
//         );
//     }
// }

class LoadsheetWidget extends React.Component {
    render() {
        return (
            <div className="LoadsheetWidgetDiv">
                <p className="WidgetTitle">Loadsheet</p>
                <div id="Area">
                    <div id="Panel1">
                        <div id="BottomPanel">
                            <p id="Title">LOADSHEET</p>
                            <p>Payload</p>
                        </div>
                    </div>
                    <div id="Panel2">
                        <div id="BottomPanel">
                            <p id="Title">LOADSHEET</p>
                            <p>Fuel Loading</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreparationWidgets;