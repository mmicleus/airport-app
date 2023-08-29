import {Component, Injectable,Input,Output,EventEmitter, OnInit,ViewChild,ElementRef} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject, Subscription} from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { PaginationService } from 'src/app/services/pagination.service';
import { PaginatorConfig } from 'src/app/services/pagination.service';



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{
  // @Input() currentPage:number = 1;
  // @Input() total:number = 0;
  // @Input() limit:number = 20;

  currentPage:number = 20;
  total:number = 400;
  limit:number = 20;

  sub1!:Subscription;
  sub2!:Subscription;

  @Output() changePage = new EventEmitter<number>();
  @ViewChild('btnsContainer') btnsContainer!:ElementRef;
  @ViewChild('nextBtn') nextBtn!:ElementRef;
  @ViewChild('prevBtn') prevBtn!:ElementRef;
  @ViewChild('cont1') container1!:ElementRef;
  @ViewChild('cont2') container2!:ElementRef;
  @ViewChild('cont3') container3!:ElementRef;
  @ViewChild('ellipse1') ellipse1!:ElementRef;
  @ViewChild('ellipse2') ellipse2!:ElementRef;
 
  

  btnsCont!:HTMLElement;
  nextButton!:HTMLElement;
  prevButton!:HTMLElement;
  cont1!:HTMLElement;
  cont2!:HTMLElement;
  cont3!:HTMLElement;
  el1!:HTMLElement;
  el2!:HTMLElement;



  pagesCount!:number;


  pages:number[] = [];

  constructor(private pagService:PaginationService){

  }


  ngOnInit(): void {

    // setTimeout(()=> {this.renderBtns([4,5,6,7], <HTMLElement>this.container1.nativeElement)});

    setTimeout(()=> {
      
      this.onStart()
    
    });

    // this.getHTMLElements();
    // this.renderBtns([1,2,3],this.cont1);

    // this.sub1 = this.pagService.dataLoaded.subscribe((config:PaginatorConfig) => {

    //   this.currentPage = config.currentPage;
    //   this.total = config.total;
    //   this.limit = config.limit;
  
  
    //   this.computePagesCount();

    // });


    this.sub2 = this.pagService.viewChanged.subscribe((config:PaginatorConfig) => {

      this.currentPage = config.currentPage;
      this.total = config.total;
      this.limit = config.limit;

      this.computePagesCount();
  
   
    });

    // this.computePagesCount();
  }


  onStart(){
    this.getHTMLElements();
    this.computePagesCount();
    // this.renderBtns([1,2,3,4,5,6], this.cont1)
  }


  getHTMLElements(){
    this.btnsCont = (<HTMLElement>this.btnsContainer.nativeElement);

   this.nextButton =  (<HTMLElement>this.nextBtn.nativeElement);
   this.prevButton =  (<HTMLElement>this.prevBtn.nativeElement);


   this.cont1 =  (<HTMLElement>this.container1.nativeElement);
   this.cont2 =  (<HTMLElement>this.container2.nativeElement);
   this.cont3 =  (<HTMLElement>this.container3.nativeElement);


   this.el1 =  (<HTMLElement>this.ellipse1.nativeElement);
   this.el2 =  (<HTMLElement>this.ellipse2.nativeElement);
  }



  hideElements(...elems:Array<HTMLElement>){
        elems.forEach((elem) => elem.classList.add("hidden-elem"));
  }

  enableElements(...elems:Array<HTMLElement>){
        elems.forEach((elem) => elem.classList.remove("hidden-elem"));
  }



  clearPaginator(){
    this.cont1.innerHTML = "";
    this.cont2.innerHTML = "";
    this.cont3.innerHTML = "";
  }


  renderPaginator(pagesCount:number){

    this.clearPaginator();

    if(pagesCount <= 6){
      this.hideElements(this.cont1,this.cont3,this.el1,this.el2)
      let btns = this.range(1,pagesCount);
      this.renderBtns(btns,this.cont2);
    }
    else{
        if(this.currentPage <= 3){
            this.hideElements(this.cont2,this.el2);
            this.enableElements(this.cont1,this.cont3,this.el1)

            let btns = this.range(1,3);
            this.renderBtns(btns,this.cont1)

            btns = [pagesCount]
            this.renderBtns(btns,this.cont3);
        }
        else if(this.currentPage > 3 && this.currentPage < pagesCount - 2){
            this.enableElements(this.cont1,this.cont2,this.cont3,this.el1,this.el2);

            //cont1
            let btns = [1]
            this.renderBtns(btns,this.cont1)

            //cont2
            btns = this.range(this.currentPage - 1, this.currentPage + 1)
            this.renderBtns(btns,this.cont2)

            //cont3
            btns = [this.pagesCount]
            this.renderBtns(btns,this.cont3)
        }
        else if(this.currentPage > this.pagesCount - 3){
            this.hideElements(this.cont2,this.el1);
            this.enableElements(this.cont1,this.cont3,this.el2)

            //cont1
            let btns = [1]
            this.renderBtns(btns,this.cont1)

            //cont3
            btns = this.range(this.pagesCount-2,this.pagesCount);
            this.renderBtns(btns,this.cont3)
        }
    }
  }

  computePagesCount(){
    console.log("compute pages count")
    this.pagesCount = Math.ceil(this.total / this.limit);

    console.log(this.pagesCount);

    this.renderPaginator(this.pagesCount);

    // if(this.pagesCount <= 8){
    //   this.pages = this.range(1,this.pagesCount)
    // }else{
    //   this.pages = this.range(1,8)
    // }

    if(this.pages.length * this.limit >= this.total){
      this.deactivateNextBtn();
    }
  }

  ngOnDestroy(){
    if(this.sub1) this.sub1.unsubscribe();
  }


  onDataLoaded(config:PaginatorConfig){
    this.currentPage = config.currentPage;
    this.total = config.total;
    this.limit = config.limit;

    console.log("reached!")

    this.computePagesCount();
  }


  nextPage(){
        this.currentPage++;
        // if(this.currentPage === this.pagesCount){
        //   console.log("deactivating")
        //   this.deactivateNextBtn();
        // }

        // if(this.currentPage > 8){
        //  this.pages = this.pages.map(page => page + 1)
        // }

        this.checkState(); 
  }

  prevPage(){
    // if(this.currentPage > 8){
    //  this.pages = this.pages.map(page => page - 1)
    // }

    this.currentPage--;

    this.checkState();
    // if(this.currentPage === 1){
    //   this.deactivatePrevBtn();
    // }

    // this.activateNextBtn()

    // if(this.currentPage < this.pages[0]) this.pages = this.pages.map(page => page - 1)
}

  onPageClicked(nr:number){
    this.currentPage = nr;
    this.checkState();
  }

  checkState(){
    

    if(this.currentPage === 1){
      this.deactivatePrevBtn();
    }else {
      this.activatePrevBtn();
    }

    if(this.currentPage === this.pagesCount){
      this.deactivateNextBtn();
    }else{
      this.activateNextBtn();
    }

    this.renderPaginator(this.pagesCount);

    // if(this.currentPage < this.pages[0]) this.pages = this.pages.map(page => page - 1)

    this.changePage.emit(this.currentPage);
  }


  deactivateNextBtn(){
    this.nextButton.classList.add("disabled")
  }

  deactivatePrevBtn(){
    this.prevButton.classList.add("disabled")
  }

  activateNextBtn(){
    this.nextButton.classList.remove("disabled")
  }

  activatePrevBtn(){
    this.prevButton.classList.remove("disabled")
  }



  // range(start:number, end:number):number[]{
  //   return [...Array(end).keys()].map((el) => el + start)
  // }

  range(start:number, end:number):number[]{

    let arr:Array<number> = [];

    for(let i = start; i <= end;i++){
      arr.push(i)
    }

    return arr;
  }

  createPageBtn(num:number){
    let elem = document.createElement('div');

    elem.classList.add('page-item');

    elem.style.cursor = "pointer";

    if(num === this.currentPage) elem.classList.add("active");

    elem.addEventListener('click',() => {this.onPageClicked(num) })

    elem.innerHTML = `<span class="page-link">${num}</span>`;

    return elem;
  }


  renderBtns(btns:Array<number>,container:HTMLElement){
      let btnElems = btns.map((num:number) => this.createPageBtn(num))

      btnElems.forEach((elem) => container.appendChild(elem))
  }

}
