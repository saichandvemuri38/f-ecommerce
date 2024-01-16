import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth/auth.service';
import { SharedService } from '../../../services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  constructor(private fb: FormBuilder, public _route: Router, public _auth: AuthService, public _shared: SharedService) {
  }
  public addCategory: FormGroup | undefined;

  ngOnInit(): void {
    this.addCategory = this.form();
  }
  form() {
    return this.fb.group({
      categoryType: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      description: ['', Validators.required]
    });
  }

  get categoryValid() {
    return this.addCategory.controls;
  }
  onSubmit() {
    console.log(this.addCategory.value)
    // if (this.addCategory.valid) {
    this._shared.post("admin/category", JSON.stringify(this.addCategory.value)).subscribe(res => {
      console.log(res);
    },
      (error: any) => {
        console.log(error)
      })
    // }
  }
  products = [{ id: '1' }, { id: '1' }, { id: '1' }];

}
