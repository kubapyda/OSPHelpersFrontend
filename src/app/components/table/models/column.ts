import { ColumnType } from '@app/shared/enums';
import { IconType } from './icon-type';

export class Column {
  name: string;
  width: string;
  translation: string;
  translationPrefix: string;
  icon: IconType;
  type: ColumnType = ColumnType.TEXT;
}
