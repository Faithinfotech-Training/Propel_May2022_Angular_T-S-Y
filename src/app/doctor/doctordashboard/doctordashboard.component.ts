import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctordashboardService } from 'src/app/shared/doctordashboard.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.scss']
})
export class DoctordashboardComponent implements OnInit {

  constructor(public DoctordashboardService: DoctordashboardService, private router: Router, private route: ActivatedRoute) { }

  id: any;
  sid: number;
  dash = [];
  ngOnInit(): void {
    //this.DoctordashboardService.Binddoctordash();


    this.sid = this.route.snapshot.params['sid'];
    // this.DiagnoseHistoryService.BindDiaHis();

    this.DoctordashboardService.getappoint(this.sid).subscribe(res => {
      console.log(res);
      this.dash = res;
      console.log("dash");
      console.log(this.dash)


    });


  }

  viewpatient(Patid: number, patname: string, apid: number) {
    console.log(Patid)
    this.router.navigate(['viewpatient', Patid, patname, apid])
  }





}



