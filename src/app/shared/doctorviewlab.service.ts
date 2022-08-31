import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctorviewlab } from './doctorviewlab';

@Injectable({
  providedIn: 'root'
})
export class DoctorviewlabService {

  constructor(private httpClient: HttpClient) { }

  labview: Doctorviewlab[];
  formData: Doctorviewlab = new Doctorviewlab();


    //for binding emoployee
    Bindlabview() {
      this.httpClient.get(environment.apiUrl + "/api/Doctors/labview")
        .toPromise().then(response =>
          this.labview = response as Doctorviewlab[]);
    }
}
