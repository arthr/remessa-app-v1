import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** Bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** Shared Module */
import { SharedModule } from './shared/shared.module';
import { RemessaComponent } from './remessa/remessa.component';
import { JumbotronComponent } from './remessa/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    RemessaComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
