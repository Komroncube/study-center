import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITeacherRequest, ITeacherResponse } from "../models/teachers.model";


@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    url='api/Teachers'
    /**
     * 
     * @param http 
     */
    constructor(private http: HttpClient) { }
    fullurl = 'http://127.0.0.1:5018/api/Teachers'
    getAll() {
        return this.http.get<ITeacherResponse[]>(this.fullurl, {headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})})
    }
    add(model:ITeacherRequest) {
        return this.http.post<ITeacherResponse>(this.url, model)
    }
}