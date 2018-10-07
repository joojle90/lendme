import { Injectable } from '@angular/core';

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
}

const MENUITEMS = [
    {state: 'dashboard', type: 'link', name: 'Dashboard', icon: 'dashboard'},
    {state: 'lend', type: 'link', name: 'Investment', icon: 'monetization_on'},
    {state: 'rent', type: 'link', name: 'Borrower', icon: 'multiline_chart'},
    {state: 'customer', type: 'link', name: 'Customer details', icon: 'how_to_reg'},
    {state: 'log', type: 'link', name: 'Transaction log', icon: 'list_alt'}
];

@Injectable()

export class RoleMenu {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }

}
