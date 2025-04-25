import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './doctor.routes';
import { DoctorComponent } from './doctor.component';
import { AppModule } from '../../app.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DoctorComponent],
  imports: [CommonModule, AppModule, RouterModule.forChild(routes)],
})
export class DoctorModule {}
