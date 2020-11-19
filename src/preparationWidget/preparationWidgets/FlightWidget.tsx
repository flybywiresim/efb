import React from 'react';

type FlightWidgetProps = {
    id: string,
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
            <div className="FlightWidgetDiv">
                <p className="WidgetTitle">{this.props.name}</p>
                <div id="Panel">
                    <div id="DepArr">
                        <p>
                            {this.props.dep}
                            <i> </i>
                            <i className="material-icons">send</i>
                            <i> </i>
                            {this.props.arr}
                        </p>
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