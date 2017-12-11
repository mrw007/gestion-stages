import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Compte } from 'app/Entities/Compte/compte';
import { verifCompte } from 'app/Entities/Compte/verifCompte';
@Injectable()
export class CompteService {
    //URL for CRUD operations
    CompteUrl = "http://localhost:8000/api/user";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
   
    //Create Enseignant
    verifUser(compte: Compte): Observable<verifCompte> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.CompteUrl, compte, options).map(this.extractData).catch(this.handleError);
    }
    updatePass(compte: Compte, id:String): Observable<Compte> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.CompteUrl + "/" + id ,compte,options).map(success => success.status).catch(this.handleError);
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
