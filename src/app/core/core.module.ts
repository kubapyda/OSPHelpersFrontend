import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { LanguageService, TranslateResolver } from '@app/core/language';
import { LoginService, UserAccessGuard } from '@app/core/auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppToastrService } from './toastr/app-toastr.service';
import { AuthInterceptor } from './auth/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { EnumService } from './enum/enum.service';
import { RouterModule } from '@angular/router';
import { ServiceLocator } from './locator.service';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
    AppToastrService,
    EnumService,
    UserAccessGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
