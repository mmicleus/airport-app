import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import {Subject} from "rxjs"
import {Output} from '@angular/core'
import {EventEmitter} from '@angular/core'
import { AirportData, NetworkService } from 'src/app/services/network.service';
import { AirportSuggestionsResponse } from 'src/app/services/network.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
    @Output() airportSelected:EventEmitter<AirportData> = new EventEmitter<AirportData>();
    form!:FormGroup;
    airportSuggestions:Array<AirportData> | null = null;
    

    constructor(public network:NetworkService){}

  ngOnInit(){
    this.form = new FormGroup({
      searchAirport:new FormControl(null,[Validators.required])
    })

    this.form.valueChanges.subscribe(
      this.handleInput.bind(this)
      );
  }

  loadAirport(airportDetails:AirportData){
    this.airportSuggestions = null;
    console.log(airportDetails);
    this.airportSelected.emit(airportDetails);
  }

  handleInput(value:any){
    let term:string = value.searchAirport;

    if(term.length < 3){
      this.airportSuggestions = null;
      return;
    } 

    this.network.getAirportSuggestions(term).subscribe(this.receiveAirportSuggestions.bind(this),this.handleError.bind(this));
  }


  receiveAirportSuggestions(response:AirportSuggestionsResponse){

    
    this.airportSuggestions = response.items;

    console.log(this.airportSuggestions);
  }

  handleError(error:any){
    console.log(error);
  }

  // search(){
  //   if(this.form.get("searchAirport")?.value){
  //     this.typedIn.emit(this.form.get("searchAirport")?.value);
  //   }
  // }


}
