import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './admin-page.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../reusables/shared.module';
import { AdminPageComponent } from './admin-page.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [AdminPageComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        FormsModule,
        MatDialogModule
    ],
})
export class AdminPageModule { }
