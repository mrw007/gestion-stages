import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Compte } from 'app/Entities/Compte/compte';
@Injectable()
export class CompteService {
    //URL for CRUD operations
    CompteUrl = "http://localhost:8000/api/comptes";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
   
    getAllComptes(): Observable<Compte[]> {
        return this.http.get(this.CompteUrl).map(this.extractData).catch(this.handleError);
    }
    
    //Extract Data method
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    //Handle Error method
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
} 
