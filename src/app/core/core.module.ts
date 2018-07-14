import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageService, TranslateResolver } from '@app/core/language';
import { LoginService, UserAccessGuard } from '@app/core/auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([], { useHash: false, enableTracing: false })
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [
    LanguageService,
    LoginService,
    TranslateResolver,
    UserAccessGuard
  ]
})
export class CoreModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
