import { Injectable } from '@angular/core';

// This are the same as scss mixing values.
export enum CustomBreakpointNames {
  phone = 'phone',
  tabPort = 'tab-port',
  tabLand = 'tab-land',
  bigDesktop = 'big-desktop',
}

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  /* SCSS Mixing breakpoints*/
  breakpoints: object = {
    '(max-width: 37.5em)': CustomBreakpointNames.phone,
    '(max-width: 56.25em)': CustomBreakpointNames.tabPort,
    '(max-width: 75em)': CustomBreakpointNames.tabLand,
    '(min-width: 112.5em)': CustomBreakpointNames.bigDesktop,
  };

  getBreakpoints(): string[] {
    return Object.keys(this.breakpoints);
  }

  getBreakpointName(breakpointValue: string): string {
    return this.breakpoints[breakpointValue];
  }
}
