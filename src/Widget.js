import React from 'react';
import 'material-design-icons';

class Widgets extends React.Component {
    render() {
        return (
            <div className="Widgets">
                <CFWidget dep="KLAX " arr=" KSFO"/>
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
                <div id="Panel">
                    <div id="DepArr">
                        <p>
                            {this.props.dep}
                            <i class="material-icons">send</i>
                            {this.props.arr}
                        </p>
                    </div>
                    <div id="Time">
                        <p>Time</p>
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