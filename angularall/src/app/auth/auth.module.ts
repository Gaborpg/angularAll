import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
