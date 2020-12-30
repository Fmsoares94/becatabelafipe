import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars.service';


@NgModule({
  declarations: [ MenuComponent],
  exports: [ MenuComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[CarsService]
})
export class SharedModule { }
