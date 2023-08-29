import { Component,ElementRef,Input, OnDestroy,OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription, catchError, forkJoin, map, of} from 'rxjs'
import { CompleteAirportInfo, CompleteFlightData, Coords, FullFlightCoords, NetworkService } from 'src/app/services/network.service';
import { TrackingService } from './tracking.service';




type ResponseUnit = CompleteData | string;

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};



export interface CompleteData{
  // represents coords of the destination and source airports and the coords of the aircraft
  coords:FullFlightCoords,
  // Contains flight data
  completeFlightData:CompleteFlightData,
  markerColor:string,
  shown:boolean
}





@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnDestroy,OnInit {
  // @Input() flightData:any;
  // @ViewChild('myMap') map!:ElementRef;


  myMap!:google.maps.Map
  markers:Array<google.maps.Marker> = [];



  flightData!:CompleteFlightData;
  coordsData!:FullFlightCoords;
  aircraftPosition!:google.maps.LatLngLiteral;
  srcAirportPosition!:google.maps.LatLngLiteral;
  srcAirportData!:any;
  destAirportData!:any;
  destAirportPosition!:google.maps.LatLngLiteral;
  trackedFlights:Array<CompleteData> = [];
  // selectedFlights:Array<CompleteData> = [];
  intervalInMinutes = 5;
  intervalID!:any;


    sub1!:Subscription;
    sub2!:Subscription;
    sub3!:Subscription;
    display:any;
    center:google.maps.LatLngLiteral = {lat:24, lng:12};
    zoom = 4;


  constructor(public activatedRoute:ActivatedRoute,
    public networkService:NetworkService,
    public trackingService:TrackingService){

  }


    ngOnInit(){


        console.log(this.myMap)

    // let trackedFlights = 

    let trackedFlights = this.trackingService.getTrackedFlights()

    this.getTrackedFlights(trackedFlights);

   this.sub1 =  this.trackingService.onTrackedFlightsChanged.subscribe((response:any) => {
      console.log("update occured!!!")
      this.updateTrackedFlights();
    })

    }


    ngOnDestroy(): void {

      if(this.intervalID) clearInterval(this.intervalID)

      if(this.sub1){
        this.sub1.unsubscribe();
      }

      if(this.sub2){
        this.sub2.unsubscribe();
      }

      if(this.sub3){
        this.sub3.unsubscribe();
      }


          // this.sub1.unsubscribe();
          // this.sub2.unsubscribe();
      }

      handleMapInitialized(map: google.maps.Map){

        this.myMap = map;
        this.myMap.setOptions({streetViewControl:false})
  
        
        // this.markers.forEach((marker: MarkerProperties) => {
        //   new google.maps.Marker({
        //     position: marker.position,
        //     map,
        //   }).addListener('click',()=>{console.log("Event Captured")});
        // });
  
        console.log(this.myMap);
      }

    



    



    getTrackedFlights(flights:CompleteFlightData[]){
     this.sub2 =  forkJoin( flights.map( (flight:CompleteFlightData) => { return this.networkService.getFlightData(flight.flight.number).pipe(
        map((response:any) => {
          return {
          coords:response,
          completeFlightData:flight,
          markerColor:"",
          shown:true
          }
        }),
        catchError((err) => {
          
          console.log(err); 
          this.trackingService.removeTrackedFlight(flight.flight.number);  
          
          alert(`Failed to load flight ${flight.flight.number}`)
          return of('Oops!')

        } )) } 

        // catchError((err) => {console.log(err);return of('Oops!')})) } 
        
        
        ) ).subscribe(this.handleComplexResponse.bind(this))
      // forkJoin( flights.map( (flight:CompleteFlightData) => this.networkService.getFlightData(flight.flight.number).pipe(catchError((err) => {console.log(err);return of('Oops!')})) ) ).subscribe(this.handleComplexResponse.bind(this))
    }


    isSelected(flight:CompleteFlightData){

      let nr = flight.flight.number;

      if(!this.trackedFlights.find(f => f.completeFlightData.flight.number === nr)) return false;
      return this.trackedFlights.find(f => f.completeFlightData.flight.number === nr)!.shown
    }


    updateTrackedFlights(){
        let flights = this.trackingService.getTrackedFlights();

    this.sub3 = forkJoin( flights.map( (flight:CompleteFlightData) => { return this.networkService.getFlightData(flight.flight.number).pipe(
        map((response:any) => {
          return {
          coords:response,
          completeFlightData:flight,
          markerColor:"",
          shown:this.isSelected(flight)
          }
        }),
        catchError((err) => {
          
          console.log(err); 
          this.trackingService.removeTrackedFlight(flight.flight.number);  
          
          alert(`Failed to load flight ${flight.flight.number}`)
          return of('Oops!')

        } )) } 

        // catchError((err) => {console.log(err);return of('Oops!')})) } 
        
        
        ) ).subscribe(this.handleUpdateResponse.bind(this))
      // forkJoin( flights.map( (flight:CompleteFlightData) => this.networkService.getFlightData(flight.flight.number).pipe(catchError((err) => {console.log(err);return of('Oops!')})) ) ).subscribe(this.handleComplexResponse.bind(this))
    }


    // getSelectedFlights(flights:Array<CompleteData>){
      
      

 


    deleteAllMarkers(){

      if(!this.markers) return;
        this.markers.forEach((marker) => marker.setMap(null));
        this.markers.length = 0;
    }


     renderMarkers(flights:Array<CompleteData>){
        this.deleteAllMarkers();

     let shownFlights = this.trackedFlights.filter(flight => flight.shown === true)

     shownFlights.forEach((flight:CompleteData) => {

          let srcAirportMarker = new google.maps.Marker({
              position:flight.coords.srcAirport.coords,
              icon:this.getLocationIcon(flight.markerColor),
              map:this.myMap

          })

          let srcAirportWindow:google.maps.InfoWindow;
          let clickedSrcAirportWindow:boolean = false;

          srcAirportMarker.addListener('mouseover',()=>{
            if(clickedSrcAirportWindow) return;
           srcAirportWindow = this.openAirportInfoWindow(srcAirportMarker,flight.coords.srcAirport.completeData)
          })

          srcAirportMarker.addListener('click',()=>{
            if(clickedSrcAirportWindow) return;
            if(srcAirportWindow) srcAirportWindow.close();

            

            clickedSrcAirportWindow = true;
            
            srcAirportWindow = this.openAirportInfoWindow(srcAirportMarker,flight.coords.srcAirport.completeData)
            srcAirportWindow.addListener("closeclick",() => {clickedSrcAirportWindow = false;})
           })

          

          srcAirportMarker.addListener('mouseout',()=>{
            if(clickedSrcAirportWindow) return;

            if(srcAirportWindow) this.closeInfoWindow(srcAirportWindow)
          })

          // srcAirportMarker.addListener('click',()=>{
          //   this.openAirportInfoWindow(srcAirportMarker,flight.coords.srcAirport.completeData)
          // })

          let destAirportWindow:google.maps.InfoWindow;
          let destAirportWindowClicked:boolean = false;

          let destAirportMarker = new google.maps.Marker({
            position:flight.coords.destAirport.coords,
            icon:this.getLocationIcon(flight.markerColor),
            map:this.myMap

        })

        destAirportMarker.addListener('mouseover',()=>{
          if(destAirportWindowClicked) return;
          destAirportWindow = this.openAirportInfoWindow(destAirportMarker,flight.coords.destAirport.completeData)
        })

        destAirportMarker.addListener("click",() => {
            if(destAirportWindowClicked) return;
            if(destAirportWindow) destAirportWindow.close();

            destAirportWindowClicked = true;
            destAirportWindow = this.openAirportInfoWindow(destAirportMarker,flight.coords.destAirport.completeData)
            destAirportWindow.addListener("closeclick",()=>{destAirportWindowClicked = false;})
        })

        destAirportMarker.addListener('mouseout',()=>{
          if(destAirportWindowClicked) return;
            if(destAirportWindow) this.closeInfoWindow(destAirportWindow)
        })


        let aircraftWindow:google.maps.InfoWindow;
        let aircraftMarkerClicked:boolean = false;

        let aircraftMarker = new google.maps.Marker({
          position:flight.coords.geography.aircraftCoords,
          icon:this.getCircleIcon(flight.markerColor),
          map:this.myMap
      })

      aircraftMarker.addListener('mouseover',()=>{
        if(aircraftMarkerClicked) return;
          aircraftWindow = this.openAircraftInfoWindow(aircraftMarker,flight)
      })

      aircraftMarker.addListener('click',()=>{
        if(aircraftMarkerClicked) return;
        if(aircraftWindow) aircraftWindow.close();

        aircraftMarkerClicked = true;
        aircraftWindow = this.openAircraftInfoWindow(aircraftMarker,flight)
        aircraftWindow.addListener("closeclick",()=>{aircraftMarkerClicked=false;})


      })

      aircraftMarker.addListener('mouseout',()=>{
        if(aircraftMarkerClicked) return;
        this.closeInfoWindow(aircraftWindow);
    
    })


      this.markers.push(srcAirportMarker,destAirportMarker,aircraftMarker);
     })
     }


     createAirportWindowElement(airport:CompleteAirportInfo){
          let elem = document.createElement('div');

          // elem.style.width = 'fit-content';
          // elem.style.maxWidth = '1000px';
          elem.style.padding = "1rem";


          elem.innerHTML = `<div class="container">
          <div class="row mb-2">
              <div class="col-6">
                  <div class="name-container">
                      <div  style="font-weight:bold; font-size:1.2rem;">Name</div>
                      <div style="font-weight:bold; font-size:0.9rem;">${airport.fullName}</div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="icao-container">
                      <div  style="font-weight:bold; font-size:1.2rem;">ICAO</div>
                      <div style="font-weight:bold; font-size:0.9rem;">${airport.icao}</div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-6">
                  <div class="country-container">
                      <div  style="font-weight:bold; font-size:1.2rem;">Country</div>
                      <div style="font-weight:bold; font-size:0.9rem;">${airport.country.name}</div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="Iata-container">
                    <div  style="font-weight:bold; font-size:1.2rem;">IATA</div>
                    <div style="font-weight:bold; font-size:0.9rem;">${airport.iata}</div>
                  </div>
              </div>
          </div>
      </div>

      <hr>

      <div class="container mt-4">
          <div class="row mb-2">
              <div class="col-6">
                  <div class="latitude-container">
                      <div  style="font-weight:bold; font-size:1.2rem;">Latitude</div>
                      <div style="font-weight:bold; font-size:0.9rem;">${airport.location.lat}</div>
                  </div>
              </div>
              <div class="col-6">
                <div class="elevation-container">
                  <div  style="font-weight:bold; font-size:1.2rem;">Elevation(ft)</div>
                  <div style="font-weight:bold; font-size:0.9rem;">${airport.elevation.feet}</div>
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-6">
                  <div class="longitude-container">
                      <div  style="font-weight:bold; font-size:1.2rem;">Longitude</div>
                      <div style="font-weight:bold; font-size:0.9rem;">${airport.location.lon}</div>
                  </div>
              </div>
              <div class="col-6">
              <div class="timezone-container">
                <div  style="font-weight:bold; font-size:1.2rem;">Time Zone</div>
                <div style="font-weight:bold; font-size:0.9rem;">${airport.timeZone}</div>
              </div>
              </div>
          </div>
      </div>`;

          return elem;
    
     }

     createAircraftWindowElement(flight:CompleteData){
      let elem = document.createElement('div')

      elem.style.padding = "1rem";


      let airlineLogoHTML = flight.completeFlightData.logo ? 
     ` <img src="${flight.completeFlightData.logo}" alt="">`
  : `<div style="font-weight:bold;font-size:1.5rem;">${flight.completeFlightData.flight.airline.name}</div>`;

       elem.innerHTML = `<div class="header mb-2" style="display: flex;">
       <div class="header-col-1">
           <div class="flight-nr" style="font-weight:bold; font-size:1.4rem;">${flight.completeFlightData.flight.number}</div>
       </div>
   </div>
   <div class="info-flight-details mb-2" style="display: flex;">
       <div class="source-airport">
           <span class="iata-code" style="font-weight:bold; font-size:1.2rem;">${flight.coords.srcAirport.completeData.iata}</span>
           <br>
           <span class="airport-subname" style="font-weight:bold; font-size:0.9rem;">${flight.coords.srcAirport.completeData.shortName}</span>
       </div>
       

       <div class="d-flex align-items-center plane-logo ms-3 me-3" ><i class="fa-solid fa-plane"></i></div>
       
       <div class="destination-airport">
           <span class="iata-code" style="font-weight:bold; font-size:1.2rem;">${flight.coords.destAirport.completeData.iata}</span>
           <br>
           <span class="airport-subname" style="font-weight:bold; font-size:0.9rem;">${flight.coords.destAirport.completeData.shortName}</span>
       </div>
   </div>

   <div class="aircraft-info mb-2" style="display: flex;">
       <div class="aircraft-type"  style="margin-right:1rem">
           <span style="font-weight:bold; font-size:1.2rem;">Aircraft Type</span><br>
           <span style="font-weight:bold; font-size:0.9rem;">${flight.completeFlightData.flight.aircraft.model}</span>
       </div>
   </div>

   <div class="flight-details">
       <div class="location d-flex">

       <div class="mb-2 me-3">
          <div class="lat" style="font-weight:bold; font-size:1.2rem;">Latitude</div>
          <span style="font-weight:bold; font-size:0.9rem;">${flight.coords.geography.aircraftCoords.lat}</span>
       </div>
           
       <div class="mb-2">
          <div class="lng" style="font-weight:bold; font-size:1.2rem;">Longitude</div>
          <span style="font-weight:bold; font-size:0.9rem;">${flight.coords.geography.aircraftCoords.lng}</span>
       </div>
           

       </div>

       <div class="altitude">
           <div style="font-weight:bold; font-size:1.2rem;">Altitude</div>

         <span style="font-weight:bold; font-size:0.9rem;">
           <span>${flight.coords.geography.altitude}</span> <span>m</span>
       </span>   
           
       </div>

   </div>

   <div class="airline-logo d-flex justify-content-center mt-3" >
          ${airlineLogoHTML}
    </div>`

           return elem;
     }



     openAircraftInfoWindow(marker:google.maps.Marker,flight:CompleteData){

      console.log("flight information:")
      console.log(flight)
        let infoWindow = new google.maps.InfoWindow({
          content: this.createAircraftWindowElement(flight)
        });

        infoWindow.open({
          map:this.myMap,
          anchor:marker
        })

        return infoWindow;
     }

     openAirportInfoWindow(marker:google.maps.Marker,airport:CompleteAirportInfo){

      let infoWindow = new google.maps.InfoWindow({
        content:this.createAirportWindowElement(airport),
        maxWidth:1000
      });

      infoWindow.setContent(infoWindow.getContent())

      infoWindow.open({
        map:this.myMap,
        anchor:marker
      })

      return infoWindow;

   }

   closeInfoWindow(window:google.maps.InfoWindow){
      window.close();
   }





    handleComplexResponse(resp:Array<ResponseUnit>){
      console.log(resp)

      this.trackedFlights = (resp.filter((response) => response!== "Oops!") as Array<CompleteData>)
      this.trackedFlights.forEach((flight,index) => flight.markerColor = this.getColorByIndex(index))

      this.renderMarkers(this.trackedFlights);
      // this.selectedFlights = [...this.trackedFlights];

      // this.selectedFlights = this.getSelectedFlights(this.trackedFlights);



      // this.trackingService.onTrackedFlightsUpdated(this.trackedFlights);
      this.trackingService.onTrackedFlightsUpdated([...this.trackedFlights]);

      console.log(this.trackedFlights);
    }


    getShownFlights(){
      return this.trackedFlights.filter(flight => flight.shown === true)
    }

    findAvailableColor(assignedColors:string[]){
      let colors = ["kaki","yellow","black","blue","green","grey","orange","pink","purple","red"]

     let markerColor = colors.find((color:string) => !this.trackedFlights.map((f) => f.markerColor).includes(color) && !assignedColors.includes(color) )

      if(markerColor) return markerColor

      return "";


    }


    getMarkerColor(flight:CompleteData,assignedColors:string[]){
      let elem = this.trackedFlights.find((elem) => elem.completeFlightData.flight.number === flight.completeFlightData.flight.number)

      if(!elem) return this.findAvailableColor(assignedColors)
      
      return elem.markerColor;

    }


    handleUpdateResponse(resp:Array<ResponseUnit>){
      
      let aux =  (resp.filter((response) => response!== "Oops!") as Array<CompleteData>)

      let assignedColors:string[] = [];


     aux.forEach((flight) => flight.markerColor = this.getMarkerColor(flight,assignedColors))



      this.trackedFlights = aux;
      this.trackedFlights.forEach((flight,index) => flight.markerColor = this.getColorByIndex(index))


      this.renderMarkers(this.trackedFlights);


     console.log("selected flights");

     console.log(this.getShownFlights())
      // this.selectedFlights = [...this.trackedFlights];

      // this.selectedFlights = this.getSelectedFlights(this.trackedFlights);


      this.trackingService.onTrackedFlightsUpdated([...this.trackedFlights]);

      console.log(this.trackedFlights);
    }


    handleResponse(data:FullFlightCoords){
      console.log(data);

      this.coordsData = data;

      // this.aircraftPosition = {lat:this.coordsData.geography.latitude,lng:this.coordsData.geography.longitude}


      // this.srcAirportPosition = this.coordsData.srcAirportCoords;
      // this.destAirportPosition = this.coordsData.destAirportCoords;
    }

    handleError(error:any){
      console.log(error);

      alert("Couldn't track flight!");
    }




    // getAirportCoords(icao:string,aiportType:string){
    //     this.networkService.getAirportData(icao).subscribe((data) => {
    //         if(aiportType === "src"){
    //           this.srcAirportData = data;
    //           this.srcAirportPosition = {lat:data.location.lat,lng:data.location.lon}
    //         }else{
    //           this.destAirportData = data;
    //           this.destAirportPosition = {lat:data.location.lat,lng:data.location.lon}
    //         }

    //         console.log(data);
    //     })
    // }

    moveMap(event:google.maps.MapMouseEvent){
      if(event.latLng!=null)
      this.center = (event.latLng.toJSON())
    }

    onAirportClicked(config:{coords:Coords,zoom:number}){
        this.centerAndZoomMap(config.coords,config.zoom)
    }

    centerAndZoomMap(coords:Coords,zoom:number){
        this.center = coords;
        // this.zoom = zoom;
        this.myMap.setZoom(zoom)

    }

    showSrcAirportWindow(event:Event,airportInfo:CompleteAirportInfo){

      console.log("Source Airport:")
      console.log(airportInfo)
        // flight.completeFlightData.
    }

    showDestAirportWindow(event:Event,airportInfo:CompleteAirportInfo){
      console.log("Destination Airport:")
      console.log(airportInfo)
    }

    showAircraftCoordsWindow(event:Event,flight:CompleteData){
      console.log("Complete Data:");
      console.log(flight);
    }

    onMapClicked(){
      console.log("map clicked");
    }

    // markers: MarkerProperties[] = [
    //   { position: { lat: 48.8584, lng: 2.2945 }}, // Eiffel Tower
    //   { position: { lat: 48.8606, lng: 2.3376 }}, // Louvre Museum
    //   { position: { lat: 48.8530, lng: 2.3499 }}, // Cathédrale Notre-Dame de Paris
    // ];

    




    move(event:google.maps.MapMouseEvent){
      if(event.latLng != null)
        this.display = event.latLng.toJSON();
    }

    deleteTrackedFlight(index:number){
      let newArray = [];
  
      for(let i = 0;i < this.trackedFlights.length;i++){
        if(i!==index) newArray.push(this.trackedFlights[i])
  
      }
  
      this.trackedFlights = newArray;

      this.renderMarkers(this.trackedFlights)
    }

    deleteFlight(flightNumber:string){
      let flightToDelete = this.trackedFlights.find((f) => f.completeFlightData.flight.number === flightNumber)

      if(!flightToDelete) return;
      let index = this.trackedFlights.indexOf(flightToDelete)

      // this.trackedFlights.splice(index,1);
      this.deleteTrackedFlight(index)

      this.trackingService.removeTrackedFlight(flightNumber);
    }

    // marker functionality
    markerOptions:google.maps.MarkerOptions = {draggable: false}
    markerPositions:google.maps.LatLngLiteral[] = [];

    addMarker(event:google.maps.MapMouseEvent){
      if(event.latLng != null)
        this.markerPositions.push(event.latLng.toJSON())
    }

    centerMap(coords:Coords){
      
      this.center = coords;
      this.myMap.setZoom(12);
      // this.zoom = 12;
    }

    addSelectedFlight(flight:CompleteData){
      let aux = this.trackedFlights.find((f) => f.completeFlightData.flight.number === flight.completeFlightData.flight.number)
      // this.selectedFlights.push(flight);

      if(!aux) return;
      aux.shown = true;


      this.renderMarkers(this.trackedFlights)

      console.log("added flight:");
      console.log(aux)
    }


    removeSelectedFlight(flightNr:string){
      // let aux = this.selectedFlights.find((flight) => flight.completeFlightData.flight.number === flightNr)
      let aux = this.trackedFlights.find((flight) => flight.completeFlightData.flight.number === flightNr)

      if(!aux) return;

      aux.shown = false;

      this.renderMarkers(this.trackedFlights)

      console.log("remove flight:");
      console.log(aux);

      // this.selectedFlights.splice(this.selectedFlights.indexOf(aux),1)
    }



    getColorByIndex(index:number){
      let colors = ["kaki","yellow","black","blue","green","grey","orange","pink","purple","red"]

      return colors[index]
    }

    


    // getLocationIcon(color:string){

    //   // let color = this.getColorByIndex(index)
      
    //   return {
    //             icon: `assets/markers/location-${color}.svg`
    //          } 
    // }

    getLocationIcon(color:string){

      // let color = this.getColorByIndex(index)
      
      return `assets/markers/location-${color}.svg`
             
    }

    getCircleIcon(color:string){

      
      return `assets/markers/circle-${color}.svg`;
      
    }

    // getCircleIcon(color:string){

      
    //   return {
    //     icon: `assets/markers/circle-${color}.svg`
    //   } 
    // }


    getMapHeight(){
      return "calc(100vh-3.5rem)"
    }


}
