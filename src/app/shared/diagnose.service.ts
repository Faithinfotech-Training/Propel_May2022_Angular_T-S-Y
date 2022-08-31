import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Diagnose } from './diagnose';

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {

  Diagnosis: Diagnose[];
  formData: Diagnose = new Diagnose();

  constructor(private httpClient: HttpClient) { }
  
  insertEmployee(Dia :Diagnose): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/Doctors/DiagnoseNotes",Dia);
  }
 

}
