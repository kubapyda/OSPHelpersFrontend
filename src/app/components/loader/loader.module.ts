import { LoaderComponent } from './loader.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [SharedModule, MatProgressSpinnerModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class LoaderModule {}
