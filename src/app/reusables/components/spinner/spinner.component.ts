import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { animations } from '../../animations';

@Component({
  selector: `loading-spinner`,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.less',
  animations: [animations]
})
export class SpinnerComponent implements OnChanges {
  @Input() visibility = false;
  @Input() intro = false;
  protected loading = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visibility']) {
      if (changes['visibility'].currentValue) {
        this.loading = true;
      } else {
        setTimeout(() => (this.loading = false), 300);
      }
    }
  }

  onAnimationStart() {
    // When animation starts, we want the spinner to show
    this.loading = true;
    alert('test');
  }

  onAnimationDone() {
    // When animation ends, we hide the spinner
    this.loading = false;
  }
}
