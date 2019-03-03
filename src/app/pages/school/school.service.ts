import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ISchoolDetail } from "./school.interface";

const API_URL: string = 'http://localhost:9001/greenstarapp';

@Injectable()
export class SchoolService {

    private headerValue: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json' })

    constructor(private http: HttpClient) {
    }

    public getAllStates(): Observable<any> {
        return this.http.get(API_URL + 'states', { headers: this.headerValue });
    }

    public getDistrict(formData: FormData): Observable<any> {
        return this.http.post(API_URL + 'district', formData, { headers: this.headerValue });
    }

    public getSchoolNames(): Observable<any> {
        return this.http.get(API_URL + 'schools', { headers: this.headerValue });
    }

    public getSchoolData(formData: FormData): Observable<any> {
        return this.http.get(API_URL + 'states', { headers: this.headerValue });
    }

    public getSchoolDetail(formData: FormData): Observable<any> {
        return this.http.post(API_URL + 'states', formData, { headers: this.headerValue });
    }

    public saveSchool(schoolDetail: ISchoolDetail): Observable<any> {
        return this.http.post(API_URL + 'schools', schoolDetail, { headers: this.headerValue });
    }

    public updateSchool(schoolDetail: ISchoolDetail): Observable<any> {
        return this.http.post(API_URL + 'schools', schoolDetail, { headers: this.headerValue });
    }

    public deleteSchool(schoolDetail: ISchoolDetail): Observable<any> {
        return this.http.post(API_URL + 'schools', schoolDetail, { headers: this.headerValue });
    }

    private handleError(error: Response | any): any {
        console.log('API Service :: Handle Error' + error);
        return Observable.throw(error);
    }

}
