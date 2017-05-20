import { Injectable } from '@angular/core';
import { Router, NavigationStart, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

 
@Injectable()

export class HallService implements Resolve<any>{
    
    url: string = "https://event-app-api.mychocchip.com.ng/api/"
    
    constructor (private http: Http) {

    }

    getHalls() {
        return this.http.get(this.url + "halls")
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    resolve() {
        return this.getHalls();
    }

    bookHall (data: any): Observable<any> {
        let bodyString = JSON.stringify(data);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.url +'hall/'+ data.hall_id + '/book', data, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

}