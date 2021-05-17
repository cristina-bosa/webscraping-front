import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { GeoxComponent } from './views/geox/geox.component';
import { NikeComponent } from './views/nike/nike.component';
import { ConverseComponent } from './views/converse/converse.component';
import { FavoriteComponent } from './views/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GeoxComponent,
    NikeComponent,
    ConverseComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
