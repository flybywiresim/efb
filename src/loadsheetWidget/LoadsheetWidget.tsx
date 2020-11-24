import React from 'react';

type LoadsheetWidgetProps = {};
type LoadsheetWidgetState = {};

export default class LoadsheetWidget extends React.Component<LoadsheetWidgetProps, LoadsheetWidgetState> {
    render() {
        return (
            <div className="loadsheet-div">
                <div>
                    <span id='title-loadsheet' className="WidgetTitle">Loadsheet</span>
                </div>
                <div className='loadsheet-card' id="loadsheet-payload-card">
                    <div className='loadsheet-card-body'/>
                    <div className="loadsheet-card-footer">
                        <p className="footer-title">LOADSHEET</p>
                        <p>Payload</p>
                    </div>
                </div>
                <div className='loadsheet-card' id="loadsheet-fuel-card">
                    <div className='loadsheet-card-body'/>
                    <div className='loadsheet-card-footer'>
                        <p className="footer-title">LOADSHEET</p>
                        <p>Fuel Loading</p>
                    </div>
                </div>
            </div>
        );
    }
};