
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { affectationPfe } from 'app/Entities/Affectation_pfe/affectationPfe';


@Injectable()
export class affectationPfeService {
    //URL for CRUD operations
    affPfetUrl = "http://localhost:8000/api/affectationPfe";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
    getAffPfeDemandes(etat_ens: number, etat_admin: number): Observable<affectationPfe[]> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.affPfetUrl);
        return this.http.get(this.affPfetUrl + "demandes/" + etat_ens + "/" + etat_admin).map(this.extractData).catch(this.handleError);
    }
    getAffPfeByIdEtud(etudId: string): Observable<affectationPfe[]> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.affPfetUrl + "/" + etudId);
        return this.http.get(this.affPfetUrl + "ByIdEtud/" + etudId).map(this.extractData).catch(this.handleError);
    }
    getAffPfeByID(id: String): Observable<affectationPfe> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.affPfetUrl);
        return this.http.get(this.affPfetUrl + "ById/" + id).map(this.extractData).catch(this.handleError);
    }
    demandeAffPfe(affectationPfe: affectationPfe): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(affectationPfe);
        return this.http.post(this.affPfetUrl + "/", affectationPfe, options).map(success => success.status).catch(this.handleError);
    }
    acceptAffPfeAdmin(pfeId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.affPfetUrl + "/accAdmin/" + pfeId, options).map(success => success.status).catch(this.handleError);
    }
    acceptAffPfeEns(pfeId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.affPfetUrl + "/accEns/" + pfeId, options).map(success => success.status).catch(this.handleError);
    }
    deleteAffPfe(pfeId: number): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.affPfetUrl + "/" + pfeId).map(success => success.status).catch(this.handleError);
    }
    verifAffPfe(id_etud: String): Observable<affectationPfe> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.affPfetUrl);
        return this.http.get(this.affPfetUrl + "/verif/" + id_etud).map(this.extractData).catch(this.handleError);
    }
    //Extract Data method
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    //Handle Error method
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
} 
