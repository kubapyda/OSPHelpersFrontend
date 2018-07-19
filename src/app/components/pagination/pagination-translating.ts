import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

export class PaginationTranslating extends MatPaginatorIntl {

  constructor(private translate: TranslateService) {
    super();
    this.translate.get('pagination.itemsPerPage').subscribe((translation: string) => {
      this.itemsPerPageLabel = translation;
    });
    this.translate.get('pagination.nextPage').subscribe((translation: string) => {
      this.nextPageLabel = translation;
    });
    this.translate.get('pagination.previousPage').subscribe((translation: string) => {
      this.previousPageLabel = translation;
    });
  }

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 z ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} z ${length}`;
  };
}
