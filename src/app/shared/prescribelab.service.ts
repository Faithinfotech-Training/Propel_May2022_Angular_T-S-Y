import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescribelab } from './prescribelab';

@Injectable({
  providedIn: 'root'
})
export class PrescribelabService {

  constructor(public httpClient: HttpClient ) { }

  preslab :Prescribelab[];
  formData:Prescribelab = new Prescribelab;

  
  
  //insert an employee 
  insertlab(lab :Prescribelab): Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/tblemployees",lab);
  }

}
