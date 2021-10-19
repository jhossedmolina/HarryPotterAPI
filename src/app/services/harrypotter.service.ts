import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://hp-api.herokuapp.com/api/characters';
   }

  getAllStaffs(): Promise<any[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/staff`).toPromise();
  }

  getAllStudents(): Promise<any[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/students`).toPromise();
  }

  getGryffindorHouse(): Promise<any[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/house/gryffindor`).toPromise();
  }

  getRavenclawHouse(): Promise<any[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/house/ravenclaw`).toPromise();
  }

  getSlytherinHouse(): Promise<any[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/house/slytherin`).toPromise();
  }

  getHufflepuffHouse(): Promise<any[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/house/hufflepuff`).toPromise();
  }
}
