import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITeacherResponse } from "../models/teachers.model";
import { catchError, map, of, tap, throwError } from "rxjs";

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
    // getAll(){
    //     // return fetch(this.url).then(x=>x.json())
    //     return this.http.get<ITeacherResponse[]>(this.url, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
    //     .pipe(
    //         map((response: any) => {
    //             if (!response || typeof response !== 'object') {
    //                 throw new Error('Invalid JSON response');
    //             }
    //             return response as ITeacherResponse[];
    //         }),
    //         catchError(error => {
    //             console.error('Error during API request:', error);
    //             return of([]); // Return an empty array or handle the error appropriately
    //         })
    //     );
    // }

    // getAll() {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    //     return this.http.get('/api/Teachers', { headers }).pipe(
    //         tap(response => console.log('Raw API Response:', response)),
    //         map((response: any) => {
    //             if (!response || typeof response !== 'object') {
    //                 throw new Error('Invalid JSON response');
    //             }
    //             return response as ITeacherResponse[];
    //         }),
    //         catchError(error => {
    //             console.error('Error during API request:', error);
    //             return (error);
    //         })
    //     );
    // }
    

    commentUrl = 'https://jsonplaceholder.typicode.com/todos'
    getComments() {
        return this.http.get(this.commentUrl)
    }
}