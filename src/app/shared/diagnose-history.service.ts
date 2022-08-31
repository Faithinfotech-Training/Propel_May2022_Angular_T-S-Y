import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DiagnoseHistory } from '../shared/diagnose-history';

@Injectable({
  providedIn: 'root'
})
export class DiagnoseHistoryService {

  
  constructor(private httpClient : HttpClient) { }

  Diahis: DiagnoseHistory[];



  // Get a particular Patient
getDiahis(Pid : number): Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/Doctors/DiaHis/" + Pid)
}

}
