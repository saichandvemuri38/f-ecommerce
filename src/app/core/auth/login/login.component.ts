import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, public _route: Router, public _auth: AuthService, public _shared: SharedService) { }
  public loginform: FormGroup | undefined;

  ngOnInit(): void {
    this.loginform = this.form();
  }
  form() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required]
    });
  }
  get loginValid() {
    return this.loginform.controls;
  }
  onSubmit() {
    if (this.loginform.valid) {
      this._shared.post("login", this.loginform.value).subscribe(res => {
        console.log(res);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('payload', JSON.stringify(res.payload));
        this._route.navigate(['/list'])
      },
        (error: any) => {
          console.log(error)
        })
    }
  }
}
