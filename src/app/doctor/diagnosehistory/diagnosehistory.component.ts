import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagnoseHistoryService} from 'src/app/shared/diagnose-history.service';

@Component({
  selector: 'app-diagnosehistory',
  templateUrl: './diagnosehistory.component.html',
  styleUrls: ['./diagnosehistory.component.scss']
})
export class DiagnosehistoryComponent implements OnInit {

  constructor(private route : ActivatedRoute ,private DiagnoseHistoryService :DiagnoseHistoryService) { }

  Pid:number;
 DiaHis : any=[]
 res:any=[]
  ngOnInit(): void {
    this.Pid = this.route.snapshot.params['Pid'];
    // this.DiagnoseHistoryService.BindDiaHis();

    this.DiagnoseHistoryService.getDiahis(this.Pid).subscribe(res => {
      console.log(res);
      this.DiaHis = res;
      console.log("DiaHis");
      console.log(this.DiaHis)


    });

  }

}
