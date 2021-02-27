import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  mydate: Date;
  constructor() { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    name : new FormControl('')
  })
  
  submitForm(){
    console.warn(this.profileForm.value);
  }
  updateName(){
    // this.profileForm.name
  }

}
