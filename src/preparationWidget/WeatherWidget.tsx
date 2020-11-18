import React, { useEffect, useState} from 'react';
import metarParser from 'aewx-metar-parser';
//import NXApi from "./NXApi.js";
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

const WeatherWidget = ({icao}: any, {source}: any) => {

    //const nxapi = new NXApi;
    const [metar, setMetar] = useState<MetarParserType>(MetarParserTypeState);

    // useEffect(() => {
    //     NXApi.getMetar(icao,source)
    //         .then(result => {
    //             console.log(result);
    //             const metarParse = metarParser(result.metar);
    //             setMetar(metarParse);
    //             console.log(metar);
    //         });
    // }, []);

    useEffect(() => {
        Metar.get(icao,source)
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
        <div className="WeatherWidgetDiv">
            <p className="WidgetTitle">Weather</p>
            <div id="Panel">
                {metar === undefined ?
                    <p>Loading ...</p>
                    :
                    <p>Loaded {metar.icao}</p>
                }
            </div>
        </div>
    );

};

export default WeatherWidget;