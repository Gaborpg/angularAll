import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  BreakpointsService,
  CustomBreakpointNames,
} from './breakpoints-service.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutMediaQueryService {
  activeBreakpoints: string[] = [];

  isTablet: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isPhone: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isDesktop: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isBigDesktop: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isTabletLand: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isTabletPort: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private breakpointService: BreakpointsService
  ) {}

  subscribeToLayoutChanges(): Observable<string[]> {
    return this.breakpointObserver
      .observe(this.breakpointService.getBreakpoints())
      .pipe(
        map((observeResponse) =>
          this.parseBreakpointsResponse(observeResponse.breakpoints)
        ),
        tap((obs) => {
          if (this.isBreakpointActive(CustomBreakpointNames.phone)) {
            this.isTablet.next(false);
            this.isPhone.next(true);
            this.isDesktop.next(false);
            this.isBigDesktop.next(false);
            this.isTabletLand.next(false);
            this.isTabletPort.next(false);
          } else if (this.isBreakpointActive(CustomBreakpointNames.tabLand)) {
            this.isTablet.next(true);
            this.isPhone.next(false);
            this.isDesktop.next(false);
            this.isBigDesktop.next(false);
            this.isTabletLand.next(true);
            this.isTabletPort.next(false);
          } else if (this.isBreakpointActive(CustomBreakpointNames.tabPort)) {
            this.isTablet.next(true);
            this.isPhone.next(false);
            this.isDesktop.next(false);
            this.isBigDesktop.next(false);
            this.isTabletLand.next(false);
            this.isTabletPort.next(true);
          } else if (
            this.isBreakpointActive(CustomBreakpointNames.bigDesktop)
          ) {
            this.isTablet.next(false);
            this.isPhone.next(false);
            this.isDesktop.next(false);
            this.isBigDesktop.next(true);
            this.isTabletLand.next(false);
            this.isTabletPort.next(false);
          } else {
            this.isTablet.next(false);
            this.isPhone.next(false);
            this.isDesktop.next(true);
            this.isBigDesktop.next(false);
            this.isTabletLand.next(false);
            this.isTabletPort.next(false);
          }
        })
      );
  }

  parseBreakpointsResponse(breakpoints): string[] {
    this.activeBreakpoints = [];

    Object.keys(breakpoints).map((key: string) => {
      if (breakpoints[key]) {
        this.activeBreakpoints.push(
          this.breakpointService.getBreakpointName(key)
        );
      }
    });

    return this.activeBreakpoints;
  }

  isBreakpointActive(breakpointName: string) {
    return this.activeBreakpoints.find(
      (breakpoint) => breakpoint === breakpointName
    );
  }
}
