import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { SitesComponent } from './sites/sites.component';
import { TypesComponent } from './types/types.component';

import { AppService } from './app.service';

const routes = [
  { path: '', component: IndexComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'types', component: TypesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UsersComponent,
    SitesComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AppService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
