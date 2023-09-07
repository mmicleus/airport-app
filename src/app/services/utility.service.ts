import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  prependZero(nr:number){
    return nr > 9 ? nr :  "0" + nr.toString();
  }

  getMonthNameByIndex(index:number){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    return months[index];
  }

  getFullMonthNameByIndex(index:number){
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return mL[index];
  }

  getWeekdayByIndex(index:number){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return days[index];
  }


  getTodayDate(hour:string){
    let today = new Date();

    let year = today.getFullYear();

    let month = this.prependZero(today.getMonth() + 1);

    let date = this.prependZero(today.getDate());

    return `${year}-${month}-${date}T${hour}`

  }

  getTodayDateUTC(hour:string){
    let today = new Date();

    today = new Date(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate(),today.getUTCHours())

    console.log("UTC TIME:")

    console.log(today)

    let year = today.getFullYear();

    let month = this.prependZero(today.getMonth() + 1);

    let date = this.prependZero(today.getDate());

    return `${year}-${month}-${date}T${hour}`
  }

  getTomorrowDate(hour:string){
    let today = new Date();

    
    let tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)


    let year = tomorrow.getFullYear();
    let month = this.prependZero(tomorrow.getMonth() + 1);
    let date = this.prependZero(tomorrow.getDate());

    return `${year}-${month}-${date}T${hour}`
  }

  getTomorrowDateUTC(hour:string){

    let today = new Date();
    let todayUTC = new Date(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate(),today.getUTCHours())

    
    
    // let tomorrow = new Date(today)
    todayUTC.setDate(todayUTC.getDate() + 1)


    let year = todayUTC.getFullYear();
    let month = this.prependZero(todayUTC.getMonth() + 1);
    let date = this.prependZero(todayUTC.getDate());

    return `${year}-${month}-${date}T${hour}`
  }


  getYesterdayDate(hour:string){
  
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)


    let year = yesterday.getFullYear();
    let month = this.prependZero(yesterday.getMonth() + 1);
    let date = this.prependZero(yesterday.getDate());

    return `${year}-${month}-${date}T${hour}`
  }

  getYesterdayDateUTC(hour:string){

    let today = new Date();
    let yesterday = new Date(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate(),today.getUTCHours())
  
    yesterday.setDate(yesterday.getDate() - 1)


    let year = yesterday.getFullYear();
    let month = this.prependZero(yesterday.getMonth() + 1);
    let date = this.prependZero(yesterday.getDate());

    return `${year}-${month}-${date}T${hour}`
  }


  getFormattedDate(date:string){
    let dateObject = new Date(date);

    let hour = this.prependZero(dateObject.getHours());
    let minute = this.prependZero(dateObject.getMinutes());

    let dateOfMonth = dateObject.getDate();

    let month = this.getMonthNameByIndex(dateObject.getMonth()).toUpperCase();

      return `${hour}:${minute}, ${dateOfMonth} ${month}`;
  }


  getFormattedTime(date:string){
    let dateObject = new Date(date);

    let hour = this.prependZero(dateObject.getHours());
    let minute = this.prependZero(dateObject.getMinutes());

    // let dateOfMonth = dateObject.getDate();

    // let month = this.getMonthNameByIndex(dateObject.getMonth()).toUpperCase();

      return `${hour}:${minute}`;
  }


  getFullFormattedDate(date:string){

    let dateObject = new Date(date);

    // let hour = this.prependZero(dateObject.getHours());
    // let minute = this.prependZero(dateObject.getMinutes());
    let dayOfWeek = this.getWeekdayByIndex(dateObject.getDay()).toUpperCase();
    let month = this.getFullMonthNameByIndex(dateObject.getMonth()).toUpperCase();
    let dateOfMonth = dateObject.getDate();
    let year = dateObject.getFullYear();

    return `${dayOfWeek}, ${month} ${dateOfMonth}, ${year}`;
  }

  extractTime(date:string){
    let dateObject = new Date(date);

    let hour = this.prependZero(dateObject.getHours());
    let minute = this.prependZero(dateObject.getMinutes());

    return `${hour}:${minute}`;
  }

  
}
