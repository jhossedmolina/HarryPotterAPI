import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StaffsComponent } from './characters/staffs/staffs.component';
import { StudentsComponent } from './characters/students/students/students.component';
import { NewstudentsComponent } from './characters/students/newstudents/newstudents.component';
import { GryffindorComponent } from './characters/characters/gryffindor/gryffindor.component';
import { RavenclawComponent } from './characters/characters/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './characters/characters/slytherin/slytherin.component';
import { HufflepuffComponent } from './characters/characters/hufflepuff/hufflepuff.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseselectionComponent } from './characters/houseselection/houseselection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StaffsComponent,
    StudentsComponent,
    NewstudentsComponent,
    GryffindorComponent,
    RavenclawComponent,
    SlytherinComponent,
    HufflepuffComponent,
    HouseselectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
