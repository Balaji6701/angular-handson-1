import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { SimpleComponent } from './simple/simple.component';
import { MaterialModule } from '../material/material.module';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    EditEmpReactiveComponent,
    SimpleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
