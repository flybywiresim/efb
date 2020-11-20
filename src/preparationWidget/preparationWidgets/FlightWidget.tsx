import React from 'react';
import flight from "material-design-icons/maps/svg/production/ic_flight_48px.svg";

type FlightWidgetProps = {
    name: string,
    dep: string,
    arr: string,
    elapsedTime: string,
    distance: string,
    eta: string
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
    interval: any;

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ elapsedFlightTime: this.timeSinceStart()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timeSinceStart() {
        const now = new Date();

        const diff = now.getTime() - this.state.startingTime.getTime();
        const minutes = Math.floor(diff / 1000 / 60);
        const diffMinusMinutes = diff - (minutes * 1000 * 60);
        const seconds = Math.floor(diffMinusMinutes / 1000);

        return (minutes <= 9 ? "0" : "") + minutes + ":" + (seconds <= 9 ? "0" : "") + seconds;
    }

    render() {
        return (
            <div id={'flight-' + this.props.name} className="flight-card">
                <div className='origin-destination'>
                    <p>
                        {this.props.dep}
                        <i> </i>
                        <img height="40" id="flight-icon" src={flight} alt="to" />
                        <i> </i>
                        {this.props.arr}
                    </p>
                </div>
                <div id="Time">
                    <p className="Title">TIME</p>
                    <p>{this.props.name === "todays" ? this.timeSinceStart() : "01:43"}</p>
                </div>
                <div id="Distance">
                    <p className="Title">DISTANCE</p>
                    <p>{this.props.distance}</p>
                </div>
                <div id="ETA">
                    <p className="Title">{this.props.name === "todays" ? "ETA (UTC)" : ""}</p>
                    <p>{this.props.eta}</p>
                </div>
            </div>
        );
    }
}