import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{CoursesModule} from './courses/courses.module';
import{StaticpagesModule} from './staticpages/staticpages.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightswitchComponentComponent } from './lightswitch-component/lightswitch-component.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LightswitchComponentComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
