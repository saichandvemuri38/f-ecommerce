import { Component, OnInit } from '@angular/core';
import  greet from "greet-saichand";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'f-ecommerce';
  ngOnInit(): void {
    this.test("Saichand Vemuri")
  }
  public test(name: string) {
    greet(name)
  }
}

