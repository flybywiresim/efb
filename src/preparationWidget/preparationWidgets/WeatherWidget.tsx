import React, { useEffect, useState} from 'react';
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

const WeatherWidget = (props: any) => {

    const [metar, setMetar] = useState<MetarParserType>(MetarParserTypeState);
    // This could be modified using the Settings tab perhaps?
    const source = "vatsim";

    useEffect(() => {
        Metar.get(props.icao, source)
            .then(result => {
                console.log(result);
                const metarParse = metarParser(result.metar);
                setMetar(metarParse);
                console.log(metar);
            });
    }, []);

    useEffect(() => {
        console.log(metar);
    }, [metar]);

    return (
        <div id="Panel">
            {metar === undefined ?
                <p>Loading ...</p>
                :
                <><div id="OneByTwo">
                    <div id="icao">{metar.icao} </div>
                    <div id="WeatherIcon"><i className="wi wi-day-lightning" /></div>
                </div>
                <div id="TwoByTwo">
                    <div className="col">
                        <span className="big">
                            <i className="wi wi-barometer" />
                        </span><br/>{metar.barometer.mb}
                        <span className="unit"> mb</span>
                    </div>
                    <div className="col">
                        <span className="big">
                            <i className="wi wi-strong-wind" />
                        </span><br/>{metar.wind.degrees}&deg; / {metar.wind.speed_kts}
                        <span className="unit"> kts</span>
                    </div>
                    <div className="col">
                        <span className="big">
                            <i className="wi wi-thermometer" />
                        </span><br/>{metar.temperature.celsius}&deg;
                        <span className="unit">C</span>
                    </div>
                    <div className="col">
                        <span className="big">
                            <i className="wi wi-raindrop" />
                        </span><br/>{metar.dewpoint.celsius}&deg;
                        <span className="unit">C</span>
                    </div>
                </div>
                </>
            }
        </div>
    );

};

export default WeatherWidget;