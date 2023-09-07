import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, forkJoin, map,tap } from 'rxjs';
import { UtilityService } from './utility.service';
import {environment as env} from "src/environments/environment.development"

// data

export interface AirportScheduleResponse{
  departures:Array<Flight>,
  arrivals:Array<Flight>
}

export interface CompleteFlightData{
  logo:string,
  flight:Flight,
  type:string,
  airport:AirportData,
}

export interface Flight{
  departure:TimeAndLocationData,
  arrival:TimeAndLocationData,
  number:string,
  status:string,
  codeshareStatus:string,
  isCargo:boolean,
  aircraft:Aircraft,
  airline:Airline
}

interface Airline{
  name:string,
  iata:string,
  icao:string
}

interface Aircraft{
  model:string,
  reg:string,
  modeS:string
}

interface TimeAndLocationData{
  airport:Airport,

  scheduledTimeLocal:string,
  scheduledTimeUtc:string,
  actualTimeLocal:string,
  actualTimeUtc:string,
  scheduledTime:ScheduledTime,
  revisedTime:RevisedTime,

  terminal:string,
  gate:string,
  baggageBelt:string,
  quality:Array<string>
  checkInDesk:string
}

interface Airport{
  icao:string,
  iata:string,
  name:string
}

interface ScheduledTime{
  utc:string,
  local:string
}

interface RevisedTime{
  utc:string,
  local:string
}


// Photos data

export interface AicraftPhotosResponse{
  photos:Array<Photo>
}

export interface Photo{
  id:string,
  thumbnail:Thumbnail,
  thumbnail_large:Thumbnail,
  link:string,
  photographer:string
}


export interface Thumbnail{
    src:string,
    size:Size,
}

export interface Size{
  width:number,
  height:number
}

export interface AirportSuggestionsResponse{
  items:Array<AirportData>,
  searchBy:string
}

export interface AirportData{
  countryCode:string,
  iata:string,
  icao:string,
  localCode:string,
  location:Coordinates,
  municipalityName:string,
  name:string,
  shortName:string
}


export interface CompleteAirportInfo{
  icao:string,
  iata:string,
  shortName:string,
  fullName:string,
  municipalityName:string,
  location:Coordinates,
  currentTime:{
    localTime:string
  },
  elevation:{
    feet:number,
    km:number,
    meter:number,
    mile:number,
    nm:number
  }
  country:{
    code:string,
    name:string
  },
  continent:{
    code:string,
    name:string
  },
  timeZone:string,
  urls:{
    webSite:string,
    wikipedia:string
    // twitter:"http://twitter.com/AirportDme"
    googleMaps:string,
    flightRadar:string
  }
}

export interface Coordinates{
  lat:number,
  lon:number
}

export interface FullFlightCoords{
  srcAirport:{
    completeData:CompleteAirportInfo
    fullName:string,
    coords:Coords
  },
  destAirport:{
    completeData:CompleteAirportInfo
    fullName:string,
    coords:Coords
  },
  geography:GeographicDetails,
  status:string,
}

export interface Coords{
  lat:number,
  lng:number
}

export interface GeographicDetails{
  altitude:number,
  direction:number,
  aircraftCoords:Coords
}



export type AirlineDataResponse = Array<AirlineData>;

export interface AirlineData{
  iata:string,
  icao:string,
  fleet:{
    [key:string]:number
  },
  logo_url:string,
  name:string
}



@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http:HttpClient,private utility:UtilityService) { }

  responseArrivals!:AirportScheduleResponse;
  responseDepartures!:AirportScheduleResponse;




  getScheduledFlights(airportData:AirportData, startingTime:string, endingTime:string):Observable<AirportScheduleResponse>{
    let url = `${env.FLIGHTS_API_URL}${airportData.icao}/${startingTime}/${endingTime}?withLeg=true&withCancelled=true&withCodeshared=true&withCargo=true&withPrivate=true&withLocation=true`;
    console.log("New Url:" + url);

    let headerParams = new HttpHeaders({'X-RapidAPI-Key': env.RAPID_API_KEY2,
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'});
    
    return this.http.get<AirportScheduleResponse>(url,{headers:headerParams})
  }


  getPageData(flights:Array<Flight>,type:string,airportData:AirportData):Observable<Array<CompleteFlightData>>{

    return forkJoin(flights.map( (flight) => this.getAirlineLogo(flight.airline.name) )).pipe(map( (response:Array<AirlineDataResponse>) => {

      return response.map((airline,index) => {

        return {
          logo:airline[0]?.logo_url,
          flight:flights[index],
          type:type,
          airport:airportData,
        }
      } )
    }))
  }



  updateTrackedFlights(arrivals:Array<Flight>,departures:Array<Flight>,airportData:AirportData){
      return forkJoin(
        this.getPageData(arrivals,"Arrival",airportData),
        this.getPageData(departures,"Departure",airportData)
        )
}


updateTrackedArrivals(arrivals:Array<Flight>,airportData:AirportData){

  return this.getPageData(arrivals,"Arrival",airportData)
    
}


updateTrackedDepartures(departures:Array<Flight>,airportData:AirportData){
 
  return this.getPageData(departures,"Departure",airportData)
}


  getDepartures(count:number,airportData:AirportData):Observable<Array<CompleteFlightData>>{
    let url = `${env.FLIGHTS_API_URL}${airportData.icao}/${this.utility.getTodayDate("10:00")}/${this.utility.getTodayDate("20:00")}?withLeg=true&withCancelled=true&withCodeshared=true&withCargo=true&withPrivate=true&withLocation=true`;

    let headerParams = new HttpHeaders({'X-RapidAPI-Key': env.RAPID_API_KEY1,
                                        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'});
    

    return this.http.get<AirportScheduleResponse>(url,{headers:headerParams}).pipe(tap((data:AirportScheduleResponse) => {this.responseDepartures = data}),exhaustMap((data:AirportScheduleResponse) => forkJoin<Array<AirlineDataResponse>>(data.departures.slice(0,Math.min(count,data.departures.length - 1)).map((flight:Flight) => this.getAirlineLogo(flight.airline.name))).pipe(map((logos:Array<AirlineDataResponse>) => 

      logos.map((logo:AirlineDataResponse,index:number)=> {
        return {
          logo:  logo[0]?.logo_url,
          flight:this.responseDepartures.departures[index],
          type:"Departure",
          airport:airportData
        }
      })
    ))  ))
  }



  getAirlineLogo(name:string):Observable<AirlineDataResponse>{


    let headerParams = new HttpHeaders({'X-RapidAPI-Key': env.RAPID_API_KEY1,
                                        'X-RapidAPI-Host': 'airlines-by-api-ninjas.p.rapidapi.com'});


    return this.http.get<AirlineDataResponse>(env.AIRLINES_API_URL,{headers:headerParams,params:new HttpParams().set('name',name)});
  }

  
  getAirportSuggestions(airportName:string):Observable<AirportSuggestionsResponse>{


    let headerParams = new HttpHeaders({'X-RapidAPI-Key': env.RAPID_API_KEY2,
                                        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'});

    return this.http.get<AirportSuggestionsResponse>(env.AIRPORT_SUGGESTIONS_API_URL,{headers:headerParams,params:new HttpParams().set('q',airportName).set('limit',5)});
  }

  getFlightData(iata:string):Observable<FullFlightCoords>{

    let url = `https://aviation-edge.com/v2/public/flights?key=${env.AVIATION_EDGE_API_KEY}&flightIata=${iata.split(' ').join('')}`

    let resp1:any;

    return this.http.get(url).pipe( tap( (resp:any) => {resp1 = resp[0]; console.log(resp)} ), exhaustMap( (resp:any) => 
    
    forkJoin([this.getAirportData(resp[0].departure.icaoCode), this.getAirportData(resp[0].arrival.icaoCode)])

     )).pipe(map((airportsData:any) => {
       return { 
        srcAirport:{
          completeData:airportsData[0],
          fullName:airportsData[0].fullName,
          coords:{
            lat: airportsData[0].location.lat,
            lng:airportsData[0].location.lon
          },
        },
        destAirport:{
          completeData:airportsData[1],
          fullName:airportsData[1].fullName,
          coords:{
            lat: airportsData[1].location.lat,
            lng:airportsData[1].location.lon
          },

        },
        geography:{
          altitude:resp1.geography.altitude,
          direction:resp1.geography.direction,
          aircraftCoords:{
              lat:resp1.geography.latitude,
              lng:resp1.geography.longitude
            }
          },
          status:resp1.status,
        }
     }))
  }


  getAirportData(icao:string):Observable<any>{


    const url = `${env.AIRPORT_API_URL}/${icao}`


    let headerParams = new HttpHeaders({'X-RapidAPI-Key': env.RAPID_API_KEY2,
                                        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'});

    return this.http.get<any>(url,{headers:headerParams,params:new HttpParams().set('withTime','true')});
  }


  getCompleteAirportData(icao:string):Observable<CompleteAirportInfo>{

    const url = `${env.AIRPORT_API_URL}/${icao}`


    let headerParams = new HttpHeaders({'X-RapidAPI-Key': env.RAPID_API_KEY2,
                                        'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'});

    return this.http.get<any>(url,{headers:headerParams,params:new HttpParams().set('withTime','true')});
  }

}
