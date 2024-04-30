import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DayPickerComponentModule } from '@serhatkaya/daypicker-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DayPickerComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
