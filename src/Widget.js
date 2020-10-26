import React from 'react';

class Widgets extends React.Component {
    render() {
        return (
            <div className="Widgets">
                <CFWidget dep="KLAX" arr="KSFO"/>
                <p>Text2</p>
                <p>Text3</p>
                <p>Text4</p>
                <p>Text5</p>
            </div>
        );
    }
}

class CFWidget extends React.Component {
    render() {
        return (
            <div className="CFWidgetDiv">
                <p>Today's Flight</p>
                <div className="CFDataDiv">
                    <div className="CFWidgetDepArr">
                        <p>{this.props.dep} > {this.props.arr}</p>
                    </div>
                    <div className="CFWidgetTime">
                        <p>Time</p>
                    </div>
                    <div className="CFWidgetDistance">
                        <p>Distance</p>
                    </div>
                    <div className="CFWidgetETA">
                        <p>ETA</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Widgets;