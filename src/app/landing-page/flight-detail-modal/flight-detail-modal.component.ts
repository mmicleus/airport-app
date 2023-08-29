import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompleteFlightData } from 'src/app/services/network.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-flight-detail-modal',
  templateUrl: './flight-detail-modal.component.html',
  styleUrls: ['./flight-detail-modal.component.scss']
})
export class FlightDetailModalComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: CompleteFlightData,private utility:UtilityService){
      
    }

    getAirportName(){
      if(this.data.type === "Arrival"){
        return this.data.flight.departure.airport.name;
      }
      else if(this.data.type === "Departure"){
        return this.data.flight.arrival.airport.name;
      }
      else return "---";
    }

    getPlannedTime(){

      if(this.data.type === "Arrival"){
        return this.utility.extractTime(this.data.flight.arrival.scheduledTimeLocal);
      }
      else if(this.data.type === "Departure"){
        return this.utility.extractTime(this.data.flight.departure.scheduledTimeLocal);
      }
      else return "---";
    }

    getDateOfFlight(){
      if(this.data.type === "Arrival"){
        return this.utility.getFullFormattedDate(this.data.flight.arrival.scheduledTimeLocal);
      }
      else if(this.data.type === "Departure"){
        return this.utility.getFullFormattedDate(this.data.flight.departure.scheduledTimeLocal);
      }
      else return "---";
    }

    getStatusMessage(){
      let status = this.data.flight.status;
      let flightType = this.data.type;
  
      if(flightType === 'Arrival'){
        switch(status){
          case "Arrived":
            return `Arrived ${this.utility.extractTime(this.data.flight.arrival.actualTimeLocal)}`
          break;
          case "Expected":
            return `Estimated ${this.utility.extractTime(this.data.flight.arrival.scheduledTimeLocal)}`
          break;
          case "Delayed":
            return `Delayed ${this.utility.extractTime(this.data.flight.arrival.revisedTime.local)}`
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
            return `Departed ${this.utility.extractTime(this.data.flight.departure.actualTimeLocal)}`
          break;
          case "Boarding":
            return `Boarding`
          break;
          case "GateClosed":
            return `Gate Closed`
          break;
          case "Expected":
            return `Expected ${this.utility.extractTime(this.data.flight.departure.scheduledTimeLocal)}`
          break;
          case "Delayed":
            return `Delayed ${this.utility.extractTime(this.data.flight.departure.revisedTime.local)}`
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


    getSchTimeStyles(){
      let status = this.data.flight.status;
  
      switch(status){
        case "Delayed":
        case "Canceled":
          return {color:"#B6B9BF",textDecoration:"line-through"}
        break;
        default:
          return {color:"#41454D",textDecoration:"none"}
      }
    }

    getDelayDate(){

      let status = this.data.flight.status;
      let flightType = this.data.type;

      return flightType === "Arrival" ? this.utility.getFormattedDate(this.data.flight.arrival.revisedTime.local) : this.utility.getFormattedDate(this.data.flight.departure.revisedTime.local);
    }

    getSourceAirportIATA(){
      let flightType = this.data.type;

      return flightType === "Arrival" ? this.data.flight.departure.airport.iata : this.data.airport.iata;
    }

    getSourceAirportName(){
      let flightType = this.data.type;

      return flightType === "Arrival" ? this.data.flight.departure.airport.name : this.data.airport.name;
    }

    getDestinationAirportIATA(){
      let flightType = this.data.type;

      return flightType === "Arrival" ? this.data.airport.iata : this.data.flight.arrival.airport.iata
    }

    getDestinationAirportName(){
      let flightType = this.data.type;

      return flightType === "Arrival" ? this.data.airport.name : this.data.flight.arrival.airport.name
    }

    getIATAcode2(){
      return this.data.airport.iata;
    }



}
