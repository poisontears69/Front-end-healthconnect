import { FormControl } from '@angular/forms';

export interface SearchBarFormGroup {
  searchBar: FormControl<string | null>;
}