import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { SimpleComponent } from './simple/simple.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, MaterialModule],
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    SimpleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
