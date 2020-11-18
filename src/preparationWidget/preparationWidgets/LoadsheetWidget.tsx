import React from 'react';

type LoadsheetWidgetProps = {};
type LoadsheetWidgetState = {};

export default class LoadsheetWidget extends React.Component<LoadsheetWidgetProps, LoadsheetWidgetState> {
    render() {
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
    }
};