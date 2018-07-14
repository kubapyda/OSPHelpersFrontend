import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { LanguageService } from './language/language.service';
import { LoginService } from './auth/login.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateResolver } from './language/translate-resolver';
import { UserAccessGuard } from './auth/user-access.service';

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
