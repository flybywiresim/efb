import {ISimbriefData} from "./simbriefInterface";

const simbriefApiUrl: URL = new URL("https://www.simbrief.com/api/xml.fetcher.php");
const simbriefApiParams = simbriefApiUrl.searchParams;

const getRequestData: RequestInit = {
    headers: {
        'Accept': 'application/json'
    },
    method: "GET"
};

export function getSimbriefData(simbriefUsername: string): ISimbriefData {
    simbriefApiParams.append("username", simbriefUsername);
    simbriefApiParams.append("json", "1");
    simbriefApiUrl.search = simbriefApiParams.toString();

    const simbriefData = fetch(simbriefApiUrl.toString(), getRequestData)
        .then(res => res.json())
        .then(
            (result: any) => {
                console.info(result);
                return simbriefDataParser(result);
            },
            (error) => {
                console.log("err");
            }
        );
    //@ts-ignore
    return simbriefData;
}

function simbriefDataParser(simbriefJson: any): ISimbriefData {
    const general = simbriefJson.general;
    const origin = simbriefJson.origin;
    const destination = simbriefJson.destination;
    const times = simbriefJson.times;
    return {
        airline: general.icao_airline,
        flightNumber: general.flight_number,
        cruiseAltitude: general.initial_altitude,
        costIndex: general.costindex,
        route: general.route,
        origin: {
            iata: origin.iata_code,
            icao: origin.icao_code
        },
        destination: {
            iata: destination.iata_code,
            icao: destination.icao_code
        },
        distance: general.air_distance + "nm",
        flightETAInSeconds: times.est_time_enroute
    };
};