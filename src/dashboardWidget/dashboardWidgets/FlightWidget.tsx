import React from 'react';

type FlightWidgetProps = {
    name: string,
    dep: string,
    arr: string,
    elapsedTime: string,
    distance: string,
    eta: string,
    timeSinceStart: string,
}

type FlightWidgetState = {
    startingTime: Date,
    elapsedFlightTime: string,
}

export default class FlightWidget extends React.Component<FlightWidgetProps, FlightWidgetState> {
    state: FlightWidgetState = {
        startingTime: new Date(),
        elapsedFlightTime: "00:00",
    };

    render() {
        return (
            <div id={'flight-' + this.props.name} className="flight-card">
                <div className='origin-destination'>
                    <p>
                        {this.props.dep}
                        <i> </i>
                        <i className="material-icons">send</i>
                        <i> </i>
                        {this.props.arr}
                    </p>
                </div>
                <div id="Time">
                    <p className="Title">TIME</p>
                    <p>{this.props.name === "todays" ? this.props.timeSinceStart : "01:43"}</p>
                </div>
                <div id="Distance">
                    <p className="Title">DISTANCE</p>
                    <p>{this.props.distance}</p>
                </div>
                <div id="ETA">
                    <p className="Title">{this.props.name === "todays" ? "ETA (UTC)" : "Arrival Time (UTC)"}</p>
                    <p>{this.props.eta}</p>
                </div>
            </div>
        );
    }
}