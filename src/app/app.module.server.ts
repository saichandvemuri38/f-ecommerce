import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule
  ],
  providers:[ provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
