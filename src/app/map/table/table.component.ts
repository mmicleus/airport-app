import { Component,EventEmitter,Input,OnDestroy,OnInit,Output } from '@angular/core';
import { CompleteData } from '../map.component';
import { LandingPageUtilityService } from 'src/app/landing-page/landing-page-utility.service';
import { UtilityService } from 'src/app/services/utility.service';
import { CompleteFlightData, Coords } from 'src/app/services/network.service';
import { TrackingService } from '../tracking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,OnDestroy {

  @Output() centerMap:EventEmitter<Coords> = new EventEmitter<Coords>();
  @Output() flightAdded:EventEmitter<CompleteData> = new EventEmitter<CompleteData>();
  @Output() flightRemoved:EventEmitter<string> = new EventEmitter<string>();
  @Output() flightDeleted:EventEmitter<string> = new EventEmitter<string>();
  @Output() airportClicked:EventEmitter<{coords:Coords,zoom:number}> = new EventEmitter<{coords:Coords,zoom:number}>();

  trackedFlights:Array<CompleteData> = [];
  sub1!:Subscription;
  // selectedFlights:Array<CompleteData> = [];

  constructor(public tableUtility:LandingPageUtilityService,public utility:UtilityService,public trackingService:TrackingService){}


  // @Input() trackedFlights!:Array<CompleteData>;

  ngOnInit(){
   this.sub1 = this.trackingService.trackedFlightsUpdated.subscribe( (flights:Array<CompleteData>) => {
      // console.log("Tracked Flights:")
      // console.log(trackedFlights)
      this.trackedFlights = [...flights]
    console.log("flights updated in table!");
    })
  }

  ngOnDestroy(){
    if(this.sub1){
      this.sub1.unsubscribe();
    }
  }

  isSelected(flight:CompleteData){
    return flight.shown;
  }



  goToTrackingPage(data:CompleteFlightData){
    console.log(data);
  }

  toggleFlightOn(flight:CompleteData){

    let f = this.trackedFlights.find(f => f.completeFlightData.flight.number === flight.completeFlightData.flight.number)

    if(!f) return;

    f.shown = true;
    this.flightAdded.emit(flight)
   
  }


  toggleFlightOff(flight:CompleteData){

    let f = this.trackedFlights.find(f => f.completeFlightData.flight.number === flight.completeFlightData.flight.number)

    if(!f) return;

    f.shown = false;
    this.flightRemoved.emit(flight.completeFlightData.flight.number)
   
  }

  toggleOtherFlightsOff(flight:CompleteData){
    this.trackedFlights.forEach((f) => {
      if(f.completeFlightData.flight.number !== flight.completeFlightData.flight.number){
        this.toggleFlightOff(f);
      }

    })
  }


 




  deleteTrackedFlight(index:number){
    let newArray = [];

    for(let i = 0;i < this.trackedFlights.length;i++){
      if(i!==index) newArray.push(this.trackedFlights[i])

    }

    this.trackedFlights = newArray;
  }


  deleteFlight(flight:CompleteData){
      let elem = this.trackedFlights.find((f) => f.completeFlightData.flight.number === flight.completeFlightData.flight.number);

      if(!elem) return;

      let index = this.trackedFlights.indexOf(elem);

      // console.log("Deleted element:")
      // console.log(this.trackedFlights[index])

      this.flightDeleted.emit(this.trackedFlights[index].completeFlightData.flight.number)
  //  console.log("deleted subarray:")  

   this.deleteTrackedFlight(index);
   
  //  console.log(this.trackedFlights.splice(index,index));

  //  console.log("remaining array:")
  //  console.log(this.trackedFlights)
      
  }


  onFlightClicked(event:Event,flight:CompleteData){
    let target = event.target as HTMLElement;

    if( target.classList.contains("track") || target.classList.contains("fa-trash") || target.classList.contains("airport-name") ) return;

    console.log("on flight clicked!")


    this.toggleFlightOn(flight);
    this.toggleOtherFlightsOff(flight);

    this.centerMap.emit(flight.coords.geography.aircraftCoords);
  }

  onAirportClicked(coords:Coords,flight:CompleteData){

    this.toggleFlightOn(flight);
    this.toggleOtherFlightsOff(flight);

    this.airportClicked.emit({coords:coords,zoom:12})
  }


  centerMapAroundAircraft(event:Event,aircraftCoords:Coords){

    let target = event.target as HTMLElement;

    if( target.classList.contains("track") ) return;

    this.centerMap.emit(aircraftCoords);
  }

  

  onCheckboxToggled(event:Event,flight:CompleteData){
    let target = event.target as HTMLInputElement;

    if(target.checked === true){
      this.toggleFlightOn(flight)
      // this.flightAdded.emit(flight)

    }
    else{
      this.toggleFlightOff(flight)
      this.flightRemoved.emit(flight.completeFlightData.flight.number)
      
    }

  }

  getHexCodeByName(name:string){

    let colors:{[key:string]:string} = {
      "kaki":"#9ea016",
      "yellow":"#ffee00",
      "black":"#000000",
      "blue":"#001eff",
      "green":"#11ff00",
      "grey":"#79747b",
      "orange":"#ff9500",
      "pink":"#ff00f7",
      "purple":"#9900ff",
      "red":"#ff0000"
    }

        return colors[name]
  }

  getBorderColorByName(name:string){
    let colors:{[key:string]:string} = {
      "kaki":"#9ea016",
      "yellow":"#ffee00",
      "black":"#000000",
      "blue":"#001eff",
      "green":"#11ff00",
      "grey":"#79747b",
      "orange":"#ff9500",
      "pink":"#ff00f7",
      "purple":"#9900ff",
      "red":"#ff0000"
    }

        return `5px solid ${colors[name]}`
  }



}
