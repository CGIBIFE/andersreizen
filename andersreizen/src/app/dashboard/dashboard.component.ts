import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authservice:AuthService, public router:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
