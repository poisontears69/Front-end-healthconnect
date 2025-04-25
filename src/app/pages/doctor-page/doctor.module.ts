import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './doctor.routes';
import { DoctorComponent } from './doctor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../reusables/shared.module';

@NgModule({
  declarations: [DoctorComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DoctorModule {}
