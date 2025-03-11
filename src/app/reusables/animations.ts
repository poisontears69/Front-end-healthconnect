import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

export const animations = [
  // Fade in animation
  trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [animate('300ms ease-in', style({ opacity: 1 }))]),
  ]),

  // Button hover animation
  trigger('buttonHover', [
    state('normal', style({ transform: 'scale(1)' })),
    state('hovered', style({ transform: 'scale(1.05)' })),
    transition('normal <=> hovered', animate('200ms ease-in-out')),
  ]),

  // Form error shake animation
  trigger('inputError', [
    transition('* => error', [
      animate(
        '500ms ease-in',
        keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.2 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(-10px)', offset: 0.6 }),
          style({ transform: 'translateX(10px)', offset: 0.8 }),
          style({ transform: 'translateX(0)', offset: 1 }),
        ])
      ),
    ]),
  ]),

  //Spinner fade animation
 trigger('spinnerFade', [
    state('visible', style({ opacity: 1 })),
    state('hidden', style({ opacity: 0 })),
    transition('visible => hidden', animate('300ms ease-out')),
    transition(':enter', [ // Entry animation
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 }))
    ])
  ]) 
];
