import { Injectable } from '@angular/core';
import { CompleteFlightData } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  arrivals!:any;
  departures!:any;

  constructor(){
    this.arrivals = [
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LEMD",
                        "iata": "MAD",
                        "name": "Madrid"
                    },
                    "scheduledTimeLocal": "2023-08-01 19:00+02:00",
                    "actualTimeLocal": "2023-08-01 20:44+02:00",
                    "runwayTimeLocal": "2023-08-01 21:00+02:00",
                    "scheduledTimeUtc": "2023-08-01 17:00Z",
                    "actualTimeUtc": "2023-08-01 18:44Z",
                    "runwayTimeUtc": "2023-08-01 19:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 17:00Z",
                        "local": "2023-08-01 19:00+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 18:44Z",
                        "local": "2023-08-01 20:44+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:00Z",
                        "local": "2023-08-01 21:00+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "355-359",
                    "gate": "B26",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 20:35+01:00",
                    "actualTimeLocal": "2023-08-01 22:05+01:00",
                    "runwayTimeLocal": "2023-08-01 21:59+01:00",
                    "scheduledTimeUtc": "2023-08-01 19:35Z",
                    "actualTimeUtc": "2023-08-01 21:05Z",
                    "runwayTimeUtc": "2023-08-01 20:59Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:35Z",
                        "local": "2023-08-01 20:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:05Z",
                        "local": "2023-08-01 22:05+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:59Z",
                        "local": "2023-08-01 21:59+01:00"
                    },
                    "terminal": "1",
                    "gate": "109",
                    "baggageBelt": "7",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 7157",
                "callSign": "RYR27NW",
                "status": "Arrived",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-EVF",
                    "modeS": "4CA9CD",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/british_airways.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGBB",
                        "iata": "BHX",
                        "name": "Birmingham"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:45+01:00",
                    "actualTimeLocal": "2023-08-01 21:05+01:00",
                    "runwayTimeLocal": "2023-08-01 21:23+01:00",
                    "scheduledTimeUtc": "2023-08-01 19:45Z",
                    "actualTimeUtc": "2023-08-01 20:05Z",
                    "runwayTimeUtc": "2023-08-01 20:23Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 20:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:05Z",
                        "local": "2023-08-01 21:05+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:23Z",
                        "local": "2023-08-01 21:23+01:00"
                    },
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 21:45+01:00",
                    "actualTimeLocal": "2023-08-01 22:10+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:45Z",
                    "actualTimeUtc": "2023-08-01 21:10Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:45Z",
                        "local": "2023-08-01 21:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:10Z",
                        "local": "2023-08-01 22:10+01:00"
                    },
                    "terminal": "2",
                    "gate": "416",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "BA 2107",
                "status": "Delayed",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "British Airways",
                    "iata": "BA",
                    "icao": "BAW"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGBB",
                        "iata": "BHX",
                        "name": "Birmingham"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:45+01:00",
                    "actualTimeLocal": "2023-08-01 21:05+01:00",
                    "runwayTimeLocal": "2023-08-01 21:23+01:00",
                    "scheduledTimeUtc": "2023-08-01 19:45Z",
                    "actualTimeUtc": "2023-08-01 20:05Z",
                    "runwayTimeUtc": "2023-08-01 20:23Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 20:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:05Z",
                        "local": "2023-08-01 21:05+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:23Z",
                        "local": "2023-08-01 21:23+01:00"
                    },
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 21:45+01:00",
                    "actualTimeLocal": "2023-08-01 22:10+01:00",
                    "runwayTimeLocal": "2023-08-01 22:03+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:45Z",
                    "actualTimeUtc": "2023-08-01 21:10Z",
                    "runwayTimeUtc": "2023-08-01 21:03Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:45Z",
                        "local": "2023-08-01 21:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:10Z",
                        "local": "2023-08-01 22:10+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 21:03Z",
                        "local": "2023-08-01 22:03+01:00"
                    },
                    "terminal": "2",
                    "gate": "416",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 277",
                "callSign": "EIN27G",
                "status": "Arrived",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DER",
                    "modeS": "4CA2CB",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGSS",
                        "iata": "STN",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 19:50+01:00",
                    "actualTimeLocal": "2023-08-01 19:50+01:00",
                    "runwayTimeLocal": "2023-08-01 21:48+01:00",
                    "scheduledTimeUtc": "2023-08-01 18:50Z",
                    "actualTimeUtc": "2023-08-01 18:50Z",
                    "runwayTimeUtc": "2023-08-01 20:48Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 18:50Z",
                        "local": "2023-08-01 19:50+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 18:50Z",
                        "local": "2023-08-01 19:50+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:48Z",
                        "local": "2023-08-01 21:48+01:00"
                    },
                    "terminal": "1",
                    "gate": "48",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 21:10+01:00",
                    "actualTimeLocal": "2023-08-01 23:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:10Z",
                    "actualTimeUtc": "2023-08-01 22:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:10Z",
                        "local": "2023-08-01 21:10+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "terminal": "1",
                    "gate": "106",
                    "baggageBelt": "8",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 289",
                "callSign": "RYR51JX",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-EMH",
                    "modeS": "4CA84F",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                },
                "location": {
                    "pressureAltFt": 36025,
                    "pressureAltitude": {
                        "meter": 10980.42,
                        "km": 10.98,
                        "mile": 6.82,
                        "nm": 5.93,
                        "feet": 36025
                    },
                    "altitude": {
                        "meter": 10851.79,
                        "km": 10.85,
                        "mile": 6.74,
                        "nm": 5.86,
                        "feet": 35603
                    },
                    "pressure": {
                        "hPa": 998.92,
                        "inHg": 29.5,
                        "mmHg": 749.25
                    },
                    "gsKt": 356,
                    "groundSpeed": {
                        "kt": 356,
                        "kmPerHour": 659,
                        "miPerHour": 410,
                        "meterPerSecond": 183
                    },
                    "trackDeg": 298,
                    "trueTrack": {
                        "deg": 298.1,
                        "rad": 5.20282660672154
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 51.84288,
                    "lon": -2.173584
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGLL",
                        "iata": "LHR",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:00+01:00",
                    "actualTimeLocal": "2023-08-01 21:22+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:22Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 21:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:22Z",
                        "local": "2023-08-01 21:22+01:00"
                    },
                    "terminal": "5",
                    "checkInDesk": "D",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:20+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:20Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "terminal": "1",
                    "gate": "VCC4",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "AA 6772",
                "status": "Expected",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320 NEO"
                },
                "airline": {
                    "name": "American",
                    "iata": "AA",
                    "icao": "AAL"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LFPG",
                        "iata": "CDG",
                        "name": "Paris"
                    },
                    "quality": []
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:45+01:00",
                    "actualTimeLocal": "2023-08-01 23:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:45Z",
                    "actualTimeUtc": "2023-08-01 22:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:45Z",
                        "local": "2023-08-01 22:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "terminal": "2",
                    "gate": "BUS",
                    "baggageBelt": "6",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "B6 6829",
                "status": "Delayed",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "JetBlue Airways",
                    "iata": "B6",
                    "icao": "JBU"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LIRF",
                        "iata": "FCO",
                        "name": "Rome"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:25+02:00",
                    "actualTimeLocal": "2023-08-01 20:25+02:00",
                    "scheduledTimeUtc": "2023-08-01 18:25Z",
                    "actualTimeUtc": "2023-08-01 18:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 18:25Z",
                        "local": "2023-08-01 20:25+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 18:25Z",
                        "local": "2023-08-01 20:25+02:00"
                    },
                    "terminal": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:35+01:00",
                    "actualTimeLocal": "2023-08-01 22:55+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:35Z",
                    "actualTimeUtc": "2023-08-01 21:55Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:35Z",
                        "local": "2023-08-01 22:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:55Z",
                        "local": "2023-08-01 22:55+01:00"
                    },
                    "terminal": "2",
                    "gate": "BUS",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "B6 6837",
                "status": "Delayed",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "JetBlue Airways",
                    "iata": "B6",
                    "icao": "JBU"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EHAM",
                        "iata": "AMS",
                        "name": "Amsterdam"
                    },
                    "quality": []
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:40+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:40Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:40Z",
                        "local": "2023-08-01 22:40+01:00"
                    },
                    "terminal": "2",
                    "gate": "418",
                    "baggageBelt": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "B6 6881",
                "status": "Delayed",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "JetBlue Airways",
                    "iata": "B6",
                    "icao": "JBU"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/british_airways.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGKK",
                        "iata": "LGW",
                        "name": "London"
                    },
                    "quality": []
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:55+01:00",
                    "actualTimeLocal": "2023-08-01 23:50+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:55Z",
                    "actualTimeUtc": "2023-08-01 22:50Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:55Z",
                        "local": "2023-08-01 22:55+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:50Z",
                        "local": "2023-08-01 23:50+01:00"
                    },
                    "terminal": "2",
                    "gate": "303",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "BA 5919",
                "status": "Delayed",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "British Airways",
                    "iata": "BA",
                    "icao": "BAW"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/british_airways.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGLL",
                        "iata": "LHR",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:10+01:00",
                    "actualTimeLocal": "2023-08-01 21:27+01:00",
                    "runwayTimeLocal": "2023-08-01 21:22+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:10Z",
                    "actualTimeUtc": "2023-08-01 20:27Z",
                    "runwayTimeUtc": "2023-08-01 20:22Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:10Z",
                        "local": "2023-08-01 21:10+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:27Z",
                        "local": "2023-08-01 21:27+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:22Z",
                        "local": "2023-08-01 21:22+01:00"
                    },
                    "terminal": "2",
                    "checkInDesk": "C",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:30+01:00",
                    "actualTimeLocal": "2023-08-01 22:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:30Z",
                    "actualTimeUtc": "2023-08-01 21:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:30Z",
                        "local": "2023-08-01 22:30+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:30Z",
                        "local": "2023-08-01 22:30+01:00"
                    },
                    "terminal": "2",
                    "gate": "412",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "BA 5971",
                "callSign": "BAW826Q",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "G-EUUX",
                    "modeS": "405A46",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "British Airways",
                    "iata": "BA",
                    "icao": "BAW"
                },
                "location": {
                    "pressureAltFt": 3525,
                    "pressureAltitude": {
                        "meter": 1074.42,
                        "km": 1.07,
                        "mile": 0.67,
                        "nm": 0.58,
                        "feet": 3525
                    },
                    "altitude": {
                        "meter": 891.84,
                        "km": 0.89,
                        "mile": 0.55,
                        "nm": 0.48,
                        "feet": 2926
                    },
                    "pressure": {
                        "hPa": 992.92,
                        "inHg": 29.32,
                        "mmHg": 744.75
                    },
                    "gsKt": 174,
                    "groundSpeed": {
                        "kt": 174,
                        "kmPerHour": 322,
                        "miPerHour": 200,
                        "meterPerSecond": 90
                    },
                    "trackDeg": 69,
                    "trueTrack": {
                        "deg": 68.8,
                        "rad": 1.2007865786353205
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.44658,
                    "lon": -6.5199
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/british_airways.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGLL",
                        "iata": "LHR",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:00+01:00",
                    "actualTimeLocal": "2023-08-01 21:22+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:22Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 21:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:22Z",
                        "local": "2023-08-01 21:22+01:00"
                    },
                    "terminal": "5",
                    "checkInDesk": "D",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:20+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:20Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "terminal": "1",
                    "gate": "VCC4",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "BA 826",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320 NEO"
                },
                "airline": {
                    "name": "British Airways",
                    "iata": "BA",
                    "icao": "BAW"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGLL",
                        "iata": "LHR",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:10+01:00",
                    "actualTimeLocal": "2023-08-01 21:27+01:00",
                    "runwayTimeLocal": "2023-08-01 21:28+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:10Z",
                    "actualTimeUtc": "2023-08-01 20:27Z",
                    "runwayTimeUtc": "2023-08-01 20:28Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:10Z",
                        "local": "2023-08-01 21:10+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:27Z",
                        "local": "2023-08-01 21:27+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:28Z",
                        "local": "2023-08-01 21:28+01:00"
                    },
                    "terminal": "2",
                    "checkInDesk": "C",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:30+01:00",
                    "actualTimeLocal": "2023-08-01 22:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:30Z",
                    "actualTimeUtc": "2023-08-01 21:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:30Z",
                        "local": "2023-08-01 22:30+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:30Z",
                        "local": "2023-08-01 22:30+01:00"
                    },
                    "terminal": "2",
                    "gate": "412",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 183",
                "callSign": "EIN183",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-NSB",
                    "modeS": "4CAD7B",
                    "model": "Airbus A320 NEO"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 12850,
                    "pressureAltitude": {
                        "meter": 3916.68,
                        "km": 3.92,
                        "mile": 2.43,
                        "nm": 2.11,
                        "feet": 12850
                    },
                    "altitude": {
                        "meter": 3734.1,
                        "km": 3.73,
                        "mile": 2.32,
                        "nm": 2.02,
                        "feet": 12251
                    },
                    "pressure": {
                        "hPa": 992.92,
                        "inHg": 29.32,
                        "mmHg": 744.75
                    },
                    "gsKt": 313,
                    "groundSpeed": {
                        "kt": 313,
                        "kmPerHour": 580,
                        "miPerHour": 360,
                        "meterPerSecond": 161
                    },
                    "trackDeg": 294,
                    "trueTrack": {
                        "deg": 293.5,
                        "rad": 5.122541354603357
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.14325,
                    "lon": -5.829498
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGKK",
                        "iata": "LGW",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:35+01:00",
                    "actualTimeLocal": "2023-08-01 21:35+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:35Z",
                    "actualTimeUtc": "2023-08-01 20:35Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:35Z",
                        "local": "2023-08-01 21:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:35Z",
                        "local": "2023-08-01 21:35+01:00"
                    },
                    "terminal": "S",
                    "gate": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:55+01:00",
                    "actualTimeLocal": "2023-08-01 23:50+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:55Z",
                    "actualTimeUtc": "2023-08-01 22:50Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:55Z",
                        "local": "2023-08-01 22:55+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:50Z",
                        "local": "2023-08-01 23:50+01:00"
                    },
                    "terminal": "2",
                    "gate": "303",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 249",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LIRF",
                        "iata": "FCO",
                        "name": "Rome"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:25+02:00",
                    "actualTimeLocal": "2023-08-01 20:25+02:00",
                    "runwayTimeLocal": "2023-08-01 20:47+02:00",
                    "scheduledTimeUtc": "2023-08-01 18:25Z",
                    "actualTimeUtc": "2023-08-01 18:25Z",
                    "runwayTimeUtc": "2023-08-01 18:47Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 18:25Z",
                        "local": "2023-08-01 20:25+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 18:25Z",
                        "local": "2023-08-01 20:25+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 18:47Z",
                        "local": "2023-08-01 20:47+02:00"
                    },
                    "terminal": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:35+01:00",
                    "actualTimeLocal": "2023-08-01 22:55+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:35Z",
                    "actualTimeUtc": "2023-08-01 21:55Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:35Z",
                        "local": "2023-08-01 22:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:55Z",
                        "local": "2023-08-01 22:55+01:00"
                    },
                    "terminal": "2",
                    "gate": "BUS",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 407",
                "callSign": "EIN40W",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DVK",
                    "modeS": "4CA8BD",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 36000,
                    "pressureAltitude": {
                        "meter": 10972.8,
                        "km": 10.97,
                        "mile": 6.82,
                        "nm": 5.92,
                        "feet": 36000
                    },
                    "altitude": {
                        "meter": 10844.17,
                        "km": 10.84,
                        "mile": 6.74,
                        "nm": 5.86,
                        "feet": 35578
                    },
                    "pressure": {
                        "hPa": 998.92,
                        "inHg": 29.5,
                        "mmHg": 749.25
                    },
                    "gsKt": 374,
                    "groundSpeed": {
                        "kt": 374,
                        "kmPerHour": 693,
                        "miPerHour": 430,
                        "meterPerSecond": 192
                    },
                    "trackDeg": 297,
                    "trueTrack": {
                        "deg": 297.3,
                        "rad": 5.188863653126255
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 52.042603,
                    "lon": -2.759399
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LFPG",
                        "iata": "CDG",
                        "name": "Paris"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:00+02:00",
                    "actualTimeLocal": "2023-08-01 22:26+02:00",
                    "runwayTimeLocal": "2023-08-01 22:26+02:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:26Z",
                    "runwayTimeUtc": "2023-08-01 20:26Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 22:00+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:26Z",
                        "local": "2023-08-01 22:26+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:26Z",
                        "local": "2023-08-01 22:26+02:00"
                    },
                    "terminal": "1",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:45+01:00",
                    "actualTimeLocal": "2023-08-01 23:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:45Z",
                    "actualTimeUtc": "2023-08-01 22:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:45Z",
                        "local": "2023-08-01 22:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "terminal": "2",
                    "gate": "BUS",
                    "baggageBelt": "6",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 529",
                "callSign": "EIN529",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-GAL",
                    "modeS": "4CA836",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 34000,
                    "pressureAltitude": {
                        "meter": 10363.2,
                        "km": 10.36,
                        "mile": 6.44,
                        "nm": 5.6,
                        "feet": 34000
                    },
                    "altitude": {
                        "meter": 10225.74,
                        "km": 10.23,
                        "mile": 6.35,
                        "nm": 5.52,
                        "feet": 33549
                    },
                    "pressure": {
                        "hPa": 997.92,
                        "inHg": 29.47,
                        "mmHg": 748.5
                    },
                    "gsKt": 356,
                    "groundSpeed": {
                        "kt": 356,
                        "kmPerHour": 659,
                        "miPerHour": 410,
                        "meterPerSecond": 183
                    },
                    "trackDeg": 291,
                    "trueTrack": {
                        "deg": 290.7,
                        "rad": 5.073672348600403
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 51.626312,
                    "lon": -1.472748
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EHAM",
                        "iata": "AMS",
                        "name": "Amsterdam"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:40+02:00",
                    "actualTimeLocal": "2023-08-01 22:05+02:00",
                    "runwayTimeLocal": "2023-08-01 22:16+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:40Z",
                    "actualTimeUtc": "2023-08-01 20:05Z",
                    "runwayTimeUtc": "2023-08-01 20:16Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:40Z",
                        "local": "2023-08-01 21:40+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:05Z",
                        "local": "2023-08-01 22:05+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:16Z",
                        "local": "2023-08-01 22:16+02:00"
                    },
                    "terminal": "3",
                    "checkInDesk": "17",
                    "gate": "D22",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:40+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:40Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:40Z",
                        "local": "2023-08-01 22:40+01:00"
                    },
                    "terminal": "2",
                    "gate": "418",
                    "baggageBelt": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 611",
                "callSign": "EIN611",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DVN",
                    "modeS": "4CA947",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 35975,
                    "pressureAltitude": {
                        "meter": 10965.18,
                        "km": 10.97,
                        "mile": 6.81,
                        "nm": 5.92,
                        "feet": 35975
                    },
                    "altitude": {
                        "meter": 10854.54,
                        "km": 10.85,
                        "mile": 6.74,
                        "nm": 5.86,
                        "feet": 35612
                    },
                    "pressure": {
                        "hPa": 1000.92,
                        "inHg": 29.56,
                        "mmHg": 750.75
                    },
                    "gsKt": 366,
                    "groundSpeed": {
                        "kt": 366,
                        "kmPerHour": 678,
                        "miPerHour": 421,
                        "meterPerSecond": 188
                    },
                    "trackDeg": 279,
                    "trueTrack": {
                        "deg": 278.6,
                        "rad": 4.862487402582645
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.63759,
                    "lon": -3.163055
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LEPA",
                        "iata": "PMI",
                        "name": "Palma De Mallorca"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:55+02:00",
                    "actualTimeLocal": "2023-08-01 20:55+02:00",
                    "runwayTimeLocal": "2023-08-01 21:07+02:00",
                    "scheduledTimeUtc": "2023-08-01 18:55Z",
                    "actualTimeUtc": "2023-08-01 18:55Z",
                    "runwayTimeUtc": "2023-08-01 19:07Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 18:55Z",
                        "local": "2023-08-01 20:55+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 18:55Z",
                        "local": "2023-08-01 20:55+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:07Z",
                        "local": "2023-08-01 21:07+02:00"
                    },
                    "terminal": "N",
                    "checkInDesk": "138-140",
                    "gate": "A20",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:45+01:00",
                    "actualTimeLocal": "2023-08-01 22:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:45Z",
                    "actualTimeUtc": "2023-08-01 21:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:45Z",
                        "local": "2023-08-01 22:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:30Z",
                        "local": "2023-08-01 22:30+01:00"
                    },
                    "terminal": "2",
                    "gate": "407",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 737",
                "callSign": "EIN737",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DVI",
                    "modeS": "4CA6C4",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 36000,
                    "pressureAltitude": {
                        "meter": 10972.8,
                        "km": 10.97,
                        "mile": 6.82,
                        "nm": 5.92,
                        "feet": 36000
                    },
                    "altitude": {
                        "meter": 10808.21,
                        "km": 10.81,
                        "mile": 6.72,
                        "nm": 5.84,
                        "feet": 35460
                    },
                    "pressure": {
                        "hPa": 994.92,
                        "inHg": 29.38,
                        "mmHg": 746.25
                    },
                    "gsKt": 417,
                    "groundSpeed": {
                        "kt": 417,
                        "kmPerHour": 772,
                        "miPerHour": 480,
                        "meterPerSecond": 215
                    },
                    "trackDeg": 335,
                    "trueTrack": {
                        "deg": 335,
                        "rad": 5.8468529941810035
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 51.38436,
                    "lon": -6.259613
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGLL",
                        "iata": "LHR",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:00+01:00",
                    "actualTimeLocal": "2023-08-01 21:22+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:22Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 21:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:22Z",
                        "local": "2023-08-01 21:22+01:00"
                    },
                    "terminal": "5",
                    "checkInDesk": "D",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:20+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:20Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "terminal": "1",
                    "gate": "VCC4",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 8326",
                "status": "Expected",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320 NEO"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LEBL",
                        "iata": "BCN",
                        "name": "Barcelona"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:05+02:00",
                    "actualTimeLocal": "2023-08-01 20:47+02:00",
                    "runwayTimeLocal": "2023-08-01 21:04+02:00",
                    "scheduledTimeUtc": "2023-08-01 18:05Z",
                    "actualTimeUtc": "2023-08-01 18:47Z",
                    "runwayTimeUtc": "2023-08-01 19:04Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 18:05Z",
                        "local": "2023-08-01 20:05+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 18:47Z",
                        "local": "2023-08-01 20:47+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:04Z",
                        "local": "2023-08-01 21:04+02:00"
                    },
                    "terminal": "2",
                    "checkInDesk": "B62-B71",
                    "gate": "W45",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 21:50+01:00",
                    "actualTimeLocal": "2023-08-01 22:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:50Z",
                    "actualTimeUtc": "2023-08-01 21:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:50Z",
                        "local": "2023-08-01 21:50+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "terminal": "1",
                    "gate": "108",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 6874",
                "callSign": "RYR16LD",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DYZ",
                    "modeS": "4CA6FD",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                },
                "location": {
                    "pressureAltFt": 8800,
                    "pressureAltitude": {
                        "meter": 2682.24,
                        "km": 2.68,
                        "mile": 1.67,
                        "nm": 1.45,
                        "feet": 8800
                    },
                    "altitude": {
                        "meter": 2499.66,
                        "km": 2.5,
                        "mile": 1.55,
                        "nm": 1.35,
                        "feet": 8201
                    },
                    "pressure": {
                        "hPa": 992.92,
                        "inHg": 29.32,
                        "mmHg": 744.75
                    },
                    "gsKt": 340,
                    "groundSpeed": {
                        "kt": 340,
                        "kmPerHour": 630,
                        "miPerHour": 391,
                        "meterPerSecond": 175
                    },
                    "trackDeg": 332,
                    "trueTrack": {
                        "deg": 331.5,
                        "rad": 5.785766470361202
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.183853,
                    "lon": -6.448517
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LKPR",
                        "iata": "PRG",
                        "name": "Prague"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:05+02:00",
                    "actualTimeLocal": "2023-08-01 21:48+02:00",
                    "runwayTimeLocal": "2023-08-01 21:56+02:00",
                    "scheduledTimeUtc": "2023-08-01 18:05Z",
                    "actualTimeUtc": "2023-08-01 19:48Z",
                    "runwayTimeUtc": "2023-08-01 19:56Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 18:05Z",
                        "local": "2023-08-01 20:05+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:48Z",
                        "local": "2023-08-01 21:48+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:56Z",
                        "local": "2023-08-01 21:56+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "122",
                    "gate": "B10",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 21:40+01:00",
                    "actualTimeLocal": "2023-08-01 23:05+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:40Z",
                    "actualTimeUtc": "2023-08-01 22:05Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:40Z",
                        "local": "2023-08-01 21:40+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:05Z",
                        "local": "2023-08-01 23:05+01:00"
                    },
                    "terminal": "1",
                    "gate": "VCC1",
                    "baggageBelt": "10",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 7327",
                "callSign": "RYR83PW",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-EFH",
                    "modeS": "4CA763",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                },
                "location": {
                    "pressureAltFt": 36000,
                    "pressureAltitude": {
                        "meter": 10972.8,
                        "km": 10.97,
                        "mile": 6.82,
                        "nm": 5.92,
                        "feet": 36000
                    },
                    "altitude": {
                        "meter": 10853.32,
                        "km": 10.85,
                        "mile": 6.74,
                        "nm": 5.86,
                        "feet": 35608
                    },
                    "pressure": {
                        "hPa": 999.92,
                        "inHg": 29.53,
                        "mmHg": 750
                    },
                    "gsKt": 357,
                    "groundSpeed": {
                        "kt": 357,
                        "kmPerHour": 661,
                        "miPerHour": 411,
                        "meterPerSecond": 184
                    },
                    "trackDeg": 280,
                    "trueTrack": {
                        "deg": 280.4,
                        "rad": 4.8939031160656565
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 52.947968,
                    "lon": 3.605194
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LERS",
                        "iata": "REU",
                        "name": "Reus"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:05+02:00",
                    "actualTimeLocal": "2023-08-01 21:47+02:00",
                    "runwayTimeLocal": "2023-08-01 21:47+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:05Z",
                    "actualTimeUtc": "2023-08-01 19:47Z",
                    "runwayTimeUtc": "2023-08-01 19:47Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:05Z",
                        "local": "2023-08-01 21:05+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:47Z",
                        "local": "2023-08-01 21:47+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:47Z",
                        "local": "2023-08-01 21:47+02:00"
                    },
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:40+01:00",
                    "actualTimeLocal": "2023-08-01 23:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:40Z",
                    "actualTimeUtc": "2023-08-01 22:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:40Z",
                        "local": "2023-08-01 22:40+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:25Z",
                        "local": "2023-08-01 23:25+01:00"
                    },
                    "terminal": "1",
                    "gate": "102",
                    "baggageBelt": "5",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 1115",
                "callSign": "RYR45HY",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DCX",
                    "modeS": "4CA24E",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                },
                "location": {
                    "pressureAltFt": 38000,
                    "pressureAltitude": {
                        "meter": 11582.4,
                        "km": 11.58,
                        "mile": 7.2,
                        "nm": 6.25,
                        "feet": 38000
                    },
                    "altitude": {
                        "meter": 11471.76,
                        "km": 11.47,
                        "mile": 7.13,
                        "nm": 6.19,
                        "feet": 37637
                    },
                    "pressure": {
                        "hPa": 1000.92,
                        "inHg": 29.56,
                        "mmHg": 750.75
                    },
                    "gsKt": 398,
                    "groundSpeed": {
                        "kt": 398,
                        "kmPerHour": 737,
                        "miPerHour": 458,
                        "meterPerSecond": 205
                    },
                    "trackDeg": 322,
                    "trueTrack": {
                        "deg": 322.2,
                        "rad": 5.623451062978617
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 48.675568,
                    "lon": -4.089508
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGKK",
                        "iata": "LGW",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 20:35+01:00",
                    "actualTimeLocal": "2023-08-01 20:35+01:00",
                    "runwayTimeLocal": "2023-08-01 20:19+01:00",
                    "scheduledTimeUtc": "2023-08-01 19:35Z",
                    "actualTimeUtc": "2023-08-01 19:35Z",
                    "runwayTimeUtc": "2023-08-01 19:19Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:35Z",
                        "local": "2023-08-01 20:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:35Z",
                        "local": "2023-08-01 20:35+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:19Z",
                        "local": "2023-08-01 20:19+01:00"
                    },
                    "terminal": "S",
                    "gate": "5",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:05+01:00",
                    "actualTimeLocal": "2023-08-01 22:05+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:05Z",
                    "actualTimeUtc": "2023-08-01 21:05Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:05Z",
                        "local": "2023-08-01 22:05+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:05Z",
                        "local": "2023-08-01 22:05+01:00"
                    },
                    "terminal": "1",
                    "gate": "103",
                    "baggageBelt": "5",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 127",
                "callSign": "RYR3TD",
                "status": "Arrived",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DHC",
                    "modeS": "4CA258",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LIMC",
                        "iata": "MXP",
                        "name": "Milan"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:05+02:00",
                    "actualTimeLocal": "2023-08-01 21:48+02:00",
                    "runwayTimeLocal": "2023-08-01 21:48+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:05Z",
                    "actualTimeUtc": "2023-08-01 19:48Z",
                    "runwayTimeUtc": "2023-08-01 19:48Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:05Z",
                        "local": "2023-08-01 21:05+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:48Z",
                        "local": "2023-08-01 21:48+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:48Z",
                        "local": "2023-08-01 21:48+02:00"
                    },
                    "terminal": "1",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:40+01:00",
                    "actualTimeLocal": "2023-08-01 23:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:40Z",
                    "actualTimeUtc": "2023-08-01 22:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:40Z",
                        "local": "2023-08-01 22:40+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:25Z",
                        "local": "2023-08-01 23:25+01:00"
                    },
                    "terminal": "1",
                    "gate": "103",
                    "baggageBelt": "7",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 1455",
                "callSign": "RYR56SP",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DWY",
                    "modeS": "4CA625",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                },
                "location": {
                    "pressureAltFt": 38000,
                    "pressureAltitude": {
                        "meter": 11582.4,
                        "km": 11.58,
                        "mile": 7.2,
                        "nm": 6.25,
                        "feet": 38000
                    },
                    "altitude": {
                        "meter": 11480.9,
                        "km": 11.48,
                        "mile": 7.13,
                        "nm": 6.2,
                        "feet": 37667
                    },
                    "pressure": {
                        "hPa": 1001.92,
                        "inHg": 29.59,
                        "mmHg": 751.5
                    },
                    "gsKt": 370,
                    "groundSpeed": {
                        "kt": 370,
                        "kmPerHour": 685,
                        "miPerHour": 426,
                        "meterPerSecond": 190
                    },
                    "trackDeg": 299,
                    "trueTrack": {
                        "deg": 299,
                        "rad": 5.218534463463045
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 51.015335,
                    "lon": 0.336568
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGCC",
                        "iata": "MAN",
                        "name": "Manchester"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:25+01:00",
                    "actualTimeLocal": "2023-08-01 21:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:25Z",
                    "actualTimeUtc": "2023-08-01 20:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:25Z",
                        "local": "2023-08-01 21:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:25Z",
                        "local": "2023-08-01 21:25+01:00"
                    },
                    "terminal": "3",
                    "gate": "51",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 23:20+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 22:20Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:20Z",
                        "local": "2023-08-01 23:20+01:00"
                    },
                    "terminal": "1",
                    "gate": "1XN",
                    "baggageBelt": "6",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 1557",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EHAM",
                        "iata": "AMS",
                        "name": "Amsterdam"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:00+02:00",
                    "actualTimeLocal": "2023-08-01 22:35+02:00",
                    "runwayTimeLocal": "2023-08-01 22:47+02:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:35Z",
                    "runwayTimeUtc": "2023-08-01 20:47Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 22:00+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:35Z",
                        "local": "2023-08-01 22:35+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:47Z",
                        "local": "2023-08-01 22:47+02:00"
                    },
                    "terminal": "3",
                    "checkInDesk": "30",
                    "gate": "H2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:40+01:00",
                    "actualTimeLocal": "2023-08-01 23:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:40Z",
                    "actualTimeUtc": "2023-08-01 22:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:40Z",
                        "local": "2023-08-01 22:40+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:30Z",
                        "local": "2023-08-01 23:30+01:00"
                    },
                    "terminal": "1",
                    "gate": "103",
                    "baggageBelt": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 3103",
                "callSign": "RYR7BW",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DLH",
                    "modeS": "4CA2D4",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                },
                "location": {
                    "pressureAltFt": 38000,
                    "pressureAltitude": {
                        "meter": 11582.4,
                        "km": 11.58,
                        "mile": 7.2,
                        "nm": 6.25,
                        "feet": 38000
                    },
                    "altitude": {
                        "meter": 11462.92,
                        "km": 11.46,
                        "mile": 7.12,
                        "nm": 6.19,
                        "feet": 37608
                    },
                    "pressure": {
                        "hPa": 999.92,
                        "inHg": 29.53,
                        "mmHg": 750
                    },
                    "gsKt": 365,
                    "groundSpeed": {
                        "kt": 365,
                        "kmPerHour": 676,
                        "miPerHour": 420,
                        "meterPerSecond": 188
                    },
                    "trackDeg": 280,
                    "trueTrack": {
                        "deg": 280.4,
                        "rad": 4.8939031160656565
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.12361,
                    "lon": 2.12813
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGGW",
                        "iata": "LTN",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:00Z",
                        "local": "2023-08-01 22:00+01:00"
                    },
                    "checkInDesk": "05-07",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:35+01:00",
                    "actualTimeLocal": "2023-08-01 23:10+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:35Z",
                    "actualTimeUtc": "2023-08-01 22:10Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:35Z",
                        "local": "2023-08-01 22:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:10Z",
                        "local": "2023-08-01 23:10+01:00"
                    },
                    "terminal": "1",
                    "gate": "110",
                    "baggageBelt": "9",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 341",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGPH",
                        "iata": "EDI",
                        "name": "Edinburgh"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:25+01:00",
                    "actualTimeLocal": "2023-08-01 21:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:25Z",
                    "actualTimeUtc": "2023-08-01 20:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:25Z",
                        "local": "2023-08-01 21:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:25Z",
                        "local": "2023-08-01 21:25+01:00"
                    },
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:30+01:00",
                    "actualTimeLocal": "2023-08-01 23:05+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:30Z",
                    "actualTimeUtc": "2023-08-01 22:05Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:30Z",
                        "local": "2023-08-01 22:30+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:05Z",
                        "local": "2023-08-01 23:05+01:00"
                    },
                    "terminal": "1",
                    "gate": "104",
                    "baggageBelt": "7",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 819",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EHAM",
                        "iata": "AMS",
                        "name": "Amsterdam"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:45+02:00",
                    "actualTimeLocal": "2023-08-01 21:51+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:45Z",
                    "actualTimeUtc": "2023-08-01 19:51Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 21:45+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:51Z",
                        "local": "2023-08-01 21:51+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "6-8",
                    "gate": "D25",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 22:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 21:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "terminal": "1",
                    "gate": "BUS",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "G3 5566",
                "status": "Expected",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "reg": "PH-EZO",
                    "modeS": "484C53",
                    "model": "Embraer 190"
                },
                "airline": {
                    "name": "Gol",
                    "iata": "G3",
                    "icao": "GLO"
                },
                "location": {
                    "pressureAltFt": 15300,
                    "pressureAltitude": {
                        "meter": 4663.44,
                        "km": 4.66,
                        "mile": 2.9,
                        "nm": 2.52,
                        "feet": 15300
                    },
                    "altitude": {
                        "meter": 4480.86,
                        "km": 4.48,
                        "mile": 2.78,
                        "nm": 2.42,
                        "feet": 14701
                    },
                    "pressure": {
                        "hPa": 992.92,
                        "inHg": 29.32,
                        "mmHg": 744.75
                    },
                    "gsKt": 309,
                    "groundSpeed": {
                        "kt": 309,
                        "kmPerHour": 572,
                        "miPerHour": 356,
                        "meterPerSecond": 159
                    },
                    "trackDeg": 259,
                    "trueTrack": {
                        "deg": 258.8,
                        "rad": 4.516911891108437
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.627472,
                    "lon": -5.90036
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/klm.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EHAM",
                        "iata": "AMS",
                        "name": "Amsterdam"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:45+02:00",
                    "actualTimeLocal": "2023-08-01 21:51+02:00",
                    "runwayTimeLocal": "2023-08-01 21:59+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:45Z",
                    "actualTimeUtc": "2023-08-01 19:51Z",
                    "runwayTimeUtc": "2023-08-01 19:59Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 21:45+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:51Z",
                        "local": "2023-08-01 21:51+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:59Z",
                        "local": "2023-08-01 21:59+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "6-8",
                    "gate": "D25",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 22:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 21:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "terminal": "1",
                    "gate": "BUS",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "KL 939",
                "callSign": "KLM25Q",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "PH-EZO",
                    "modeS": "484C53",
                    "model": "Embraer 190"
                },
                "airline": {
                    "name": "KLM",
                    "iata": "KL",
                    "icao": "KLM"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/kenya_airways.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGLL",
                        "iata": "LHR",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:00+01:00",
                    "actualTimeLocal": "2023-08-01 21:22+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:22Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 21:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:22Z",
                        "local": "2023-08-01 21:22+01:00"
                    },
                    "terminal": "5",
                    "checkInDesk": "D",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:20+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:20Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "terminal": "1",
                    "gate": "VCC4",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "KQ 4010",
                "status": "Expected",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320 NEO"
                },
                "airline": {
                    "name": "Kenya Airways",
                    "iata": "KQ",
                    "icao": "KQA"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/kenya_airways.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EHAM",
                        "iata": "AMS",
                        "name": "Amsterdam"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:45+02:00",
                    "actualTimeLocal": "2023-08-01 21:51+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:45Z",
                    "actualTimeUtc": "2023-08-01 19:51Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 21:45+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:51Z",
                        "local": "2023-08-01 21:51+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "6-8",
                    "gate": "D25",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 22:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 21:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "terminal": "1",
                    "gate": "BUS",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "KQ 939",
                "status": "Expected",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "reg": "PH-EZO",
                    "modeS": "484C53",
                    "model": "Embraer 190"
                },
                "airline": {
                    "name": "Kenya Airways",
                    "iata": "KQ",
                    "icao": "KQA"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/lufthansa.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EDDF",
                        "iata": "FRA",
                        "name": "Frankfurt-am-Main"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:10+02:00",
                    "actualTimeLocal": "2023-08-01 21:10+02:00",
                    "runwayTimeLocal": "2023-08-01 21:26+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:10Z",
                    "actualTimeUtc": "2023-08-01 19:10Z",
                    "runwayTimeUtc": "2023-08-01 19:26Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:10Z",
                        "local": "2023-08-01 21:10+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:10Z",
                        "local": "2023-08-01 21:10+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:26Z",
                        "local": "2023-08-01 21:26+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "259-333",
                    "gate": "B30",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:15+01:00",
                    "actualTimeLocal": "2023-08-01 22:15+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:15Z",
                    "actualTimeUtc": "2023-08-01 21:15Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:15Z",
                        "local": "2023-08-01 22:15+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:15Z",
                        "local": "2023-08-01 22:15+01:00"
                    },
                    "terminal": "1",
                    "gate": "304",
                    "baggageBelt": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "LH 982",
                "callSign": "DLH6PN",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "D-AISV",
                    "modeS": "3C6676",
                    "model": "Airbus A321"
                },
                "airline": {
                    "name": "Lufthansa",
                    "iata": "LH",
                    "icao": "DLH"
                },
                "location": {
                    "pressureAltFt": 11025,
                    "pressureAltitude": {
                        "meter": 3360.42,
                        "km": 3.36,
                        "mile": 2.09,
                        "nm": 1.81,
                        "feet": 11025
                    },
                    "altitude": {
                        "meter": 3177.84,
                        "km": 3.18,
                        "mile": 1.97,
                        "nm": 1.72,
                        "feet": 10426
                    },
                    "pressure": {
                        "hPa": 992.92,
                        "inHg": 29.32,
                        "mmHg": 744.75
                    },
                    "gsKt": 324,
                    "groundSpeed": {
                        "kt": 324,
                        "kmPerHour": 600,
                        "miPerHour": 373,
                        "meterPerSecond": 167
                    },
                    "trackDeg": 293,
                    "trueTrack": {
                        "deg": 293.2,
                        "rad": 5.117305579900261
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.207382,
                    "lon": -6.075592
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/swiss.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LSZH",
                        "iata": "ZRH",
                        "name": "Zurich"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:05+02:00",
                    "actualTimeLocal": "2023-08-01 21:30+02:00",
                    "runwayTimeLocal": "2023-08-01 21:46+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:05Z",
                    "actualTimeUtc": "2023-08-01 19:30Z",
                    "runwayTimeUtc": "2023-08-01 19:46Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:05Z",
                        "local": "2023-08-01 21:05+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:30Z",
                        "local": "2023-08-01 21:30+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:46Z",
                        "local": "2023-08-01 21:46+02:00"
                    },
                    "checkInDesk": "1",
                    "gate": "D41",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 23:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 22:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "terminal": "1",
                    "gate": "BUS",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "LX 406",
                "callSign": "SWR878C",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "HB-JCA",
                    "modeS": "4B17F8",
                    "model": "Airbus A220-300"
                },
                "airline": {
                    "name": "SWISS",
                    "iata": "LX",
                    "icao": "SWR"
                },
                "location": {
                    "pressureAltFt": 36000,
                    "pressureAltitude": {
                        "meter": 10972.8,
                        "km": 10.97,
                        "mile": 6.82,
                        "nm": 5.92,
                        "feet": 36000
                    },
                    "altitude": {
                        "meter": 10853.32,
                        "km": 10.85,
                        "mile": 6.74,
                        "nm": 5.86,
                        "feet": 35608
                    },
                    "pressure": {
                        "hPa": 999.92,
                        "inHg": 29.53,
                        "mmHg": 750
                    },
                    "gsKt": 355,
                    "groundSpeed": {
                        "kt": 355,
                        "kmPerHour": 657,
                        "miPerHour": 409,
                        "meterPerSecond": 183
                    },
                    "trackDeg": 299,
                    "trueTrack": {
                        "deg": 299,
                        "rad": 5.218534463463045
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 51.558517,
                    "lon": -1.25296
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/xiamen_air.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EHAM",
                        "iata": "AMS",
                        "name": "Amsterdam"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:45+02:00",
                    "actualTimeLocal": "2023-08-01 21:51+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:45Z",
                    "actualTimeUtc": "2023-08-01 19:51Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 21:45+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:51Z",
                        "local": "2023-08-01 21:51+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "6-8",
                    "gate": "D25",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 22:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 21:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "terminal": "1",
                    "gate": "BUS",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "MF 9758",
                "status": "Expected",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "reg": "PH-EZO",
                    "modeS": "484C53",
                    "model": "Embraer 190"
                },
                "airline": {
                    "name": "Xiamen",
                    "iata": "MF",
                    "icao": "CXA"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/qatar_airways.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGLL",
                        "iata": "LHR",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:00+01:00",
                    "actualTimeLocal": "2023-08-01 21:22+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:22Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 21:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:22Z",
                        "local": "2023-08-01 21:22+01:00"
                    },
                    "terminal": "5",
                    "checkInDesk": "D",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 22:20+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 21:20Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "terminal": "1",
                    "gate": "VCC4",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "QR 5951",
                "status": "Expected",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320 NEO"
                },
                "airline": {
                    "name": "Qatar Airways",
                    "iata": "QR",
                    "icao": "QTR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGCC",
                        "iata": "MAN",
                        "name": "Manchester"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:00+01:00",
                    "actualTimeLocal": "2023-08-01 21:43+01:00",
                    "runwayTimeLocal": "2023-08-01 21:44+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:43Z",
                    "runwayTimeUtc": "2023-08-01 20:44Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 21:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:43Z",
                        "local": "2023-08-01 21:43+01:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:44Z",
                        "local": "2023-08-01 21:44+01:00"
                    },
                    "terminal": "3",
                    "gate": "52",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 22:00+01:00",
                    "actualTimeLocal": "2023-08-01 22:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:00Z",
                    "actualTimeUtc": "2023-08-01 21:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:00Z",
                        "local": "2023-08-01 22:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:30Z",
                        "local": "2023-08-01 22:30+01:00"
                    },
                    "terminal": "1",
                    "gate": "112",
                    "baggageBelt": "6",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "RK 561",
                "callSign": "RUK95CX",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "G-RUKA",
                    "modeS": "40775C",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair UK",
                    "iata": "RK",
                    "icao": "RUK"
                },
                "location": {
                    "pressureAltFt": 16775,
                    "pressureAltitude": {
                        "meter": 5113.02,
                        "km": 5.11,
                        "mile": 3.18,
                        "nm": 2.76,
                        "feet": 16775
                    },
                    "altitude": {
                        "meter": 4930.44,
                        "km": 4.93,
                        "mile": 3.06,
                        "nm": 2.66,
                        "feet": 16176
                    },
                    "pressure": {
                        "hPa": 992.92,
                        "inHg": 29.32,
                        "mmHg": 744.75
                    },
                    "gsKt": 312,
                    "groundSpeed": {
                        "kt": 312,
                        "kmPerHour": 578,
                        "miPerHour": 359,
                        "meterPerSecond": 161
                    },
                    "trackDeg": 257,
                    "trueTrack": {
                        "deg": 257.4,
                        "rad": 4.492477388106961
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.674026,
                    "lon": -5.545746
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EDDB",
                        "iata": "BER",
                        "name": "Berlin"
                    },
                    "quality": []
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:05+01:00",
                    "actualTimeLocal": "2023-08-01 23:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:05Z",
                    "actualTimeUtc": "2023-08-01 22:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:05Z",
                        "local": "2023-08-01 23:05+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:25Z",
                        "local": "2023-08-01 23:25+01:00"
                    },
                    "terminal": "2",
                    "gate": "BUS",
                    "baggageBelt": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "B6 6877",
                "status": "Delayed",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "JetBlue Airways",
                    "iata": "B6",
                    "icao": "JBU"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EDDB",
                        "iata": "BER",
                        "name": "Berlin"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:45+02:00",
                    "actualTimeLocal": "2023-08-01 21:45+02:00",
                    "runwayTimeLocal": "2023-08-01 22:07+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:45Z",
                    "actualTimeUtc": "2023-08-01 19:45Z",
                    "runwayTimeUtc": "2023-08-01 20:07Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 21:45+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:45Z",
                        "local": "2023-08-01 21:45+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:07Z",
                        "local": "2023-08-01 22:07+02:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "011-012",
                    "gate": "C07",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:05+01:00",
                    "actualTimeLocal": "2023-08-01 23:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:05Z",
                    "actualTimeUtc": "2023-08-01 22:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:05Z",
                        "local": "2023-08-01 23:05+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:25Z",
                        "local": "2023-08-01 23:25+01:00"
                    },
                    "terminal": "2",
                    "gate": "BUS",
                    "baggageBelt": "3",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 337",
                "callSign": "EIN33W",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DVG",
                    "modeS": "4CA63A",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 35975,
                    "pressureAltitude": {
                        "meter": 10965.18,
                        "km": 10.97,
                        "mile": 6.81,
                        "nm": 5.92,
                        "feet": 35975
                    },
                    "altitude": {
                        "meter": 10845.7,
                        "km": 10.85,
                        "mile": 6.74,
                        "nm": 5.86,
                        "feet": 35583
                    },
                    "pressure": {
                        "hPa": 999.92,
                        "inHg": 29.53,
                        "mmHg": 750
                    },
                    "gsKt": 361,
                    "groundSpeed": {
                        "kt": 361,
                        "kmPerHour": 669,
                        "miPerHour": 415,
                        "meterPerSecond": 186
                    },
                    "trackDeg": 280,
                    "trueTrack": {
                        "deg": 279.8,
                        "rad": 4.883431034027247
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 53.094223,
                    "lon": 3.420792
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LEMG",
                        "iata": "AGP",
                        "name": "Málaga"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:25+02:00",
                    "actualTimeLocal": "2023-08-01 21:36+02:00",
                    "runwayTimeLocal": "2023-08-01 21:50+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:25Z",
                    "actualTimeUtc": "2023-08-01 19:36Z",
                    "runwayTimeUtc": "2023-08-01 19:50Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:25Z",
                        "local": "2023-08-01 21:25+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 19:36Z",
                        "local": "2023-08-01 21:36+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 19:50Z",
                        "local": "2023-08-01 21:50+02:00"
                    },
                    "terminal": "PAX",
                    "checkInDesk": "320-321",
                    "gate": "C38",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:30+01:00",
                    "actualTimeLocal": "2023-08-01 23:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:30Z",
                    "actualTimeUtc": "2023-08-01 22:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:30Z",
                        "local": "2023-08-01 23:30+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:30Z",
                        "local": "2023-08-01 23:30+01:00"
                    },
                    "terminal": "2",
                    "gate": "408",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 587",
                "callSign": "EIN70V",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-EDP",
                    "modeS": "4CA76F",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 36025,
                    "pressureAltitude": {
                        "meter": 10980.42,
                        "km": 10.98,
                        "mile": 6.82,
                        "nm": 5.93,
                        "feet": 36025
                    },
                    "altitude": {
                        "meter": 10905.74,
                        "km": 10.91,
                        "mile": 6.78,
                        "nm": 5.89,
                        "feet": 35780
                    },
                    "pressure": {
                        "hPa": 1004.92,
                        "inHg": 29.68,
                        "mmHg": 753.75
                    },
                    "gsKt": 447,
                    "groundSpeed": {
                        "kt": 447,
                        "kmPerHour": 828,
                        "miPerHour": 514,
                        "meterPerSecond": 230
                    },
                    "trackDeg": 352,
                    "trueTrack": {
                        "deg": 352,
                        "rad": 6.14355896702004
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 45.888107,
                    "lon": -4.291504
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "GCRR",
                        "iata": "ACE",
                        "name": "Lanzarote Island"
                    },
                    "scheduledTimeLocal": "2023-08-01 19:45+01:00",
                    "actualTimeLocal": "2023-08-01 19:52+01:00",
                    "scheduledTimeUtc": "2023-08-01 18:45Z",
                    "actualTimeUtc": "2023-08-01 18:52Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 18:45Z",
                        "local": "2023-08-01 19:45+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 18:52Z",
                        "local": "2023-08-01 19:52+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "11-12",
                    "gate": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:50+01:00",
                    "actualTimeLocal": "2023-08-01 23:50+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:50Z",
                    "actualTimeUtc": "2023-08-01 22:50Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:50Z",
                        "local": "2023-08-01 23:50+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:50Z",
                        "local": "2023-08-01 23:50+01:00"
                    },
                    "terminal": "2",
                    "gate": "BUS",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 779",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGKK",
                        "iata": "LGW",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:35+01:00",
                    "actualTimeLocal": "2023-08-01 21:35+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:35Z",
                    "actualTimeUtc": "2023-08-01 20:35Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:35Z",
                        "local": "2023-08-01 21:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:35Z",
                        "local": "2023-08-01 21:35+01:00"
                    },
                    "terminal": "S",
                    "gate": "5",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:05+01:00",
                    "actualTimeLocal": "2023-08-01 23:45+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:05Z",
                    "actualTimeUtc": "2023-08-01 22:45Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:05Z",
                        "local": "2023-08-01 23:05+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:45Z",
                        "local": "2023-08-01 23:45+01:00"
                    },
                    "terminal": "1",
                    "gate": "1XN",
                    "baggageBelt": "4",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 143",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "ELLX",
                        "iata": "LUX",
                        "name": "Luxembourg"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:00+02:00",
                    "actualTimeLocal": "2023-08-01 22:00+02:00",
                    "runwayTimeLocal": "2023-08-01 22:10+02:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 20:00Z",
                    "runwayTimeUtc": "2023-08-01 20:10Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 22:00+02:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 22:00+02:00"
                    },
                    "runwayTime": {
                        "utc": "2023-08-01 20:10Z",
                        "local": "2023-08-01 22:10+02:00"
                    },
                    "terminal": "A",
                    "gate": "A01",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:00+01:00",
                    "actualTimeLocal": "2023-08-01 23:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:00Z",
                    "actualTimeUtc": "2023-08-01 22:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "terminal": "1",
                    "gate": "VCC1",
                    "baggageBelt": "8",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 1949",
                "callSign": "RYR4AF",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-EKT",
                    "modeS": "4CA813",
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                },
                "location": {
                    "pressureAltFt": 38000,
                    "pressureAltitude": {
                        "meter": 11582.4,
                        "km": 11.58,
                        "mile": 7.2,
                        "nm": 6.25,
                        "feet": 38000
                    },
                    "altitude": {
                        "meter": 11462.92,
                        "km": 11.46,
                        "mile": 7.12,
                        "nm": 6.19,
                        "feet": 37608
                    },
                    "pressure": {
                        "hPa": 999.92,
                        "inHg": 29.53,
                        "mmHg": 750
                    },
                    "gsKt": 383,
                    "groundSpeed": {
                        "kt": 383,
                        "kmPerHour": 709,
                        "miPerHour": 441,
                        "meterPerSecond": 197
                    },
                    "trackDeg": 298,
                    "trueTrack": {
                        "deg": 297.8,
                        "rad": 5.197590299386226
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 51.698135,
                    "lon": -1.670288
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGNT",
                        "iata": "NCL",
                        "name": "Newcastle upon Tyne"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:35+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:35Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:35Z",
                        "local": "2023-08-01 22:35+01:00"
                    },
                    "quality": [
                        "Basic"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:40+01:00",
                    "actualTimeLocal": "2023-08-01 23:40+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:40Z",
                    "actualTimeUtc": "2023-08-01 22:40Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:40Z",
                        "local": "2023-08-01 23:40+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:40Z",
                        "local": "2023-08-01 23:40+01:00"
                    },
                    "terminal": "1",
                    "gate": "104",
                    "baggageBelt": "8",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 21",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "EGCC",
                        "iata": "MAN",
                        "name": "Manchester"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:00+01:00",
                    "actualTimeLocal": "2023-08-01 22:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:00Z",
                    "actualTimeUtc": "2023-08-01 21:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:00Z",
                        "local": "2023-08-01 22:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:00Z",
                        "local": "2023-08-01 22:00+01:00"
                    },
                    "terminal": "3",
                    "gate": "48",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-01 23:00+01:00",
                    "actualTimeLocal": "2023-08-01 23:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:00Z",
                    "actualTimeUtc": "2023-08-01 22:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:30Z",
                        "local": "2023-08-01 23:30+01:00"
                    },
                    "terminal": "1",
                    "gate": "112",
                    "baggageBelt": "10",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 559",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/aer_lingus.jpg",
            "flight": {
                "departure": {
                    "airport": {
                        "icao": "LIBR",
                        "iata": "BDS",
                        "name": "Brindisi"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:40+02:00",
                    "scheduledTimeUtc": "2023-08-01 19:40Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:40Z",
                        "local": "2023-08-01 21:40+02:00"
                    },
                    "quality": [
                        "Basic"
                    ]
                },
                "arrival": {
                    "scheduledTimeLocal": "2023-08-02 00:30+01:00",
                    "actualTimeLocal": "2023-08-01 23:00+01:00",
                    "scheduledTimeUtc": "2023-08-01 23:30Z",
                    "actualTimeUtc": "2023-08-01 22:00Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 23:30Z",
                        "local": "2023-08-02 00:30+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:00Z",
                        "local": "2023-08-01 23:00+01:00"
                    },
                    "terminal": "2",
                    "gate": "303",
                    "baggageBelt": "2",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "EI 459",
                "callSign": "EIN459",
                "status": "Expected",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "reg": "EI-DEK",
                    "modeS": "4CA27F",
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "Aer Lingus",
                    "iata": "EI",
                    "icao": "EIN"
                },
                "location": {
                    "pressureAltFt": 36000,
                    "pressureAltitude": {
                        "meter": 10972.8,
                        "km": 10.97,
                        "mile": 6.82,
                        "nm": 5.92,
                        "feet": 36000
                    },
                    "altitude": {
                        "meter": 10898.12,
                        "km": 10.9,
                        "mile": 6.77,
                        "nm": 5.88,
                        "feet": 35755
                    },
                    "pressure": {
                        "hPa": 1004.92,
                        "inHg": 29.68,
                        "mmHg": 753.75
                    },
                    "gsKt": 369,
                    "groundSpeed": {
                        "kt": 369,
                        "kmPerHour": 683,
                        "miPerHour": 425,
                        "meterPerSecond": 190
                    },
                    "trackDeg": 307,
                    "trueTrack": {
                        "deg": 306.9,
                        "rad": 5.3564153678441535
                    },
                    "reportedAtUtc": "2023-08-01 21:06Z",
                    "lat": 46.679214,
                    "lon": 9.226506
                }
            },
            "type": "Arrival",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        }
    ]

    this.departures = [
        {
            "logo": "https://api-ninjas.com/images/airline_logos/qantas.jpg",
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 22:05+01:00",
                    "actualTimeLocal": "2023-08-01 22:05+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:05Z",
                    "actualTimeUtc": "2023-08-01 21:05Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:05Z",
                        "local": "2023-08-01 22:05+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:05Z",
                        "local": "2023-08-01 22:05+01:00"
                    },
                    "terminal": "2",
                    "checkInDesk": "7-15",
                    "gate": "417",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "OMDB",
                        "iata": "DXB",
                        "name": "Dubai City"
                    },
                    "quality": []
                },
                "number": "QF 8164",
                "status": "Boarding",
                "codeshareStatus": "IsCodeshared",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 777-300ER"
                },
                "airline": {
                    "name": "Qantas",
                    "iata": "QF",
                    "icao": "QFA"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 20:30+01:00",
                    "actualTimeLocal": "2023-08-01 22:10+01:00",
                    "scheduledTimeUtc": "2023-08-01 19:30Z",
                    "actualTimeUtc": "2023-08-01 21:10Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 19:30Z",
                        "local": "2023-08-01 20:30+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:10Z",
                        "local": "2023-08-01 22:10+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1204-1319",
                    "gate": "107",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "EGBB",
                        "iata": "BHX",
                        "name": "Birmingham"
                    },
                    "scheduledTimeLocal": "2023-08-01 21:35+01:00",
                    "actualTimeLocal": "2023-08-01 23:07+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:35Z",
                    "actualTimeUtc": "2023-08-01 22:07Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:35Z",
                        "local": "2023-08-01 21:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:07Z",
                        "local": "2023-08-01 23:07+01:00"
                    },
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 666",
                "status": "Boarding",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 22:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 21:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1204-1319",
                    "gate": "112",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "EGCC",
                        "iata": "MAN",
                        "name": "Manchester"
                    },
                    "scheduledTimeLocal": "2023-08-01 23:25+01:00",
                    "actualTimeLocal": "2023-08-01 23:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:25Z",
                    "actualTimeUtc": "2023-08-01 22:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:25Z",
                        "local": "2023-08-01 23:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:25Z",
                        "local": "2023-08-01 23:25+01:00"
                    },
                    "terminal": "3",
                    "gate": "51",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "RK 562",
                "status": "Boarding",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair UK",
                    "iata": "RK",
                    "icao": "RUK"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 22:25+01:00",
                    "actualTimeLocal": "2023-08-01 22:25+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:25Z",
                    "actualTimeUtc": "2023-08-01 21:25Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:25Z",
                        "local": "2023-08-01 22:25+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1204-1319",
                    "gate": "102",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "EGGD",
                        "iata": "BRS",
                        "name": "Bristol"
                    },
                    "scheduledTimeLocal": "2023-08-01 23:35+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:35Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:35Z",
                        "local": "2023-08-01 23:35+01:00"
                    },
                    "quality": [
                        "Basic"
                    ]
                },
                "number": "FR 508",
                "status": "Boarding",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 22:15+01:00",
                    "actualTimeLocal": "2023-08-01 22:15+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:15Z",
                    "actualTimeUtc": "2023-08-01 21:15Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:15Z",
                        "local": "2023-08-01 22:15+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:15Z",
                        "local": "2023-08-01 22:15+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1204-1319",
                    "gate": "108",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "EGGP",
                        "iata": "LPL",
                        "name": "Liverpool"
                    },
                    "scheduledTimeLocal": "2023-08-01 23:10+01:00",
                    "scheduledTimeUtc": "2023-08-01 22:10Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 22:10Z",
                        "local": "2023-08-01 23:10+01:00"
                    },
                    "quality": [
                        "Basic"
                    ]
                },
                "number": "FR 444",
                "status": "Boarding",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 22:55+01:00",
                    "actualTimeLocal": "2023-08-01 22:55+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:55Z",
                    "actualTimeUtc": "2023-08-01 21:55Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:55Z",
                        "local": "2023-08-01 22:55+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:55Z",
                        "local": "2023-08-01 22:55+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1204-1319",
                    "gate": "104",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "EGPH",
                        "iata": "EDI",
                        "name": "Edinburgh"
                    },
                    "scheduledTimeLocal": "2023-08-02 00:05+01:00",
                    "actualTimeLocal": "2023-08-02 00:05+01:00",
                    "scheduledTimeUtc": "2023-08-01 23:05Z",
                    "actualTimeUtc": "2023-08-01 23:05Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 23:05Z",
                        "local": "2023-08-02 00:05+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 23:05Z",
                        "local": "2023-08-02 00:05+01:00"
                    },
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 818",
                "status": "Boarding",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 21:35+01:00",
                    "actualTimeLocal": "2023-08-01 23:20+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:35Z",
                    "actualTimeUtc": "2023-08-01 22:20Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:35Z",
                        "local": "2023-08-01 21:35+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:20Z",
                        "local": "2023-08-01 23:20+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1204-1319",
                    "gate": "106",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "EGSS",
                        "iata": "STN",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:55+01:00",
                    "actualTimeLocal": "2023-08-01 23:30+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:55Z",
                    "actualTimeUtc": "2023-08-01 22:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:55Z",
                        "local": "2023-08-01 22:55+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:30Z",
                        "local": "2023-08-01 23:30+01:00"
                    },
                    "terminal": "1",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 290",
                "status": "Delayed",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "logo": "https://api-ninjas.com/images/airline_logos/ryanair.jpg",
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 21:00+01:00",
                    "actualTimeLocal": "2023-08-01 22:40+01:00",
                    "scheduledTimeUtc": "2023-08-01 20:00Z",
                    "actualTimeUtc": "2023-08-01 21:40Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 20:00Z",
                        "local": "2023-08-01 21:00+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:40Z",
                        "local": "2023-08-01 22:40+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1204-1319",
                    "gate": "109",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "EGSS",
                        "iata": "STN",
                        "name": "London"
                    },
                    "scheduledTimeLocal": "2023-08-01 22:20+01:00",
                    "actualTimeLocal": "2023-08-01 23:40+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:20Z",
                    "actualTimeUtc": "2023-08-01 22:40Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:20Z",
                        "local": "2023-08-01 22:20+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 22:40Z",
                        "local": "2023-08-01 23:40+01:00"
                    },
                    "terminal": "1",
                    "gate": "48",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "number": "FR 292",
                "status": "Boarding",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Boeing 737-800"
                },
                "airline": {
                    "name": "Ryanair",
                    "iata": "FR",
                    "icao": "RYR"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        },
        {
            "flight": {
                "departure": {
                    "scheduledTimeLocal": "2023-08-01 22:50+01:00",
                    "actualTimeLocal": "2023-08-01 22:50+01:00",
                    "scheduledTimeUtc": "2023-08-01 21:50Z",
                    "actualTimeUtc": "2023-08-01 21:50Z",
                    "scheduledTime": {
                        "utc": "2023-08-01 21:50Z",
                        "local": "2023-08-01 22:50+01:00"
                    },
                    "revisedTime": {
                        "utc": "2023-08-01 21:50Z",
                        "local": "2023-08-01 22:50+01:00"
                    },
                    "terminal": "1",
                    "checkInDesk": "1401-1402",
                    "gate": "302",
                    "quality": [
                        "Basic",
                        "Live"
                    ]
                },
                "arrival": {
                    "airport": {
                        "icao": "LUKK",
                        "iata": "KIV",
                        "name": "Chişinău"
                    },
                    "scheduledTimeLocal": "2023-08-02 04:30+03:00",
                    "scheduledTimeUtc": "2023-08-02 01:30Z",
                    "scheduledTime": {
                        "utc": "2023-08-02 01:30Z",
                        "local": "2023-08-02 04:30+03:00"
                    },
                    "quality": [
                        "Basic"
                    ]
                },
                "number": "5F 712",
                "status": "Boarding",
                "codeshareStatus": "IsOperator",
                "isCargo": false,
                "aircraft": {
                    "model": "Airbus A320"
                },
                "airline": {
                    "name": "FlyOne",
                    "iata": "5F",
                    "icao": "FIA"
                }
            },
            "type": "Departure",
            "airport": {
                "icao": "EIDW",
                "iata": "DUB",
                "name": "Dublin ",
                "shortName": "Dublin",
                "municipalityName": "Dublin",
                "location": {
                    "lat": 53.4213,
                    "lon": -6.27007
                },
                "countryCode": "IE"
            }
        }
    ]

  }






}
