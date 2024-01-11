import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { PrimeNgModule } from './modules/prime-ng/prime-ng/prime-ng.module';
import { SharedModule } from './modules/shared/shared/shared.module';
import { AuthService } from './services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, provideHttpClient, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService } from './services/intercept/intercept.service';
import { LoaderService } from './services/loader/loader.service';
import { SharedService } from './services/shared/shared.service';
import { SpinnerService } from './services/spinner/spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, SpinnerService, SharedService,
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
