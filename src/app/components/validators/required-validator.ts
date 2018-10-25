import * as _ from 'lodash';

import { FormGroup } from '@angular/forms';

export function validateFieldRequired(firstField: string, secondField: string) {
  return (group: FormGroup) => {
    const firefighterType = group.controls.type.value;
    const firstFieldValue = group.controls[firstField].value;
    const secondFieldValue = group.controls[secondField].value;
    if (firefighterType === 'JOT' && (_.isNull(firstFieldValue) || _.isNull(secondFieldValue))) {
      return { isRequired: true };
    }
    return null;
  };
}
