export interface ISimbriefData {
    origin: IAirportInfo,
    destination: IAirportInfo,
    airline: string,
    flightNumber: string,
    cruiseAltitude: number,
    costIndex: number,
    route: string,
    distance: string,
    flightETAInSeconds: string,
    weights: IWeights,
    fuel: IFuel,
    units: string
}

interface IAirportInfo {
    icao: string,
    iata: string
}

interface IWeights {
    cargo: number,
    estLandingWeight: number,
    estTakeOffWeight: number,
    estZeroFuelWeight: number,
    maxLandingWeight: number,
    maxTakeOffWeight: number,
    maxZeroFuelWeight: number,
    passengerCount: number,
    passengerWeight: number,
    payload: number
}

interface IFuel {
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
    taxi: number
}