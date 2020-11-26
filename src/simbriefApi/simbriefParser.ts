import { isFunctionLike } from "typescript";
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
    const weights = simbriefJson.weights;
    const fuel = simbriefJson.fuel;
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
        flightETAInSeconds: times.est_time_enroute,
        weights : {
            cargo: weights.cargo,
            estLandingWeight: weights.est_ldw,
            estTakeOffWeight: weights.est_tow,
            estZeroFuelWeight: weights.est_zfw,
            maxLandingWeight: weights.max_ldw,
            maxTakeOffWeight: weights.max_tow,
            maxZeroFuelWeight: weights.max_zfw,
            passengerCount: weights.pax_count,
            passengerWeight: weights.pax_weight,
            payload: weights.payload
        },
        fuel : {
            avgFuelFlow: fuel.avg_fuel_flow,
            contingency: fuel.contingency,
            enrouteBurn: fuel.enroute_burn,
            etops: fuel.etops,
            extra: fuel.extra,
            maxTanks: fuel.max_tanks,
            minTakeOff: fuel.min_takeoff,
            planLanding: fuel.plan_landing,
            planRamp: fuel.plan_ramp,
            planTakeOff: fuel.plan_takeoff,
            reserve: fuel.reserve,
            taxi: fuel.taxi
        }
    };
};