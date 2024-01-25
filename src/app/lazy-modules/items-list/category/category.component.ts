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
  public products;
  constructor(private fb: FormBuilder, public _route: Router, public _auth: AuthService, public _shared: SharedService) {
  }
  public addCategory: FormGroup | undefined;

  ngOnInit(): void {
    this.addCategory = this.form();
    this.getCategories();
  }
  form() {
    return this.fb.group({
      categoryType: ['', [Validators.required]],
      description: ['', Validators.required]
    });
  }

  get categoryValid() {
    return this.addCategory.controls;
  }
  onSubmit() {
    let obj = {
      categoryType: this.addCategory.value.categoryType,
      description: this.addCategory.value.description,
      name: this._auth.getPayload().username
    }
    if (this.addCategory.valid) {
      this._shared.post("admin/category", obj).subscribe(res => {
        console.log(res);
        this.getCategories();
      },
        (error: any) => {
          console.log(error)
        })
    }
  }

  getCategories(){
    this._shared.get('admin/getCategory').subscribe(res=>this.products = res);
  }


}
