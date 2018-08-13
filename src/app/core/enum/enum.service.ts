import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { SelectDictionary } from '@app/shared/model';

@Injectable()
export class EnumService {
  constructor() {}

  create(values: Object, translatedKey: string): Array<SelectDictionary> {
    const valuesKey = _.keys(values);
    return _.map(valuesKey, (value: string) => {
      return {
        value: value,
        nlsCode: `${translatedKey}.${value}`
      };
    });
  }
}
