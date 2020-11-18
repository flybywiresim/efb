import React from 'react';

const LoadsheetWidget = () => {
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
};

export default LoadsheetWidget;