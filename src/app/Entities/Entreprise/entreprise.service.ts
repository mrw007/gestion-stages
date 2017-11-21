import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from './entreprise';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
@Injectable()
export class EntrepriseService {
    //URL for CRUD operations
    entrepriseUrl = "http://localhost:8000/utilisateur";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
    //Fetch all Entreprises
    getAllArticles(): Observable<Entreprise[]> {
        return this.http.get(this.entrepriseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    //Fetch Entreprise by id
    getArticleById(entrepriseId: string): Observable<Entreprise> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.entrepriseUrl + "/" + entrepriseId);
        return this.http.get(this.entrepriseUrl + "/" + entrepriseId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    //Create Entreprise
    createArticle(entreprise: Entreprise): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.entrepriseUrl, entreprise, options)
            .map(success => success.status)
            .catch(this.handleError);
    }
    //Update Entreprise
    updateArticle(entreprise: Entreprise): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.entrepriseUrl + "/" + entreprise.id, entreprise, options)
            .map(success => success.status)
            .catch(this.handleError);
    }
    //Delete Entreprise	
    deleteArticleById(entrepriseId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.entrepriseUrl + "/" + entrepriseId)
            .map(success => success.status)
            .catch(this.handleError);
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
