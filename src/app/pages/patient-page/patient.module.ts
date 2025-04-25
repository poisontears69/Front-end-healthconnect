import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './patient.routes';
import { PatientComponent } from './patient.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppModule } from '../../app.module';

@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppModule,
    FormsModule,
  ],
})
export class PatientModule {}
