import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DoctorviewlabService} from 'src/app/shared/doctorviewlab.service'

@Component({
  selector: 'app-viewlabreport',
  templateUrl: './viewlabreport.component.html',
  styleUrls: ['./viewlabreport.component.scss']
})
export class ViewlabreportComponent implements OnInit {

  constructor(public DoctorviewlabService : DoctorviewlabService, private router : Router) { }

  ngOnInit(): void {
    this.DoctorviewlabService.Bindlabview();
  }

}
