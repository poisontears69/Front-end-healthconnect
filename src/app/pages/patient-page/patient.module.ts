import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './patient.routes';
import { PatientComponent } from './patient.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../reusables/shared.module';

@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
})
export class PatientModule {}
