import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'test first component'
  constructor() { 
    console.log("Constructer")
  }
  ngOnChanges(){
    console.log("ng On chnages")
  }
  ngOnInit(): void {
    console.log("On init")
  }
 
  ngDocheck(){
    console.log("do check")
  }
  ngContentInit(){
    console.log("ng conent in it")
  }
  ngAfterContentInit(){
    console.log("ng after content in it")
  }
  ngAfterContentChecked(){
    console.log("after conte checked")
  }
  ngDestory(){
    console.log("destroy")
  }

}
