import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinameandresComponent } from './minameandres/minameandres.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DearPuppyComponent } from './dear-puppy/dear-puppy.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'dear-puppy', component: DearPuppyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MinameandresComponent,
    FirstComponent,
    SecondComponent,
    DearPuppyComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
