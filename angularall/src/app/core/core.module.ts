import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent, LoaderComponent],
  imports: [SharedModule],
  exports: [NavbarComponent, LoaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
