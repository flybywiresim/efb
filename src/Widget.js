import React from 'react';

class Widgets extends React.Component {
    render() {
        return (
            <div className="Widgets">
                <CFWidget dep={this.props.departingAirport} arr={this.props.arrivingAirport}/>
                <p>Text2</p>
                <p>Text3</p>
                <p>Text4</p>
                <p>Text5</p>
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
                <p>Today's Flight</p>
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
                        <p id="Title">Time</p>
                        <p>3:54</p>
                    </div>
                    <div id="Distance">
                        <p>Distance</p>
                    </div>
                    <div id="ETA">
                        <p>ETA</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Widgets;