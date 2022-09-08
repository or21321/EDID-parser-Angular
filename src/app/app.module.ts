import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdidAppComponent } from './pages/edid-app/edid-app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { EdidFilterComponent } from './cmps/edid-filter/edid-filter.component';
import { EdidListComponent } from './cmps/edid-list/edid-list.component';
import { EdidPreviewComponent } from './cmps/edid-preview/edid-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EdidAppComponent,
    AppHeaderComponent,
    EdidFilterComponent,
    EdidListComponent,
    EdidPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
