import React from 'react';
import {getSimbriefData} from '../simbriefApi';

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
                    <div className='loadsheet-card-body'>
                        <div className="loadsheet-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col" className="ls-col col-desc col-left">&nbsp;</th>
                                        <th scope="col" className="ls-col col-value col-right">EST</th>
                                        <th scope="col" className="ls-col col-value col-right">MAX</th>
                                        <th scope="col" className="ls-col col-notes col-left">NOTES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="ls-col col-desc col-left">PAX</td>
                                        <td className="col-right">166</td>
                                        <td>&nbsp;</td>
                                        <td className="ls-col col-notes col-left">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="ls-col col-desc col-left">CARGO</td>
                                        <td className="col-right">0.1</td>
                                        <td>&nbsp;</td>
                                        <td className="ls-col col-notes col-left">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="ls-col col-desc col-left">PAYLOAD</td>
                                        <td className="ls-col col-value col-right">17.4</td>
                                        <td>&nbsp;</td>
                                        <td className="ls-col col-notes col-left">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>ZFW</td>
                                        <td className="ls-col col-value col-right">61.2</td>
                                        <td className="ls-col col-value col-right">62.5</td>
                                        <td className="ls-col col-notes col-left">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="ls-col col-desc col-left">FUEL</td>
                                        <td className="ls-col col-value col-right">10.6</td>
                                        <td className="ls-col col-value col-right">12.7</td>
                                        <td className="ls-col col-notes col-left">POSS EXTRA 2.1</td>
                                    </tr>
                                    <tr>
                                        <td className="ls-col col-desc col-left">TOW</td>
                                        <td className="ls-col col-value col-right">71.7</td>
                                        <td className="ls-col col-value col-right">73.8</td>
                                        <td className="ls-col col-notes col-left">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="ls-col col-desc col-left">LAW</td>
                                        <td className="col-right">63.9</td>
                                        <td className="col-right">66.0</td>
                                        <td className="ls-col col-notes col-left">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="loadsheet-card-footer">
                        <p className="footer-title">LOADSHEET</p>
                        <p>Weights</p>
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