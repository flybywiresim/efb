import React from 'react';

class Widgets extends React.Component {
    render() {
        return (
            <div className="Widgets">
                <CFWidget />
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

                </div>
            </div>
        );
    }
}

export default Widgets;