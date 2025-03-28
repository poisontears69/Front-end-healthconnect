import { FormControl } from '@angular/forms';

export interface SearchBarFormGroup {
  searchBar: FormControl<string | null>;
}

export interface ClinicsDataInterface {
  name: string;
  doctorName: string;
  description: string;
}