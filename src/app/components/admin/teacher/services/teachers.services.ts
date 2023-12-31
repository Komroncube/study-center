import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITeacherResponse } from "../models/teachers.model";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    url='api/teachers'
    /**
     * 
     * @param http 
     */
    constructor(private http: HttpClient) { }

    getAll(){
        return this.http.get<ITeacherResponse[]>(this.url)
    }
}