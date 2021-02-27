import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  
  
  Personname: string;
  
  // @ViewChild('para', {static: false}) para: ElementRef;

  @ViewChild(HeroesComponent) hero: HeroesComponent;

  constructor(){
    this.Personname = "Hero";

    
  }

  ngAfterViewInit(){
    // this.para.nativeElement.innerHTML = 'Go and Die'
    // console.log(this.para.nativeElement.innerHTML);
    // alert(this.hero.title)
  }

  ngOnInit(){
    
  }

  parentMethod(val){
    console.log("event from child "+val)
  }
}
