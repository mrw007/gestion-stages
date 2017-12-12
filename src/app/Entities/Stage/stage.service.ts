import { Etudiant } from 'app/Entities/Etudiant/etudiant';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Stage } from 'app/Entities/Stage/stage';

@Injectable()
export class StageService {
    //URL for CRUD operations
    stagetUrl = "http://localhost:8000/api/stage";
    //Create constructor to get Http instance
    constructor(private http: Http) { }
    
    getStageProp(): Observable<Stage> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.stagetUrl);
        return this.http.get(this.stagetUrl + "/" + 0).map(this.extractData).catch(this.handleError);
    }
    getStageByID(id : String): Observable<Stage> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.stagetUrl);
        return this.http.get(this.stagetUrl + "Id/" + id).map(this.extractData).catch(this.handleError);
    }

    getStagePub(): Observable<Stage> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.stagetUrl);
        return this.http.get(this.stagetUrl + "/" + 1).map(this.extractData).catch(this.handleError);
    }

    getStageByIdProp(propId: string): Observable<Etudiant> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(this.stagetUrl + "/" + propId);
        return this.http.get(this.stagetUrl + "ByProp/" + propId).map(this.extractData).catch(this.handleError);
    }

    propStage(stage: Stage): Observable<number> {
        let cpHeaders = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(stage);
        return this.http.post(this.stagetUrl+"Prop", stage, options).map(success => success.status).catch(this.handleError);
    }

    pubStage(stage: Stage): Observable<number> {
        let cpHeaders = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: cpHeaders });
        console.log(stage);
        return this.http.post(this.stagetUrl+"Pub", stage, options).map(success => success.status).catch(this.handleError);
    }
    
    updateStage(stage: Stage): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.stagetUrl + "/" + stage.id, stage, options).map(success => success.status).catch(this.handleError);
    }

    updateStageValid(stageId: number): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.stagetUrl + "Valid/" + stageId, options).map(success => success.status).catch(this.handleError);
    }

    updateStageDeamnde(stage: Stage): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.stagetUrl + "Demande/" + stage.id, stage, options).map(success => success.status).catch(this.handleError);
    }
    
    deleteStage(stageId: number): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.stagetUrl + "/" + stageId).map(success => success.status).catch(this.handleError);
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
