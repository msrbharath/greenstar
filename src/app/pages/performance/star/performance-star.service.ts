import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ISearchPerformanceStarData,ISchoolDetail, IClassSectionDetail,IStudent } from "./performance-star.interface";

const API_URL: string = 'http://localhost:2620';

@Injectable()
export class PerformanceStarService {

    private headerValue: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json' });

    constructor(private http: HttpClient) {
    }

    public getSchools(): Observable<any> {
        return this.http.post(API_URL+'/school/getSchools', { headers: this.headerValue });
    }

    public getClassList(school: ISchoolDetail): Observable<any> {
        return this.http.post(API_URL+'/school/getClassList',school,{ headers: this.headerValue });
    }

    public getClassDetail(classInfo: IClassSectionDetail): Observable<any> {
        return this.http.post(API_URL+'/school/getClassDetail',classInfo,{ headers: this.headerValue });
    }

  /**  public getExistingPerformanceMetricDatas(searchPerformanceData: ISearchPerformanceData): Observable<any> {
        return this.http.post(API_URL+'/perfdata/existingmetricdatas', searchPerformanceData, { headers: this.headerValue });
    }

    public getCreatePerformanceMetricDatas(searchPerformanceData: ISearchPerformanceData): Observable<any> {
        return this.http.post(API_URL+'/perfdata/createmetricdatas', searchPerformanceData, { headers: this.headerValue });
    }

    public savePerformanceMetricDatas(performanceDataTable: IPerformanceDataTable): Observable<any> {
        return this.http.post(API_URL+'/perfdata/savemetricdatas', performanceDataTable, { headers: this.headerValue });
    }

    public updatePerformanceMetricDatas(performanceDataTable: IPerformanceDataTable): Observable<any> {
        return this.http.post(API_URL+'/perfdata/updatemetricdatas', performanceDataTable, { headers: this.headerValue });
    }

    public getPerformanceDataTemplate(searchPerformanceData: ISearchPerformanceData): Observable<any> {
        return this.http.post(API_URL + '/perfdata/downloadtemplate', searchPerformanceData, { responseType: 'blob' });
    }**/

    private handleError(error: Response | any): any {
        console.log('API Service :: Handle Error' + error);
        return Observable.throw(error);
    }

}
