import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SharedService } from '../../../services/shared/shared.service';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  constructor(private fb: FormBuilder, public _route: Router, public _auth: AuthService, public _shared: SharedService) {
  }
  public addProduct: FormGroup | undefined;

  ngOnInit(): void {
    this.addProduct = this.form();
  }
  form() {
    return this.fb.group({
      product_category: [""],
      product_name: [''],
      price: ['', Validators.required],
      discription: ['']
    });
  }

  get categoryValid() {
    return this.addProduct.controls;
  }
  onSubmit() {
    console.log(this.addProduct.value)
    // if (this.addProduct.valid) {
    this._shared.post("addProducts", JSON.stringify(this.addProduct.value)).subscribe(res => {
      console.log(res);
    },
      (error: any) => {
        console.log(error)
      })
    // }
  }
  products = [{ id: '1' }, { id: '1' }, { id: '1' }];
  onUpload(event: UploadEvent) {
    console.log(event)
  }
}


