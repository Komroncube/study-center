import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITeacherRequest, ITeacherResponse } from "../models/teachers.model";


@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    
    /**
     * 
     * @param http 
     */
    constructor(private http: HttpClient) { }
    url = 'http://127.0.0.1:5018/api/Teachers'
    getAll() {
        return this.http.get<ITeacherResponse[]>(this.url, {headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})})
    }
    add(model:ITeacherRequest) {
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
        console.log(model);
        return this.http.post<ITeacherResponse>(this.url, JSON.stringify(model), {headers })
    }
    getById(id:number){
        return this.http.get<ITeacherResponse>(`${this.url}/${id}`)
    }
}