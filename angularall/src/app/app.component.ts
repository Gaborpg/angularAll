import { LoaderService } from './shared/sevices/loader.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './auth/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angularall';
  disabled = false;
  compact = false;
  invertX = false;
  invertY = false;

  shown: 'native' | 'hover' | 'always' = 'native';
  constructor(
    public authService: LoginService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {}
}
