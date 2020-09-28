import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'myapp-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @ViewChild('panel', { static: true }) protected _panel: ElementRef;
  @Input() color: string;
  @Input() height?: string;
  @Input() header: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this._panel.nativeElement,
      'background-color',
      this.color ? this.color : '#ffffff'
    );
    if (this.height) {
      this.renderer.setStyle(this._panel.nativeElement, 'height', this.height);
    }
  }
}
