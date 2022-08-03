import { Response } from './stock/stock.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AssementService {

  constructor(private http:HttpClient) { }

  getStock(){
    return this.http.get<Response>('https://f68370a9-1a80-4b78-b83c-8cb61539ecd6.mock.pstmn.io/api/v1/get_market_dat');
  }
}
