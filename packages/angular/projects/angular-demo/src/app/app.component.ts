import { Component } from '@angular/core';
import { DPCustomDate } from '@serhatkaya/daypicker-core';

@Component({
  selector: 'app-root',
  template: `<sk-daypicker [customTemplate]="customTemplate" [quickSwipeEnabled]="true" (selected)="cs($event)" [customDate]="customDate"></sk-daypicker> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  customDate: DPCustomDate = {
    start: new Date(),
    end: new Date(2026, 1, 2),
  };
  customTemplate = (d: any) => {
    return 'babake';
  };

  cs(e: any) {
    console.log(e);
  }
  title = 'angular-demo';
}
