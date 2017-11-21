import { Etudiant } from 'app/Entities/Etudiant/etudiant';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EtudiantService {
    //URL for CRUD operations
    etudiantUrl = "http://localhost:8000/api/etudiant";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
    //Fetch all Etudiants
    getAllEtudiants(): Observable<Etudiant[]> {
        return this.http.get(this.etudiantUrl).map(this.extractData).catch(this.handleError);
    }
    //Fetch Etudiant by id
    getEtudiantById(etudiantId: string): Observable<Etudiant> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.etudiantUrl + "/" + etudiantId);
        return this.http.get(this.etudiantUrl + "/" + etudiantId).map(this.extractData).catch(this.handleError);
    }
    //Create Etudiant
    createEtudiant(etudiant: Etudiant): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.etudiantUrl, etudiant, options).map(success => success.status).catch(this.handleError);
    }
    //Update Etudiant
    updateEtudiant(etudiant: Etudiant): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.etudiantUrl + "/" + etudiant.id, etudiant, options).map(success => success.status).catch(this.handleError);
    }
    //Delete Etudiant	
    deleteEtudiantById(etudiantId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.etudiantUrl + "/" + etudiantId).map(success => success.status).catch(this.handleError);
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
