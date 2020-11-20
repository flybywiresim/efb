import React, { FunctionComponent, useEffect, useState } from 'react';
import metarParser from 'aewx-metar-parser';
import { Metar } from '@flybywiresim/api-client';

const MetarParserTypeWindState: Wind = {
    degrees:   0,
    speed_kts: 0,
    speed_mps: 0,
    gust_kts:  0,
    gust_mps:  0
};

const Visibility = {
    miles:        "",
    miles_float:  0.0,
    meters:       "",
    meters_float: 0.0,
};

const ConditionCode = {
    code: "",
};

const Cloud = {
    code:            "",
    base_feet_agl:   0,
    base_meters_agl: 0,
};

const Ceiling = {
    code:       "",
    feet_agl:   0,
    meters_agl: 0,
};

const Temperature = {
    celsius:    0,
    fahrenheit: 0,
};

const Dewpoint = {
    celsius:    0,
    fahrenheit: 0,
};

const Barometer = {
    hg:     0,
    kpa:    0,
    mb:     0,
};

const MetarParserTypeState: MetarParserType = {
    raw_text: "",
    raw_parts: [""],
    icao: "",
    observed: new Date,
    wind: MetarParserTypeWindState,
    visibility: Visibility,
    conditions: [ConditionCode],
    clouds: [Cloud],
    ceiling: Ceiling,
    temperature: Temperature,
    dewpoint: Dewpoint,
    humidity_percent: 0,
    barometer: Barometer,
    flight_category: "",
};

const MetarParserTypeProp: MetarParserType = {
    raw_text: "",
    raw_parts: [""],
    icao: "",
    observed: new Date,
    wind: MetarParserTypeWindState,
    visibility: Visibility,
    conditions: [ConditionCode],
    clouds: [Cloud],
    ceiling: Ceiling,
    temperature: Temperature,
    dewpoint: Dewpoint,
    humidity_percent: 0,
    barometer: Barometer,
    flight_category: "",
};

type WeatherWidgetProps = { name: string, editIcao: string, icao: string };

const WeatherWidget = (props: WeatherWidgetProps) => {

    const [metar, setMetar] = useState<MetarParserType>(MetarParserTypeProp);
    const [modalStatus, setModalStatus] = useState(false);

    // This could be modified using the Settings tab perhaps?
    const source = "vatsim";

    const handleIcao = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        if (event.target.value.length === 4) {
            getMetar(event.target.value, source);
        } else if (event.target.value.length === 0) {
            getMetar(props.icao, source);
        }
    };

    function getMetar(icao:any, source: any) {
        if (icao.length !== 4) {
            return new Promise(() => {
                setMetar(MetarParserTypeProp);
            });
        }
        return Metar.get(icao, source)
            .then(result => {
                const metarParse = metarParser(result.metar);
                setMetar(metarParse);
                console.log(metarParse);
            })
            .catch(() => {
                setMetar(MetarParserTypeProp);
            });
    }

    useEffect(() => {
        getMetar(props.icao, source)
            .then(() => {
                localStorage.setItem('origIcao', props.icao);
            });
    }, []);

    function showModal() {
        setModalStatus(!modalStatus);
        console.log(modalStatus);
    }

    return (
        <div className='weather-card' id={'weather-card-' + props.name}>
            {metar === undefined ?
                <p>Loading ...</p>
                :
                <><div id="OneByTwo">
                    <div id="icao">
                        {props.editIcao == "yes" ?
                            <>
                                <input id="icaoInput"
                                    type="text"
                                    placeholder={props.icao}
                                    onChange={handleIcao} />
                            </>
                            :
                            metar.icao
                        }
                    </div>
                    <div className="WeatherIcon" onClick={showModal}><i className="wi wi-day-lightning" /></div>
                </div>
                {modalStatus ?
                    <div id="MetarModal">
                        <p>{metar.raw_text}</p>
                    </div>
                    :
                    <div id="TwoByTwo">
                        <div className="col">
                            <span className="big">
                                <i className="wi wi-barometer" />
                            </span><br />{metar.barometer.mb.toFixed(0)}
                            <span className="unit"> mb</span>
                        </div>
                        <div className="col">
                            <span className="big">
                                <i className="wi wi-strong-wind" />
                            </span><br />{metar.wind.degrees.toFixed(0)}&deg; / {metar.wind.speed_kts.toFixed(0)}
                            <span className="unit"> kts</span>
                        </div>
                        <div>
                            <span className="big">
                                <i className="wi wi-thermometer" />
                            </span><br />{metar.temperature.celsius.toFixed(0)}&deg;
                            <span className="unit">C</span>
                        </div>
                        <div>
                            <span className="big">
                                <i className="wi wi-raindrop" />
                            </span><br />{metar.dewpoint.celsius.toFixed(0)}&deg;
                            <span className="unit">C</span>
                        </div>
                    </div>
                }
                <div id="IcaoIdent">
                    <div>
                        <span className="icaoUpdate">Updated at {metar.observed.getUTCHours().toString().padStart(2, '0')}:{metar.observed.getUTCMinutes().toString().padStart(2, '0')}z</span>
                    </div>
                </div>
                </>
            }
        </div>
    );
};

export default WeatherWidget;