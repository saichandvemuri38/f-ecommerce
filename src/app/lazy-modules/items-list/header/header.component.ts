import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {

  }
  public payload;
  constructor(public _auth: AuthService, public _shared: SharedService, private _route: Router) {
    this.payload = this._auth.getPayload();
    console.log(this.payload)
  }
  public items = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
        this._route.navigateByUrl('/profile')
      }
    },
    {
      label: 'Sign Out',
      icon: 'pi pi-sign-out',
      command: () => {
        this._auth.logOut();
      }
    },
  ];
  public getRecords() {
    this._shared.get('check-in').subscribe((res: any) => {
      console.log(res);
    })
  }
}
