import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabtestHistoryService } from 'src/app/shared/labtest-history.service';

@Component({
  selector: 'app-labtest-history',
  templateUrl: './labtest-history.component.html',
  styleUrls: ['./labtest-history.component.scss']
})
export class LabtestHistoryComponent implements OnInit {

  Pid: number;
  Labhis : any=[]
  res:any=[]

  constructor(private route : ActivatedRoute,public LabtestHistoryService:LabtestHistoryService) { }

  ngOnInit(): void {

    this.Pid = this.route.snapshot.params['Pid'];
    // this.DiagnoseHistoryService.BindDiaHis();

    this.LabtestHistoryService.getLabHis(this.Pid).subscribe(res => {
      console.log(res);
      this.Labhis = res;
      console.log("Labhis");
      console.log(this.Labhis)


    });
  }

}
