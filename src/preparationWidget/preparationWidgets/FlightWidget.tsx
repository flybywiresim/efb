import React from 'react';

type FlightWidgetProps = {
    name: string,
    dep: string,
    arr: string,
    elapsedTime: string,
    distance: string,
    eta: string
}

type FlightWidgetState = {
    elapsedFlightTime: Date
}

export default class FlightWidget extends React.Component<FlightWidgetProps, FlightWidgetState> {
    state: FlightWidgetState = {
        elapsedFlightTime: new Date()
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
                    <p>{this.props.elapsedTime}</p>
                </div>
                <div id="Distance">
                    <p className="Title">DISTANCE</p>
                    <p>{this.props.distance}</p>
                </div>
                <div id="ETA">
                    <p className="Title">{this.props.name === "Previous" ? "" : "ETA (UTC)"}</p>
                    <p>{this.props.eta}</p>
                </div>
            </div>
        );
    }
}