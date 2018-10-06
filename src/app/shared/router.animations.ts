import { animate, state, style, transition, trigger } from '@angular/animations';

export function routerTransition() {
    return slideToTop();
}

export function slideToRight() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}

export function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}

export function slideToBottom() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]);
}

export function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}

export function moveIn() {
    return trigger('moveIn', [
        state('void', style({position: 'fixed', width: '100%'}) ),
        state('*', style({position: 'fixed', width: '100%'}) ),
        transition(':enter', [
            style({opacity:'0', transform: 'translateX(100px)'}),
            animate('.6s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
        ]),
        transition(':leave', [
            style({opacity:'1', transform: 'translateX(0)'}),
            animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
        ])
    ]);
}

export function fallIn() {
    return trigger('fallIn', [
        transition(':enter', [
            style({opacity:'0', transform: 'translateY(40px)'}),
            animate('.4s .2s ease-in-out', style({opacity:'1', transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            style({opacity:'1', transform: 'translateX(0)'}),
            animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
        ])
    ]);
}

export function moveInLeft() {
    return trigger('moveInLeft', [
        transition(':enter', [
            style({opacity:'0', transform: 'translateX(-100px)'}),
            animate('.6s .2s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
        ])
    ]);
}