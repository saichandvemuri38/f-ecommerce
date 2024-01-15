import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(public fb: FormBuilder, public _route: Router, public _auth: AuthService, public _shared: SharedService) { }
  public registerData: FormGroup;
  ngOnInit(): void {
    this.registerData = this.registerForm();
  }
  registerForm() {
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required]
    });
  }
  get registerValid() {
    return this.registerData.controls;
  }
  onSubmit() {
    console.log("valid form data",this.registerData.valid)
    if (this.registerData.valid) {
      console.log("valid")
      this._shared.post('auth/createUser', this.registerData.value).subscribe(res => {
        console.log(res);
        sessionStorage.setItem('token', res.token);
        this._route.navigate(['/list'])
      },
        (error: any) => {
          console.log(error)
        })
    }
  }
}
