import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineHistoryService {
 
  

  constructor(private httpClient : HttpClient) { }

    // Get a particular Patient
getmedhis(Pid : number): Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/Doctors/MedHis/" + Pid)
}
}
