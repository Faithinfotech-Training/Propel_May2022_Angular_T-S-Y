import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PrescribelabService } from 'src/app/shared/prescribelab.service';

@Component({
  selector: 'app-prescribelab',
  templateUrl: './prescribelab.component.html',
  styleUrls: ['./prescribelab.component.scss']
})
export class PrescribelabComponent implements OnInit {

  constructor(public preslab: PrescribelabService,private router :Router) { }

  ngOnInit(): void {
  }

   //insert function
   InsertRecord(form: NgForm) {
    console.log("Inserting");
    this.preslab.insertlab(form.value).subscribe(
      (result) =>{
        console.log(result);
        alert('Added Successfully')
       
      }
    );
   // window.location.reload();
  }

}
