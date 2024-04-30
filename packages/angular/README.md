# @serhatkaya/daypicker-angular

| Angular | Typescript |
| :-----: | :--------: |
|  >= 16  |   >= 5.1   |

## Setup

`npm install @serhatkaya/daypicker-angular`

Import the module `DayPickerComponentModule`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DayPickerComponentModule } from '@serhatkaya/daypicker-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DayPickerComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Usage

```typescript
import { Component } from '@angular/core';
import { DPCustomDate, SkDaypickerCustomEvent, DPDay } from '@serhatkaya/daypicker-core';

@Component({
  selector: 'app-root',
  template: `<sk-daypicker (selected)="onSelect($event)" [customDate]="customDate"></sk-daypicker> `,
})
export class AppComponent {
  customDate: DPCustomDate = {
    start: new Date(),
    end: new Date(2026, 1, 2),
  };

  onSelect(e: SkDaypickerCustomEvent<DPDay>) {
    console.log(e.detail);
  }
}
```

See main [documentation](https://github.com/serhatkaya/daypicker) for events & properties.
