import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineHistoryService } from 'src/app/shared/medicine-history.service';

@Component({
  selector: 'app-medicine-history',
  templateUrl: './medicine-history.component.html',
  styleUrls: ['./medicine-history.component.scss']
})
export class MedicineHistoryComponent implements OnInit {

  constructor(private route : ActivatedRoute , public MedicineHistoryService :MedicineHistoryService ) { }

  Pid:number;
 medhis : any=[]
 res:any=[]

  ngOnInit(): void {

    this.Pid = this.route.snapshot.params['Pid'];
    // this.DiagnoseHistoryService.BindDiaHis();

    this.MedicineHistoryService.getmedhis(this.Pid).subscribe(res => {
      console.log(res);
      this.medhis = res;
      console.log("medhis");
      console.log(this.medhis)


    });

  }

}
