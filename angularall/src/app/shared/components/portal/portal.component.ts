import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { nextPortalId } from '../z_models/portal';

@Component({
  selector: 'myapp-portal',
  templateUrl: './portal.component.html',
})
export class PortalComponent implements AfterViewInit, OnDestroy {
  default: string;

  get query(): string {
    return this._query;
  }

  @Input()
  set query(value: string) {
    if (!value || this._query.indexOf(value) === -1) {
      if (value && value.length > 0) {
        this._query = this.hastagCheck(value);
      } else {
        this._query = this.hastagCheck(this.default);
      }
      if (this.host && this.host.hasAttached) {
        this.host.detach();
        this.attachHost();
      }
    }
  }
  private _query = '';

  @ViewChild(CdkPortal, { static: true })
  private portal: CdkPortal;

  private host: DomPortalOutlet;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {
    this.default = nextPortalId();
    this.query = this.query;
  }

  ngAfterViewInit(): void {
    this.attachHost();
  }

  ngOnDestroy(): void {
    this.host.detach();
  }

  private attachHost() {
    if (!!this.query) {
      this.host = new DomPortalOutlet(
        document.querySelector(this.query),
        this.componentFactoryResolver,
        this.applicationRef,
        this.injector
      );
      if (!!this.host && !this.host.hasAttached()) {
        this.host.attach(this.portal);
      }
    }
  }

  private hastagCheck(value: string): string {
    if (value.charAt(0) === '#') {
      return value;
    } else {
      return `#${value}`;
    }
  }
}
