import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor( private _alert: AlertService ) { }

  ngOnInit() {
    this._alert.success("Login");
  }

}
