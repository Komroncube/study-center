import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITeacherRequest, ITeacherResponse } from "../models/teachers.model";
import { Observable } from "rxjs";


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
    getById(id:number):Observable<ITeacherResponse> {
        return this.http.get<ITeacherResponse>(`${this.url}/${id}`)
    }
    update(id: Number, model: ITeacherRequest){
        return this.http.put(`${this.url}/${id}`, model)
    }
}