 import { Injectable } from '@angular/core';
import { CompleteFlightData } from '../services/network.service';
import { CompleteData } from './map.component';
import {Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor() { 

  }
  
  trackedFlightsUpdated:Subject<Array<CompleteData>> = new Subject<Array<CompleteData>>

  onTrackedFlightsChanged:Subject<Array<CompleteFlightData>> = new Subject<Array<CompleteFlightData>>
  // selectedFlightsUpdated:Subject<Array<CompleteData>> = new Subject<Array<CompleteData>>();

  trackedFlights:Array<CompleteFlightData> = [];

  addTrackedFlight(flight:CompleteFlightData){
    this.trackedFlights.push(flight);
  }

  getTrackedFlights():Array<CompleteFlightData>{
    return [...this.trackedFlights]
  }

  trackedFlightsChanged(flights:Array<CompleteFlightData>){
        this.trackedFlights = [...flights];
        console.log("Made it!")
        this.onTrackedFlightsChanged.next([...this.trackedFlights])
  }


  onTrackedFlightsUpdated(trackedFlights:Array<CompleteData>){
    this.trackedFlightsUpdated.next([...trackedFlights])
  }

  deleteTrackedFlight(index:number){
    let newArray = [];

    for(let i = 0;i < this.trackedFlights.length;i++){
      if(i!==index) newArray.push(this.trackedFlights[i])

    }

    this.trackedFlights = newArray;
  }

  removeTrackedFlight(flightNr:string){
      let trackedFlight = this.trackedFlights.find((flight) => flight.flight.number === flightNr)

      if(!trackedFlight) return;

      this.deleteTrackedFlight(this.trackedFlights.indexOf(trackedFlight));

      // this.trackedFlights.splice(this.trackedFlights.indexOf(trackedFlight),1)
  }



 
}
