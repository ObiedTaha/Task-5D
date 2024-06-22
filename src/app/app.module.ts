import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PortolioComponent } from './components/portolio/portolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsRatingComponent } from './components/skills-rating/skills-rating.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortolioComponent,
    SkillsComponent,
    BlogComponent,
    ContactmeComponent,
    NavComponent,
    SkillsRatingComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
