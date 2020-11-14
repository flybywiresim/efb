export interface ISimbriefData {
    origin: IAirportInfo,
    destination: IAirportInfo,
    airline: string,
    flightNumber: string,
    initialAltitude: number,
    costIndex: number,
    route: string,
    distance: string
}

interface IAirportInfo {
    icao: string,
    iata: string
}