export class MenuPosition {

  position: string;
  translation: string;
  link: string;
  icon: string;
  permision: string | string[];
  isVisible?: boolean;

  constructor() {
    this.isVisible = true;
  }

}
