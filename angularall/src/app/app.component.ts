import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {}
}
