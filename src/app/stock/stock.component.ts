import { Data } from '@angular/router';
import { AssementService } from './../assement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  data:Data[] =[];
  temp:number = 0;

  constructor(private service:AssementService) { }

  ngOnInit(): void {
    this.service.getStock()
    .subscribe({
      next:(resp)=>{
        this.data=resp.data;
      }
    })
  }

}
