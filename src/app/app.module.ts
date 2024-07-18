import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main/main.component'
@NgModule({
    declarations: [
      //AppComponent,
      //HeaderComponent,
      //HeroComponent,
      //ServicesComponent,
      //AboutComponent,
      //DoctorsComponent,
      //BlogComponent
      
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    /*providers: [],
    bootstrap: [AppComponent],*/
    schemas: [CUSTOM_ELEMENTS_SCHEMA] 
  })
  export class AppModule { }