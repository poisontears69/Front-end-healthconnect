import { ChangeDetectionStrategy, Component } from '@angular/core';
import { animations } from '../../reusables/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.less',
  animations: [animations]
})
export class MainPageComponent {}
