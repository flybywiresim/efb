import React from 'react';

// @ts-ignore
import metarParser from 'aewx-metar-parser';
import NXApi from '../NXApi';

type WeatherWidgetProps = {
    icao: string,
}

type WeatherWidgetState = {
    metar: object,
}

export default class WeatherWidget extends React.Component<WeatherWidgetProps, WeatherWidgetState> {
    state = { metar: {} };

    async componentDidMount() {
        const returned = await NXApi.getMetar(this.props.icao, "vatsim");
        const metar = returned.metar;
        this.setState({ metar: metarParser(metar)});
    }

    render() {
        return (
            <div className="WeatherWidgetDiv">
                <p className="WidgetTitle">Weather</p>
                <div id="Panel">

                </div>
            </div>
        );
    }
}