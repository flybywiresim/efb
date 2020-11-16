export interface ISimbriefData {
    origin: IAirportInfo,
    destination: IAirportInfo,
    airline: string,
    flightNumber: string,
    cruiseAltitude: number,
    costIndex: number,
    route: string,
    distance: string,
    flightETAInSeconds: string
}

interface IAirportInfo {
    icao: string,
    iata: string
}