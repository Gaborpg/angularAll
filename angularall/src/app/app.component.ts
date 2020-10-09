import { LoaderService } from './shared/sevices/loader.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './auth/services/login.service';
import { LayoutMediaQueryService } from './shared/sevices/layout-media-query-service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularall';
  disabled = false;
  compact = false;
  invertX = false;
  invertY = false;
  unsub$ = new Subject();

  shown: 'native' | 'hover' | 'always' = 'native';
  constructor(
    public authService: LoginService,
    public loaderService: LoaderService,
    public layoutService: LayoutMediaQueryService
  ) {}
  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.unsubscribe();
  }

  ngOnInit(): void {
    this.layoutService
      .subscribeToLayoutChanges()
      .pipe(takeUntil(this.unsub$))
      .subscribe();
  }
}
