import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { SimpleComponent } from './simple/simple.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    SimpleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
