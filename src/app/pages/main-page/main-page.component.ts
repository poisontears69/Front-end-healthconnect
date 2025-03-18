import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { animations } from '../../reusables/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchBarFormGroup } from './interfaces/login-page.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.less',
  animations: [animations],
})
export class MainPageComponent implements OnInit {
  protected searchBarFormGroup!: FormGroup<SearchBarFormGroup>;
  protected clinicsData = [
    {
      clinic: 'Charot Clinic',
      doctor: 'Dr. Shurabells Ambatubas',
      description: 'Manuli og pisot',
    },
    {
      clinic: 'Another Clinic',
      doctor: 'Dr. Candace Nats',
      description: 'Sample description',
    },
    {
      clinic: 'Third Clinic',
      doctor: 'Dr. Hugh Janus',
      description: 'Cock inspector',
    },
  ];

  public ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.searchBarFormGroup = new FormGroup<SearchBarFormGroup>({
      searchBar: new FormControl('', Validators.required),
    });
  }

  protected onSearchSubmit(): void {
    alert(this.searchBarFormGroup?.get('searchBar')?.value);
  }
}
