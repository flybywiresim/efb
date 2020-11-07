class Metar {
    constructor(metar) {

        let splitData = metar.split(' ');

        this.icao = splitData[0];
        for (let i = 0; i === (splitData.length - 1); i++) {
            if (splitData[i].endsWith('Z')) {
                let splitTime = splitData[i].match(/.{2}/g);
                this.time = new Time(splitTime[0], splitTime[1], splitTime[2]);
            } else if (splitData[i].endsWith('KT')) {
                this.wind = new Wind(splitData[i].split(0, 2), splitData[i].split(3, 4))
            }
        }
    }
}

class Time {
    constructor(day, hour, minutes) {
        this.day = day;
        this.hour = hour;
        this.minutes = minutes;
    }
}

class Wind {
    constructor(hdg, speed) {
        this.heading = hdg;
        this.speed = speed;
    }
}

export default Metar;