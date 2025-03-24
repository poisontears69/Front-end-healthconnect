import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { animations } from '../../reusables/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ClinicsDataInterface,
  SearchBarFormGroup,
} from './interfaces/main-page.interface';
import { ClinicsService } from '../../reusables/services/clinics.service';

@Component({
  selector: 'app-clinic-page',
  templateUrl: './clinic-page.component.html',
  styleUrl: './clinic-page.component.less',
  animations: [animations],
})
export class ClinicPageComponent implements OnInit {
  protected searchBarFormGroup!: FormGroup<SearchBarFormGroup>;
  protected clinicsData!: ClinicsDataInterface[];

  constructor(private readonly clinicService: ClinicsService) {}

  public ngOnInit(): void {
    this.initializeForm();
    this.getClinicsData();
  }

  private initializeForm(): void {
    this.searchBarFormGroup = new FormGroup<SearchBarFormGroup>({
      searchBar: new FormControl('', Validators.required),
    });
  }

  protected onSearchSubmit(): void {
    alert(this.searchBarFormGroup?.get('searchBar')?.value);
  }

  protected getClinicsData(): void {
    this.clinicService.getAllClinics().subscribe({
      next: (response) => {
        this.clinicsData = response;
        console.log('Clinics loaded successfully!', response);
      },
      error: () => {
        console.log('Something went wrong :(');
      },
    });
  }
}
