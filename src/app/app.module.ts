import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import {APP_CONFIG, AppConfig} from './config/app.config';
import { AddProjectComponent } from './add-project/add-project.component';
import { FilterPipe } from './pipe/filter.pipe';
import { DetailProjectComponent } from './detail-project/detail-project.component';

const routeConfig:Routes = [
  {path:'', component: ContentComponent},
  {path:'addProject', component: AddProjectComponent},
  {path:'detailProject', component: DetailProjectComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    AddProjectComponent,
    FilterPipe,
    DetailProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_CONFIG, useValue: AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
