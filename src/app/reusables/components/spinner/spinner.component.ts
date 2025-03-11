import { Component, Input } from '@angular/core';

@Component({
  selector: `loading-spinner`,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.less',
})
export class SpinnerComponent {
  @Input() visibility = false;
}
