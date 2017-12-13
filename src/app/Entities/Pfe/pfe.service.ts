import { Etudiant } from 'app/Entities/Etudiant/etudiant';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Pfe } from 'app/Entities/Pfe/pfe';

@Injectable()
export class PfeService {
    //URL for CRUD operations
    pfetUrl = "http://localhost:8000/api/pfe";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
    
    getPfeProp(): Observable<Pfe> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.pfetUrl);
        return this.http.get(this.pfetUrl + "/" + 0).map(this.extractData).catch(this.handleError);
    }

    getPfePub(): Observable<Pfe> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.pfetUrl);
        return this.http.get(this.pfetUrl + "/" + 1).map(this.extractData).catch(this.handleError);
    }
    getPfeByID(id : String): Observable<Pfe> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.pfetUrl);
        return this.http.get(this.pfetUrl + "Id/" + id).map(this.extractData).catch(this.handleError);
    }
    getPfeByIdProp(propId: string): Observable<Etudiant> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.pfetUrl + "/" + propId);
        return this.http.get(this.pfetUrl + "ByProp/" + propId).map(this.extractData).catch(this.handleError);
    }

    propPfe(pfe: Pfe): Observable<number> {
        let cpHeaders = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.pfetUrl+"Prop", pfe, options).map(success => success.status).catch(this.handleError);
    }

    pubPfe(pfe: Pfe): Observable<number> {
        let cpHeaders = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.pfetUrl+"Pub", pfe, options).map(success => success.status).catch(this.handleError);
    }
    
    updatePfe(pfe: Pfe): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.pfetUrl + "/" + pfe.id, pfe, options).map(success => success.status).catch(this.handleError);
    }

    updatePfeValid(pfeId: number): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.pfetUrl + "Valid/" + pfeId, options).map(success => success.status).catch(this.handleError);
    }

    updatePfeDeamnde(pfe: Pfe): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.pfetUrl + "Demande/" + pfe.id, pfe, options).map(success => success.status).catch(this.handleError);
    }
    
    deletePfe(pfeId: number): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.pfetUrl + "/" + pfeId).map(success => success.status).catch(this.handleError);
    }
    //Extract Data method
    private extractData(res: Response) {
        let body =res.json();
        return body || [];
    }
    //Handle Error method
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
} 
