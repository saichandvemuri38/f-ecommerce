import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public Url = environment.url;
  constructor(public _http: HttpClient) {
    console.log("Test")
  }
  public post(url: string, body: any) {
    return this._http.post<any>(this.Url + url, body).pipe(catchError(this.errorHandler));
  }
  public get(url: any,body?:any) {
    return this._http.get<any>(this.Url + url,body).pipe(catchError(this.errorHandler))
  }
  public delete(url:any,body:any){
    return this._http.delete<any>(this.Url + url,body).pipe(catchError(this.errorHandler));
  }
  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Unknown Server Error");
  }
}
