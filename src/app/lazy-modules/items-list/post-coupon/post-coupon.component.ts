import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-post-coupon',
  templateUrl: './post-coupon.component.html',
  styleUrl: './post-coupon.component.scss'
})
export class PostCouponComponent implements OnInit {

  constructor(private fb: FormBuilder, public _route: Router, public _auth: AuthService, public _shared: SharedService) {
  }
  public postCoupon: FormGroup | undefined;

  ngOnInit(): void {
    this.postCoupon = this.form();
  }
  form() {
    return this.fb.group({
      coupon_name: [''],
      coupon_code: ['', Validators.required],
      discount:[''],
      expiration_date:['']
    });
  }

  get categoryValid() {
    return this.postCoupon.controls;
  }
  onSubmit() {
    console.log(this.postCoupon.value)
    // if (this.postCoupon.valid) {
      this._shared.post("postCoupons", JSON.stringify(this.postCoupon.value)).subscribe(res => {
        console.log(res);
      },
        (error: any) => {
          console.log(error)
        })
    // }
  }

}

