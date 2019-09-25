import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// app/app.module.ts
import { MyMaterialModule } from  './material.module';
//this is added for the material design

//enable routers
import { RouterModule, Routes } from '@angular/router';

//ends router import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
          { path: '', redirectTo: '/', pathMatch: 'full' },
          { path: 'register', component: RegistrationComponentComponent },
          { path: 'login', component: LoginComponentComponent },


        ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
