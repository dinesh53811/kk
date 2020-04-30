import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products= [];
  fetchData=function()
  {
this.http.get("assets\products.json").subscribe 
{
(res:Response) => { this.products= res.json();}
  }
}

  ngOnInit(): void { this.fetchData() }
    
  

}
