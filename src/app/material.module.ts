import { NgModule } from  '@angular/core';
// app/app.module.ts
//import { MyMaterialModule } from  './material.module';
//this is added for the material design
//import {MatButtonModule,MatToolbarModule} from  '@angular/material';
import {MatNativeDateModule,MatIconModule,MatDatepickerModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
//import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
imports: [MatButtonModule,MatToolbarModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCheckboxModule,FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule],
exports: [MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatCheckboxModule,MatNativeDateModule,FormsModule,MatDatepickerModule,MatIconModule],

})

export  class  MyMaterialModule { }
