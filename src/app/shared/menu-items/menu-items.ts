import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'Acceuil',
    type: 'link',
    icon: 'basic-home'
  },
  {
    state: 'listes',
    name: 'Offres de Stages',
    type: 'link',
    icon: 'basic-todo-pen'
  },
  {
    state: 'offres_de_PFE',
    name: 'Offres de PFE',
    type: 'link',
    icon: 'basic-todolist-pencil'
  },
  {
    state: 'contact',
    name: 'Contact',
    type: 'link',
    icon: 'basic-message-txt'
  },
  {
    state: 'bibliotheque',
    name: 'Bibliotheque',
    type: 'link',
    icon: 'basic-postcard'
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
