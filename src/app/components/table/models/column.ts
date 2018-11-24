import { ColumnType } from '@app/shared/enums';
import { IconType } from './icon-type';

export class Column {
  name: string;
  width: string;
  translation: string;
  translationTooltip: string;
  translationPrefix: string;
  tooltip: string;
  icon: IconType;
  iconName: string;
  type: ColumnType = ColumnType.TEXT;
  iconClassStr: string;
  iconClass: Function = () => {};
  columnAction: Function = () => {};
}
