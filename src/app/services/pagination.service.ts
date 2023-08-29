import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

export interface PaginatorConfig{
    currentPage:number,
    total:number,
    limit:number
}

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() {
    

   }

  //  dataLoaded = new Subject<PaginatorConfig>();
   viewChanged = new Subject<PaginatorConfig>();


   configurePaginator(configObj:any){
    this.viewChanged.next(configObj);
   }



  //  emitDataLoaded(configObj:any){
  //   console.log(configObj)
  //     this.dataLoaded.next(configObj);
  //  }

  //  emitViewChanged(configObj:any){
  //   console.log(configObj)
  //   this.viewChanged.next(configObj);
  //  }

   

  








}
