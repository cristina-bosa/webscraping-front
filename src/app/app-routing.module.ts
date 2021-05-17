import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverseComponent } from './views/converse/converse.component';
import { FavoriteComponent } from './views/favorite/favorite.component';
import { GeoxComponent } from './views/geox/geox.component';
import { HomeComponent } from './views/home/home.component';
import { NikeComponent } from './views/nike/nike.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'converse',
    component: ConverseComponent
  },
  {
    path: 'nike',
    component: NikeComponent
  },
  {
    path: 'geox',
    component: GeoxComponent
  },
  {
    path: 'favorites',
    component: FavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
