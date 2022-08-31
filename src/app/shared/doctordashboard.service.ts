import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Doctordashboard } from './doctordashboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctordashboardService {

  doctor: Doctordashboard[];
  formData: Doctordashboard = new Doctordashboard();

  constructor(private httpClient: HttpClient) { }

  
  //for binding doctordashboard
  Binddoctordash() {
    this.httpClient.get(environment.apiUrl + "/api/Doctors/Dashboard/"+1)
      .toPromise().then(response =>
        this.doctor = response as Doctordashboard[]);
  }

// Get a particular Patient
getpatient(Pid : number): Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/Doctors/patient/" + Pid)
  

}

  // Get a particular Patient
  getappoint(sid : number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/Doctors/Dashboard/" + sid)
  }


}
  



