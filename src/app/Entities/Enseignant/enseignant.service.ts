import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from './enseignant';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
@Injectable()
export class EnseignantService {
    //URL for CRUD operations
    EnseignantUrl = "http://localhost:8000/api/enseignant";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
    //Fetch all Enseignants
    getAllEnseignants(): Observable<Enseignant[]> {
        return this.http.get(this.EnseignantUrl).map(this.extractData).catch(this.handleError);
    }
    //Fetch Enseignant by id
    getEnseignantById(enseignantId: string): Observable<Enseignant> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.EnseignantUrl + "/" + enseignantId);
        return this.http.get(this.EnseignantUrl + "/" + enseignantId).map(this.extractData).catch(this.handleError);
    }
    //Create Enseignant
    createEnseignant(enseignant: Enseignant): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.EnseignantUrl, enseignant, options).map(success => success.status).catch(this.handleError);
    }
    //Update Enseignant
    updateEnseignant(enseignant: Enseignant): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.EnseignantUrl + "/" + enseignant.id, Enseignant, options).map(success => success.status).catch(this.handleError);
    }
    //Delete Enseignant	
    deleteEnseignantById(enseignantId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.EnseignantUrl + "/" + enseignantId).map(success => success.status).catch(this.handleError);
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
