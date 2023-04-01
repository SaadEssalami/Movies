import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './compoenents/actors/actors.component';
import { EpisodesComponent } from './compoenents/episodes/episodes.component';
import { ImagesComponent } from './compoenents/images/images.component';
import { SeasonsComponent } from './compoenents/seasons/seasons.component';
import { ShowMoviesComponent } from './compoenents/show-movies/show-movies.component';
import { ShowTvComponent } from './compoenents/show-tv/show-tv.component';
import { SimilarComponent } from './compoenents/similar/similar.component';
import { VedeosComponent } from './compoenents/vedeos/vedeos.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { SimilartvComponent } from './compoenents/similartv/similartv.component';
import { ImagetvComponent } from './compoenents/imagetv/imagetv.component';
import { ActorstvComponent } from './compoenents/actorstv/actorstv.component';
import { VedeostvComponent } from './compoenents/vedeostv/vedeostv.component';

const routes: Routes = [
    {
      path: "" , 
      component: HomeComponent
    },
    {
      path:"movies" , 
      component: MoviesComponent
    },
    {
      path:"tv" , 
      component: TvComponent
    },
    {
      path:"categories" , 
      component: CategoriesComponent
    },
    {
      path: "details/:id" ,
      component: ShowMoviesComponent,
      children:[
        {
          path:'similar',
          component: SimilarComponent,
          
        },
        {
          path:'actors',
          component: ActorsComponent
        },
        {
          path:'images',
          component: ImagesComponent
        },
        {
          path:'vedeos',
          component: VedeosComponent
        }
      ]
    },
    {
      path:'tvshow/:id',
      component: ShowTvComponent,
      children: [
        {
          path: 'seasons',
          component: SeasonsComponent,
          
        },
        {
          path:'similartv',
          component: SimilartvComponent,
          
        },
        {
          path:'actorstv',
          component: ActorstvComponent,
        },
        {
          path:'imagestv',
          component: ImagetvComponent,
        },
        {
          path:'videostv',
          component: VedeostvComponent,
        },
      ]
    },
    {
      path:"**" , 
      redirectTo:"/"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
