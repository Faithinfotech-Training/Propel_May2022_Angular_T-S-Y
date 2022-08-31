import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctordashboardService } from 'src/app/shared/doctordashboard.service';
import { DiagnoseService } from 'src/app/shared/diagnose.service';
import { Doctordashboard } from 'src/app/shared/doctordashboard';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewofpatient-component',
  templateUrl: './viewofpatient-component.component.html',
  styleUrls: ['./viewofpatient-component.component.scss']
})
export class ViewofpatientComponentComponent implements OnInit {

  constructor(public route: ActivatedRoute, public dashsev: DoctordashboardService, public DiagnoseService: DiagnoseService, private router: Router) { }

  Pid: number;
  Patname: string;
  patient: Doctordashboard = new Doctordashboard;
  pat_id: number;
  pat_name: string;
  apid: number;
  
  ngOnInit(): void {

    this.Pid = this.route.snapshot.params['Patid'];
    this.Patname = this.route.snapshot.params['Patname'];
    this.apid = this.route.snapshot.params['apid'];   // for geting the id from the browser url
    this.dashsev.getpatient(this.Pid).subscribe(res => {
      console.log(res);
      this.patient = res;
      console.log("hai");

      console.log(this.patient[0].PatientId)
      console.log(this.patient[0].PatientName)
      this.pat_id = this.patient[0].PatientId;
      this.pat_name = this.patient[0].PatientName;

      this.dashsev.formData = Object.assign({}, res);

    });
  }

  onSubmit(form: NgForm) {
    alert("hai")
    console.log("submit fn");
    let addid = this.DiagnoseService.formData.AppointmentId;

    if (addid == 0 || addid == null) {
      console.log(form.value);
      this.InsertRecord(form)
    }
  }

  InsertRecord(form: NgForm) {
    console.log("Inserting");
    this.DiagnoseService.insertEmployee(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        // alert('Added Successfully')

        //this.router.navigate(['viewpatient/:Patid/:Patname/:apid']);
      }
    );
    // window.location.reload();
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }


  diagnoseHis(Pid : number){
    console.log(Pid)
    this.router.navigate(['DiaHis', Pid])
  }

  
  MedicineHis(Pid: number){
    console.log(Pid)
    this.router.navigate(['MedHis', Pid])
  }

  LabtestHis(Pid: number){
    console.log(Pid)
    this.router.navigate(['LabHis', Pid])
  }

}
