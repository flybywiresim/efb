import React from 'react';

class PreparationWidgets extends React.Component {
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
                    distance="274nm" />
                <WeatherWidget />
                <LoadsheetWidget />
            </div>
        );
    }
}

class FWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elapsedFlightTime: new Date() };
    }

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
                        <p id="Title">ETA (UTC)</p>
                        <p>{this.props.eta}</p>
                    </div>
                </div>
            </div>
        );
    }
}

class WeatherWidget extends React.Component {
    render() {
        return (
            <div className="WeatherWidgetDiv">
                <p className="WidgetTitle">Weather</p>
                <div id="Panel">

                </div>
            </div>
        );
    }
}

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