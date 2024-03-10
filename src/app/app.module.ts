import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CoreModule,
    HomeModule
  ],
  providers: [
    provideClientHydration(),
    //provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
