import { Injectable } from '@angular/core';
import { userProfilePhoto } from '../models/userProfilePhoto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  
  baseUrl : string = 'https://localhost:7080/Upload';
  constructor(private http : HttpClient) { }


  public sendModelToAPI(myModel: userProfilePhoto) : Observable<any> {
   console.log(myModel);
   const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
    return this.http.post(this.baseUrl, myModel, { headers : headers });
  }
}
