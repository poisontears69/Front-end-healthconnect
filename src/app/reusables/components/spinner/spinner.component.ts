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
  protected introduction = false;

  /**
   * Responds to changes in the input properties of the component.
   * 
   * @param changes - An object of key-value pairs where the key is the name of the input property 
   * and the value is an instance of `SimpleChange` which contains the current and previous value of the property.
   * 
   * The method checks for changes in the `visibility` and `intro` properties:
   * - If `visibility` changes to true, it sets `loading` to true. If it changes to false, it sets `loading` to false after a 300ms delay.
   * - If `intro` changes to true, it sets `introduction` to true. If it changes to false, it sets `introduction` to false after a 300ms delay.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['visibility']) {
      if (changes['visibility'].currentValue) {
        this.loading = true;
      } else {
        setTimeout(() => (this.loading = false), 300);
      }
    }
    if (changes['intro']) {
      if (changes['intro'].currentValue) {
        this.introduction = true;
      } else {
        setTimeout(() => (this.introduction = false), 300);
      }
    }
  }

  /**
   * Event handler that is called when the animation starts.
   * This method sets the `loading` property to `true` to show the spinner.
   */
  onAnimationStart() {
    // When animation starts, we want the spinner to show
    this.loading = true;
    alert('test');
  }

  /**
   * Callback method that is triggered when the animation completes.
   * This method sets the `loading` property to `false`, effectively hiding the spinner.
   */
  onAnimationDone() {
    // When animation ends, we hide the spinner
    this.loading = false;
  }
}
