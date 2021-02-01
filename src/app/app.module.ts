import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ListComponent } from './list/list.component';
import { TabbedViewComponent } from './tabbed-view/tabbed-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContainerWithDrawerComponent } from './container-with-drawer/container-with-drawer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableTheFirstComponent } from './table-the-first/table-the-first.component';
import { TableTheSecondComponent } from './table-the-second/table-the-second.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ListComponent,
    TabbedViewComponent,
    ContainerWithDrawerComponent,
    TableTheFirstComponent,
    TableTheSecondComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
