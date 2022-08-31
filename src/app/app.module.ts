import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { DiagnoseComponent } from './doctor/diagnose/diagnose.component';
import { PrescribemedComponent } from './doctor/prescribemed/prescribemed.component';
import { PrescribelabComponent } from './doctor/prescribelab/prescribelab.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { ViewlabreportComponent } from './doctor/viewlabreport/viewlabreport.component';
import { DiagnosehistoryComponent } from './doctor/diagnosehistory/diagnosehistory.component';
import { MedicineHistoryComponent } from './doctor/medicine-history/medicine-history.component';
import { LabtestHistoryComponent } from './doctor/labtest-history/labtest-history.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewofpatientComponentComponent } from './doctor/viewofpatient-component/viewofpatient-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorComponent,
    DoctordashboardComponent,
    DiagnoseComponent,
    PrescribemedComponent,
    PrescribelabComponent,
    ViewlabreportComponent,
    
    DiagnosehistoryComponent,
    MedicineHistoryComponent,
    LabtestHistoryComponent,
    ViewofpatientComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ToastrModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
