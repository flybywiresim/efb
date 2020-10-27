import React from 'react';

class Widgets extends React.Component {
    render() {
        return (
            <div className="Widgets">
                <CFWidget dep={this.props.departingAirport} arr={this.props.arrivingAirport}/>
                <WeatherWidget />
                <LoadsheetWidget />
            </div>
        );
    }
}

class CFWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elapsedFlightTime: new Date() };
    }

    render() {
        return (
            <div className="CFWidgetDiv">
                <p className="WidgetTitle">Today's Flight</p>
                <div id="Panel">
                    <div id="DepArr">
                        <p>
                            {this.props.dep}
                            <i> </i>
                            <i class="material-icons">send</i>
                            <i> </i>
                            {this.props.arr}
                        </p>
                    </div>
                    <div id="Time">
                        <p id="Title">TIME</p>
                        <p>3:54</p>
                    </div>
                    <div id="Distance">
                        <p id="Title">DISTANCE</p>
                        <p>400nm</p>
                    </div>
                    <div id="ETA">
                        <p id="Title">ETA</p>
                        <p>00:30</p>
                    </div>
                </div>
            </div>
        );
    }
}

class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);
    }

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
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LoadsheetWidgetDiv">
                <p className="WidgetTitle">Loadsheet</p>
                <div id="Panel">
                </div>
            </div>
        );
    }
}

export default Widgets;