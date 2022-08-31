import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(public route: ActivatedRoute, private router: Router) { }
  name = '';
  Id = '';
  Role = '';
  sid: number;

  ngOnInit(): void {
    this.name = sessionStorage.getItem('username');
    this.Id = sessionStorage.getItem('StaffId');
    console.log(this.Id, Number(this.Id));
    this.sid = Number(this.Id)


    this.Role = sessionStorage.getItem('RoleId');

  }

  appoint(sid: number) {
    console.log(sid)
    this.router.navigate(['doctordash', sid])
  }

}
