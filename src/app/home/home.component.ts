import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:any=[]
  getData(d:any){
    this.data=d

  }

  constructor(private ds:DataService, private r:Router){
    this.ds.stulist().then(res=>res.json()).then(res=>this.getData(res))
  }
}
