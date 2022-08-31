import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';

import { ViewlabreportComponent } from './doctor/viewlabreport/viewlabreport.component';
import { DiagnosehistoryComponent } from './doctor/diagnosehistory/diagnosehistory.component';
import { MedicineHistoryComponent } from './doctor/medicine-history/medicine-history.component';
import { LabtestHistoryComponent } from './doctor/labtest-history/labtest-history.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { ViewofpatientComponentComponent } from './doctor/viewofpatient-component/viewofpatient-component.component';


const routes: Routes = [

  { path: '', component : LoginComponent },
  { path: 'doctordash', component : DoctorComponent },
  { path: 'doctordash/:sid', component : DoctordashboardComponent },
  { path: 'viewpatient/:Patid/:Patname/:apid', component : ViewofpatientComponentComponent },
  { path: 'labreportpatient', component : ViewlabreportComponent },
  { path: 'DiaHis/:Pid', component : DiagnosehistoryComponent },
  { path: 'MedHis/:Pid', component : MedicineHistoryComponent },
  { path: 'LabHis/:Pid', component : LabtestHistoryComponent }

 
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
