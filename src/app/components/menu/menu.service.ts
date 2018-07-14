import { Injectable } from '@angular/core';
import { MenuPosition } from '@app/shared/model';

@Injectable()
export class MenuService {

  menuPosition: MenuPosition = new MenuPosition();
  menu: Array<MenuPosition> = [];

  constructor() { }

  getMenu() {
    return this.menu;
  }

  addPosition(name: string) {
    this.menuPosition.position = name;
    return this;
  }

  addTranslation(translation: string) {
    this.menuPosition.translation = translation;
    return this;
  }

  addLink(link: string) {
    this.menuPosition.link = link;
    return this;
  }

  addIcon(icon: string) {
    this.menuPosition.icon = `../../../assets/image/menu/${icon}`;
    return this;
  }

  setVisibility(isVisible: boolean) {
    this.menuPosition.isVisible = isVisible;
    return this;
  }

  clearMenu() {
    this.menu = [];
  }

  save() {
    this.menu.push(this.menuPosition);
    this.menuPosition = new MenuPosition();
  }
}
