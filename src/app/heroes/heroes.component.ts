import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import { Heroes} from '../mock-heroes'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  @Input() formname;

  @Output() myEvent = new EventEmitter;

  @ViewChild('myUserName', {static: false}) myuser: ElementRef

  title = "Uppena";
  


  
  mymodel: string;
   
  mymodelcondition: boolean;
  tmplatenameModel
  checkoutForm = this.formBuilder.group({
    name:'',
    pwd: ''
  })

  constructor( 
    private formBuilder: FormBuilder,
  ){}
  tmplatename: string;
   templatemailid: string;
   mailid;
  submitted = false;

  onSubmit() { this.submitted = true; 
    
    this.addNewItem(this.tmplatenameModel)
    console.log(this.myuser)
  }
  addNewItem(username){
    this.myEvent.emit(username)
  }
  submitForm(){
    if(this.checkoutForm.value.name == ''){
      alert("Pleae Enter Name")
    } else if(this.checkoutForm.value.pwd == ''){
      alert("Please Enter Password")
    } else{
    console.log(this.checkoutForm.value.name == '');
    alert("Form Submitted")
  }
  }
  ngOnChanges(changes: SimpleChange): void{
    console.log("on change event")
    
  }
  ngOnInit(): void {
    console.log()
    console.log(Heroes[0].name);
  }

  mychangeevent(){
    if(this.mymodel == 'gova'){
      this.mymodelcondition = true
    }
       else {
       this.mymodelcondition = false;
       }
      }




}
