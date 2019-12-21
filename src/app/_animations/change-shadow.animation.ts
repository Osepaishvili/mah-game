import { trigger, animate, transition, style, state } from '@angular/animations';

export const changeShadow =
    
    trigger('changeShadow', [

        state('selected', style({
            boxShadow: '0px 1px 3px 1px #8F15D6',

        })),
        state('matched', style({
            boxShadow: '0px 1px 3px 1px #3EC96A',
        })),
        transition('*=> selected', [
            animate('.3s')
        ]),
        transition('selected => *', [
            animate('0.5s')
        ]),
        transition('selected <=> matched', [
            animate('.3s')
        ])
    ]);