import { Injectable } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { CompleteFlightData,Flight } from '../services/network.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageUtilityService {

  constructor(private utility:UtilityService) { }


  getMatchingFlights(term:string, flights:Array<CompleteFlightData>){
    return flights.filter((flightData) => {
      let flightNo = flightData.flight.number.toLowerCase();
      let airportName = flightData.type === "Arrival" ? flightData.flight.departure.airport.name : flightData.flight.arrival.airport.name;
      airportName = airportName.toLowerCase();
      term = term.toLowerCase();


      return flightNo.includes(term) || flightNo.split(" ").join('').includes(term) || airportName.startsWith(term);

    })
  }



  getStatusMessage(arrival:CompleteFlightData){
    let status = arrival.flight.status;
    let flightType = arrival.type;

    if(flightType === 'Arrival'){

      switch(status){
        case "Arrived":
          return `Arrived ${this.utility.extractTime(arrival.flight.arrival.actualTimeLocal)}`
        break;
        case "Expected":
          return `Estimated ${this.utility.extractTime(arrival.flight.arrival.scheduledTimeLocal)}`
        break;
        case "Delayed":
          return `Delayed ${this.utility.extractTime(arrival.flight.arrival.revisedTime.local)}`
        break;
        case "Canceled":
          return `Canceled`
        break;
        case "Approaching":
          return `Approaching`
        break;
        default:
          return `Unknown`;
      }
    }
    else if(flightType === 'Departure'){
      switch(status){
        case "Departed":
          return `Departed ${this.utility.extractTime(arrival.flight.departure.actualTimeLocal)}`
        break;
        case "Boarding":
          return `Boarding`
        break;
        case "GateClosed":
          return `Gate Closed`
        break;
        case "Expected":
          return `Expected ${this.utility.extractTime(arrival.flight.departure.scheduledTimeLocal)}`
        break;
        case "Delayed":
          return `Delayed ${this.utility.extractTime(arrival.flight.departure.revisedTime.local)}`
        break;
        case "Canceled":
          return `Canceled`
        break;
        default:
          return `Unknown`;
      }
    }


  

    return "Unknown";
  }


  getCardStatusMessage(arrival:CompleteFlightData){
    let status = arrival.flight.status;
    let flightType = arrival.type;

    if(flightType === 'Arrival'){

      switch(status){
        case "Arrived":
          return `Arrived`
        break;
        case "Expected":
          return `Estimated`
        break;
        case "Delayed":
          return `Delayed`
        break;
        case "Canceled":
          return `Canceled`
        break;
        case "Approaching":
          return `Approaching`
        break;
        default:
          return `Unknown`;
      }
    }
    else if(flightType === 'Departure'){
      switch(status){
        case "Departed":
          return `Departed`
        break;
        case "Boarding":
          return `Boarding`
        break;
        case "GateClosed":
          return `Gate Closed`
        break;
        case "Expected":
          return `Expected`
        break;
        case "Delayed":
          return `Delayed`
        break;
        case "Canceled":
          return `Canceled`
        break;
        default:
          return `Unknown`;
      }
    }

    return "Unknown";
  }

  getColorByStatus(status:string):string{
    switch(status){
      case "Arrived":
      case "Expected":
        return "#2eb51f"
      break;
      case "Delayed":
      case "Canceled":
        return "#EB3E32"
      break;
      case "Departed":
        return "#2eb51f"
      break;
      case "Boarding":
        return "#2eb51f"
      break;
      case "GateClosed":
        return "#FFB100"
      break;
      case "Approaching":
        return "#2eb51f"
      break;
      default:
        return "#41454D";
    }
  }


  getStylesByStatus(arrival:CompleteFlightData){
      let status = arrival.flight.status;

      return {color:this.getColorByStatus(status)}
  }

  getSchTimeStyles(completeFlight:CompleteFlightData){
    let status = completeFlight.flight.status;

    switch(status){
      case "Delayed":
      case "Canceled":
        return {color:"#B6B9BF",textDecoration:"line-through"}
      break;
      default:
        return {color:"#41454D",textDecoration:"none"}
    }

  }

  getSchTime(completeFlight:CompleteFlightData){
    return completeFlight.type === "Arrival" ? completeFlight.flight.arrival.scheduledTime.local : completeFlight.flight.departure.scheduledTime.local;
  }

  getAirport(completeFlight:CompleteFlightData){
    return completeFlight.type === "Arrival" ? completeFlight.flight.departure.airport?.name : completeFlight.flight.arrival.airport?.name;
  }

  getDelayTime(completeFlight:CompleteFlightData){
    return completeFlight.type === "Arrival" ? completeFlight.flight.arrival.revisedTime.local : completeFlight.flight.departure.revisedTime.local;
  }


  prependZero(nr:number){
    return nr > 9 ? nr :  "0" + nr.toString();
  }


  getHourAsString(hour:number){
    return `${this.prependZero(hour)}:00`
  }

  getDate(hour:number){
      if(hour >= 24){
        hour = hour - 24;
        return this.utility.getTomorrowDate(this.getHourAsString(hour))
      }
      else if(hour < 0){
        hour = 24 + hour;
        return this.utility.getYesterdayDate(this.getHourAsString(hour));
      }
      else{
        return this.utility.getTodayDate(this.getHourAsString(hour));
      }
  }


  getDate2(hour:number){
    if(hour >= 24){
      hour = hour - 24;
      return this.utility.getTomorrowDateUTC(this.getHourAsString(hour))
    }
    else if(hour < 0){
      hour = 24 + hour;
      return this.utility.getYesterdayDateUTC(this.getHourAsString(hour));
    }
    else{
      return this.utility.getTodayDateUTC(this.getHourAsString(hour));
    }
}


  getAirportHour(airportTime:string){
    let aux:string;

    console.log(airportTime)

      // if(airportTime.includes("+"))  aux = airportTime.slice(airportTime.indexOf("+"),airportTime.indexOf("+") + 3)
      // else aux = airportTime.slice(airportTime.indexOf("-"),airportTime.indexOf("-") + 3);

      aux = airportTime.slice(-6,-3);
      

      console.log("aux" + aux)
      let utcOffset = parseInt(aux);

      console.log("utc offset" + utcOffset);

      let airportHour = new Date().getUTCHours() + utcOffset;

      console.log("airport hour" + airportHour);

      return airportHour;
  }



  computeTimeframe(airportTime:string){

    let currentHour = this.getAirportHour(airportTime)

    console.log("airportTime" + airportTime)

    console.log(currentHour);


    let startingHour = currentHour - 1;

    let endingHour = currentHour + 10;

    let startingTime = this.getDate2(startingHour)

    let EndingTime = this.getDate2(endingHour)


      return {
                startingTime:startingTime,
                endingTime:EndingTime
             }
  }

  compareArrivalFlights(f1:Flight,f2:Flight){

    let time1:string;
    let time2:string;
    let date1:Date;
    let date2:Date;


  switch(f1.status){
    case "Arrived":
      time1 =  f1.arrival.actualTimeLocal;
    break;
    case "Expected":
    case "Approaching":
    case "Canceled":
      time1 = f1.arrival.scheduledTimeLocal;
    break;
    case "Delayed":
      time1 = f1.arrival.revisedTime.local
    break;
    default:
      time1 = f1.arrival.scheduledTimeLocal;
  }


  switch(f2.status){
    case "Arrived":
      time2 =  f2.arrival.actualTimeLocal;
    break;
    case "Expected":
    case "Approaching":
    case "Canceled":
      time2 = f2.arrival.scheduledTimeLocal;
    break;
    case "Delayed":
      time2 = f2.arrival.revisedTime.local
    break;
    default:
      time2 = f2.arrival.scheduledTimeLocal;
  }

      date1 = new Date(time1)
      date2 = new Date(time2)

        return (date1 > date2) ? 1 : -1;
  }

  compareDepartureFlights(f1:Flight,f2:Flight){
    let time1:string;
    let time2:string;
    let date1:Date;
    let date2:Date;


  switch(f1.status){
    case "Departed":
      time1 = f1.departure.actualTimeLocal;
    break;
    case "Expected":
    case "Boarding":
    case "GateClosed":
    case "Canceled":
      time1 = f1.departure.scheduledTimeLocal;
    break;
    case "Delayed":
      time1 = f1.departure.revisedTime.local;
    break;
    default:
      time1 = f1.departure.scheduledTimeLocal;
  }



  switch(f2.status){
    case "Departed":
      time2 = f2.departure.actualTimeLocal;
    break;
    case "Expected":
    case "Boarding":
    case "GateClosed":
    case "Canceled":
      time2 = f2.departure.scheduledTimeLocal;
    break;
    case "Delayed":
      time2 = f2.departure.revisedTime.local;
    break;
    default:
      time2 = f2.departure.scheduledTimeLocal;
  }

      date1 = new Date(time1)
      date2 = new Date(time2)

        return (date1 > date2) ? 1 : -1;
  }


  orderScheduleByTime(schedule:Array<Flight>,type:string){
      if(type === "Arrivals"){
        schedule.sort(this.compareArrivalFlights.bind(this))
      }
      else{
        schedule.sort(this.compareDepartureFlights.bind(this))
      }
  }


}
