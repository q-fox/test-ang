import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { SitesComponent } from './sites/sites.component';

import { AppService } from './app.service';

const routes = [
  { path: '', component: IndexComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sites', component: SitesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UsersComponent,
    SitesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
