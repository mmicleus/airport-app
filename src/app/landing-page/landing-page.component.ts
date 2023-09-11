import { Component, OnInit } from '@angular/core';
import { AirportData, AirportScheduleResponse, NetworkService} from '../services/network.service';
import { CompleteFlightData,Flight } from '../services/network.service';
import { Subscription } from 'rxjs';
import { UtilityService } from '../services/utility.service';
import { LandingPageUtilityService } from './landing-page-utility.service';
import { DataService } from '../services/data.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FlightDetailModalComponent } from './flight-detail-modal/flight-detail-modal.component';
import { Router } from '@angular/router';
import { TrackingService } from '../map/tracking.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { PaginationService } from '../services/pagination.service';

export interface RequestConfig{
  resetPaginator:boolean,
  changeTimeInterval:boolean
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  // imports:[PaginationComponent]
  // standalone:true,
  // imports:[MatPaginatorModule]
  // imports:[MatDialogModule]
})
export class LandingPageComponent implements OnInit {
  arrivals!:Array<CompleteFlightData>;
  departures!:Array<CompleteFlightData>;
 
  

  images!:string[];
  s1!:Subscription;
  s2!:Subscription;
  flightCount:number = 50;
  currentAirport:AirportData = {
    "icao": "EIDW",
    "iata": "DUB",
    "name": "Dublin ",
    "shortName": "Dublin",
    "municipalityName": "Dublin",
    "location": {
        "lat": 53.4213,
        "lon": -6.27007
    },
    "countryCode": "IE",
    "localCode":""
}
  currentAirportTime!:string;
  airportName:string = "Dublin Airport";
  isLoading:boolean = false;
  flights!:Array<CompleteFlightData>;
  showingArrivals:boolean = true;
  updateFrequencyInMins:number = 5;
  intervalID:any;
  // requestConfig!:RequestConfig;


    // Pagination properties
  fullArrivalsList!:Array<Flight>;
  fullDeparturesList!:Array<Flight>

  departuresCache: {[key:number]:Array<CompleteFlightData>} = {};
  arrivalsCache: {[key:number]:Array<CompleteFlightData>} = {};
  startingTime!:string;
  endingTime!:string;


  offset:number = 0;
  pageSize:number = 20;

    constructor(private networkService:NetworkService,public utility:UtilityService,
      public tableUtility:LandingPageUtilityService,
      public dataService:DataService,public router:Router ,
      public dialog:MatDialog,
      private trackingService:TrackingService,
      private pagService:PaginationService
      ){
      
    }

    
    ngOnInit(){
          // this.loadHardcodedData();

          this.fetchNewAirport(this.currentAirport)
          this.intervalID = setInterval(this.updateAirportSchedule.bind(this),this.updateFrequencyInMins * 60000)

          console.log("FLIGHTS API URL:");
          console.log(process.env['FLIGHTS_API_URL']);
    }

    ngOnDestroy(){

        if(this.intervalID)  clearInterval(this.intervalID);

    }

    // Data loading 

    fetchNewAirport(airportData:AirportData){
      console.log("airport data:")
      console.log(airportData);
      this.currentAirport = airportData; 
      this.airportName = this.currentAirport.name;
      this.networkService.getAirportData(airportData.icao).subscribe((data) => {this.currentAirportTime = data.currentTime.localTime; this.getAirportSchedule(data.currentTime.localTime) } ) 
    }

    getAirportSchedule(airportTime:string){
        this.isLoading = true;

      
      this.showingArrivals = true;

      if(this.s1) this.s1.unsubscribe();

      if(this.s2) this.s2.unsubscribe();

      let aux = this.tableUtility.computeTimeframe(airportTime);
      this.startingTime = aux.startingTime;
      this.endingTime = aux.endingTime;

      console.log("Starting Time:" + this.startingTime)

      console.log("Ending Time:" + this.endingTime)

      this.s1 = this.networkService.getScheduledFlights(this.currentAirport,this.startingTime,this.endingTime).subscribe(this.receiveAirportSchedule.bind(this),this.handleError.bind(this));
    }

    updateAirportSchedule(){
      // this.isLoading = true;
      // this.showingArrivals = true;

      if(this.s1) this.s1.unsubscribe();

      if(this.s2) this.s2.unsubscribe();

      this.s1 = this.networkService.getScheduledFlights(this.currentAirport,this.startingTime,this.endingTime).subscribe(this.receiveUpdatedAirportSchedule.bind(this),this.handleError.bind(this));
    }

    


    receiveAirportSchedule(response:AirportScheduleResponse){
      console.log(response);

      this.fullArrivalsList = response.arrivals;

      this.tableUtility.orderScheduleByTime(this.fullArrivalsList,"Arrivals")

      console.log("ordered arrivals:")
      console.log(this.fullArrivalsList);

       //emptying cache
       this.arrivalsCache = {};

      this.pagService.configurePaginator({limit:this.pageSize,currentPage:1,total:this.fullArrivalsList.length});


      this.fullDeparturesList = response.departures;

      this.tableUtility.orderScheduleByTime(this.fullDeparturesList,"Departures")

      console.log("ordered departures:")
      console.log(this.fullDeparturesList);

       //emptying cache
       this.departuresCache = {};

      //emptying cache

    this.offset = 0;  
    this.getArrivalsPage();

      // this.isLoading = false;
    }


    filterArrivals(arrivals:Array<Flight>){
         return arrivals.filter((arrival) => {
                  let num = arrival.number;

                  if(this.fullArrivalsList.map((elem) => elem.number).includes(num)){
                    return true;
                  }else{
                    return false;
                  }

            })
    }

    filterDepartures(departures:Array<Flight>){
      return departures.filter((departure) => {
        let num = departure.number;

        if(this.fullDeparturesList.map((elem) => elem.number).includes(num)){
          return true;
        }else{
          return false;
        }
    })
  }

  getMatchingFlights(trackedFlights:Array<CompleteFlightData>, flights:Array<Flight>){

    return flights.filter(f => trackedFlights.map(elem => elem.flight.number).includes(f.number))
  }


  updateTrackedFlights(){
    let trackedArrivals = this.getMatchingFlights(this.trackingService.getTrackedFlights(), this.fullArrivalsList);

    let trackedDepartures = this.getMatchingFlights(this.trackingService.getTrackedFlights(), this.fullDeparturesList);


    console.log("tracked arrivals:")

    console.log(trackedArrivals)

    console.log("tracked departures:")

    console.log(trackedDepartures)

    if(trackedArrivals.length > 0 && trackedDepartures.length > 0){
      this.networkService.updateTrackedFlights(trackedArrivals,trackedDepartures,this.currentAirport).subscribe((response:any) => {

        // this.trackingService.trackedFlights = [...response[0],...response[1]]
        this.trackingService.trackedFlightsChanged([...response[0],...response[1]])
  
        console.log("trackingService.trackedFlights:");
        console.log(this.trackingService.trackedFlights)
      })
    }else if(trackedArrivals.length > 0){
      this.networkService.updateTrackedArrivals(trackedArrivals,this.currentAirport).subscribe((response:any) => {


        console.log("REACCCCCCCCHHHHHHHHEEEEEED");

        // this.trackingService.trackedFlights = response;
        this.trackingService.trackedFlightsChanged(response)
  
        console.log("trackingService.trackedFlights:");
        console.log(this.trackingService.trackedFlights)
      })
    }else{
      this.networkService.updateTrackedDepartures(trackedDepartures,this.currentAirport).subscribe((response:any) => {

        // this.trackingService.trackedFlights = response;
        this.trackingService.trackedFlightsChanged(response)
  
        console.log("trackingService.trackedFlights:");
        console.log(this.trackingService.trackedFlights)
      })
    }

    

   


  }



    receiveUpdatedAirportSchedule(response:AirportScheduleResponse){
      console.log(response);


      // this.fullArrivalsList = this.filterArrivals(response.arrivals);
      this.fullArrivalsList = response.arrivals;

      this.tableUtility.orderScheduleByTime(this.fullArrivalsList,"Arrivals")

      //emptying cache
      this.arrivalsCache = {};

      // this.pagService.configurePaginator({limit:this.pageSize,currentPage:1,total:this.fullArrivalsList.length});


      // this.fullDeparturesList = this.filterDepartures(response.departures);
      this.fullDeparturesList = response.departures;

      this.tableUtility.orderScheduleByTime(this.fullDeparturesList,"Departures")

      //emptying cache
      this.departuresCache = {};

      console.log("Updated Arrivals List")
      console.log(this.fullArrivalsList)

      console.log("Updated Departures List")
      console.log(this.fullDeparturesList)


      this.updateTrackedFlights();

      
      

    // this.offset = 0;  
    if(this.showingArrivals){
      this.getUpdatedArrivalsPage();
    }else{
      this.getUpdatedDeparturesPage();
    }

      // this.isLoading = false;
    }



  // Pagination functionality

  onPageChange(page:number){
    this.offset = (page - 1) * this.pageSize;
    console.log("new page" + this.offset);

    if(this.showingArrivals){
      if(this.arrivalsCache[this.offset]){
        this.arrivals = this.arrivalsCache[this.offset]
        this.flights = this.arrivals;
        return
      }

      this.getArrivalsPage();
    }
    else{
      if(this.departuresCache[this.offset]){
        this.departures = this.departuresCache[this.offset]
        this.flights = this.departures;
        return
      }

      this.getDeparturesPage();
    }
}


getArrivalsPage(){
  let substr = this.fullArrivalsList.slice(this.offset,this.offset + this.pageSize);
  console.log(substr);

  this.isLoading = true;

  this.networkService.getPageData(substr,"Arrival",this.currentAirport).subscribe(this.receiveArrivals.bind(this))
}

getUpdatedArrivalsPage(){
  let substr = this.fullArrivalsList.slice(this.offset,this.offset + this.pageSize);
  console.log(substr);

  // this.isLoading = true;

  this.networkService.getPageData(substr,"Arrival",this.currentAirport).subscribe(this.receiveArrivals.bind(this))
}

getDeparturesPage(){
let substr = this.fullDeparturesList.slice(this.offset,this.offset + this.pageSize);

this.isLoading = true;

this.networkService.getPageData(substr,"Departure",this.currentAirport).subscribe(this.receiveDepartures.bind(this))
}

getUpdatedDeparturesPage(){
  let substr = this.fullDeparturesList.slice(this.offset,this.offset + this.pageSize);
  
  // this.isLoading = true;
  
  this.networkService.getPageData(substr,"Departure",this.currentAirport).subscribe(this.receiveDepartures.bind(this))
  }

// end of pagination functionality


  receiveArrivals(data:Array<CompleteFlightData>){

    console.log("arrivals:");

    console.log(data);

    this.arrivals = data;
    this.flights = this.arrivals;



    //writing to cache
    this.arrivalsCache[this.offset] = this.flights;


    this.isLoading = false;
  }


  receiveDepartures(data:Array<CompleteFlightData>){

    console.log("departures:");

    console.log(data);

    this.departures = data;

    this.flights = this.departures;



    //writing to cache
    this.departuresCache[this.offset] = this.flights;

    this.isLoading = false;
  }


  handleError(err:any){
    console.log(err);

    this.isLoading = false;
    alert("Failed to load data!\nPlease try again!")
    
  }


  // handleError(err:any){
  //   console.log(err);


  //   if(err?.error?.error === "429 Too Many Requests"){

  //     this.flightCount = this.flightCount - 20;
  //     if(this.flightCount < 20) this.flightCount = 20;

  //     console.log("flight count:" + this.flightCount);
  //     this.getAirportSchedule(this.currentAirportTime)
  //   }else{
  //     // trying to fetch again
  //     setTimeout(() => {this.fetchNewAirport(this.currentAirport)},5000)
  //   }
  // }


  loadHardcodedData(){
    this.arrivals = this.dataService.arrivals;
    this.departures = this.dataService.departures;
    this.flights = this.arrivals;
  }

  readLocalStorage(){
   this.arrivals =  JSON.parse(localStorage.getItem('arrivals')!);
   this.departures = JSON.parse(localStorage.getItem('departures')!);
   this.flights = this.arrivals;

   console.log(this.arrivals);
   console.log(this.departures);
  }


  //              ---------------------------------------------- end of data loading --------------------------------------------------------------------



    // displayAircraftICAO24(flightData:CompleteFlightData){
    //   console.log(flightData.flight.aircraft.modeS);
    // }




    //    ------------------------------------------------ UI triggered functions -----------------------------------------------------

    onFlightClick(event:Event,flightData:CompleteFlightData){
      let elem = event.target as HTMLElement;

      if(elem.classList.contains("track-btn")) return;

      this.openDialog('0ms','0ms',flightData)
    }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string, flightData:CompleteFlightData): void {


      this.dialog.open(FlightDetailModalComponent, {
        width: '95vw',
        height:'80vh',
        maxWidth:'1200px',
        data:flightData,
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }

    goToTrackingPage(flightData:CompleteFlightData){

      console.log(flightData)

      this.trackingService.addTrackedFlight(flightData);

      this.router.navigate(["tracking"]);

    }

    filterFlights(keywordInput:HTMLInputElement){
      let term = keywordInput.value;

      if(term === "") this.flights = this.showingArrivals ? this.arrivals : this.departures;

      this.flights = this.tableUtility.getMatchingFlights(term,this.flights);
    }

    showArrivals(){
        if(this.showingArrivals) return;

      this.showingArrivals = true;

      this.offset = 0;
      this.pagService.configurePaginator({ currentPage:1, total:this.fullArrivalsList.length,limit:this.pageSize  })

      if(this.arrivalsCache[this.offset]){
        this.arrivals = this.arrivalsCache[this.offset];
        this.flights = this.arrivals;
        return;
      }
      this.getArrivalsPage();

      
    }

    showDepartures(){
      if(!this.showingArrivals) return;

      this.showingArrivals = false;

      this.offset = 0;
      this.pagService.configurePaginator({currentPage:1, total:this.fullDeparturesList.length,limit:this.pageSize  })

      if(this.departuresCache[this.offset]){
        this.departures = this.departuresCache[this.offset];
        this.flights = this.departures;
        return;
      }
      this.getDeparturesPage();
    }

    // showFlightDetails(flightData:CompleteFlightData){
    //   console.log("flight details:");

    //   console.log(flightData);
    // }


    
}
