import React, {useState, useEffect} from 'react';

type LoadsheetWidgetProps = {
    cargo: number,
    estLandingWeight: number,
    estTakeOffWeight: number,
    estZeroFuelWeight: number,
    maxLandingWeight: number,
    maxTakeOffWeight: number,
    maxZeroFuelWeight: number,
    passengerCount: number,
    passengerWeight: number,
    payload: number,
    avgFuelFlow: number,
    contingency: number,
    enrouteBurn: number,
    etops: number,
    extra: number,
    maxTanks: number,
    minTakeOff: number,
    planLanding: number,
    planRamp: number,
    planTakeOff: number,
    reserve: number,
    taxi: number,
    units: string
};
type LoadsheetWidgetState = {
    unitConversion: number;
};

const LoadsheetWidget = (props: LoadsheetWidgetProps) => {

    const [unitConversion, setunitConversion] = useState(1000);

    useEffect(() => {
        const unitConv = (props.units === "kg") ? 1000 : 2240;
        console.log("Units changed to " + unitConv);
        setunitConversion(unitConv);
    }, [props.units]);

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
                                    <td className="col-right">{props.passengerCount}</td>
                                    <td>&nbsp;</td>
                                    <td className="ls-col col-notes col-left">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="ls-col col-desc col-left">CARGO</td>
                                    <td className="col-right">{(props.cargo / unitConversion).toFixed(1)}</td>
                                    <td>&nbsp;</td>
                                    <td className="ls-col col-notes col-left">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="ls-col col-desc col-left">PAYLOAD</td>
                                    <td className="ls-col col-value col-right">{(props.payload / unitConversion).toFixed(1)}</td>
                                    <td>&nbsp;</td>
                                    <td className="ls-col col-notes col-left">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>ZFW</td>
                                    <td className="ls-col col-value col-right">{(props.estZeroFuelWeight / unitConversion).toFixed(1)}</td>
                                    <td className="ls-col col-value col-right">{(props.maxZeroFuelWeight / unitConversion).toFixed(1)}</td>
                                    <td className="ls-col col-notes col-left">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="ls-col col-desc col-left">FUEL</td>
                                    <td className="ls-col col-value col-right">{(props.planRamp / unitConversion).toFixed(1)}</td>
                                    <td className="ls-col col-value col-right">{(props.extra / unitConversion).toFixed(1)}</td>
                                    <td className="ls-col col-notes col-left"></td>
                                </tr>
                                <tr>
                                    <td className="ls-col col-desc col-left">TOW</td>
                                    <td className="ls-col col-value col-right">{(props.estTakeOffWeight / unitConversion).toFixed(1)}</td>
                                    <td className="ls-col col-value col-right">{(props.maxTakeOffWeight / unitConversion).toFixed(1)}</td>
                                    <td className="ls-col col-notes col-left">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="ls-col col-desc col-left">LAW</td>
                                    <td className="col-right">{(props.estLandingWeight / unitConversion).toFixed(1)}</td>
                                    <td className="col-right">{(props.maxLandingWeight / unitConversion).toFixed(1)}</td>
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
};

export default LoadsheetWidget;