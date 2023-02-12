import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowOperationsComponent } from './show-operations/show-operations.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { AccountOperationsService } from 'src/service/account-operations.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowOperationsComponent,
    AddOperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
