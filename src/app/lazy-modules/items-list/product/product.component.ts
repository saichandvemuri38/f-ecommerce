import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public categoryList;
  constructor(private fb: FormBuilder, public _route: Router, public _auth: AuthService, public _shared: SharedService) {
  }
  public addProduct: FormGroup | undefined;

  ngOnInit(): void {
    this.addProduct = this.form();
    this.getCategories();
  }
  form() {
    return this.fb.group({
      product_category: [""],
      product_name: [''],
      price: [null],
      description: ['']
    });
  }

  get categoryValid() {
    return this.addProduct.controls;
  }
  onSubmit() {

    this.addProduct.addControl('admin',new FormControl(this._auth.getPayload().username));
    this.addProduct.addControl('img',new FormControl(this.imageFile));
    console.log(this.addProduct.value)
    if (this.addProduct.valid) {
    this._shared.post("admin/product/addProduct", this.addProduct.value).subscribe(res => {
      console.log(res);
    },
      (error: any) => {
        console.log(error)
      })
    }
  }
  public imageFile:any;
  imagesPreview(event) {
    if (event.target.files) {
      console.log(event.target.files[0])
        const reader = new FileReader();

        reader.onload = (_event: any) => {
          console.log(_event);
            this.imageFile = {
                link: _event.target.result,
                file: event.target.files[0],
                name: event.srcElement.files[0].name
            };
            console.log(this.imageFile)
        };

        reader.readAsDataURL(event.target.files[0]);

    }

}

  getCategories() {
    this._shared.get('admin/getCategory').subscribe(res => this.categoryList = res);
  }
}


