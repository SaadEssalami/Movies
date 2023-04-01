import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SliderComponent } from './compoenents/slider/slider.component';
import { CardComponent } from './compoenents/card/card.component';
import { ShowMoviesComponent } from './compoenents/show-movies/show-movies.component';
import { SimilarComponent } from './compoenents/similar/similar.component';
import { ActorsComponent } from './compoenents/actors/actors.component';
import { ImagesComponent } from './compoenents/images/images.component';
import { VedeosComponent } from './compoenents/vedeos/vedeos.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ShowTvComponent } from './compoenents/show-tv/show-tv.component';
import { SeasonsComponent } from './compoenents/seasons/seasons.component';
import { EpisodesComponent } from './compoenents/episodes/episodes.component';
import { SimilartvComponent } from './compoenents/similartv/similartv.component';
import { ActorstvComponent } from './compoenents/actorstv/actorstv.component';
import { ImagetvComponent } from './compoenents/imagetv/imagetv.component';
import { VedeostvComponent } from './compoenents/vedeostv/vedeostv.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    CategoriesComponent,
    SliderComponent,
    CardComponent,
    ShowMoviesComponent,
    SimilarComponent,
    ActorsComponent,
    ImagesComponent,
    VedeosComponent,
    ShowTvComponent,
    SeasonsComponent,
    EpisodesComponent,
    SimilartvComponent,
    ImagetvComponent,
    ActorstvComponent,
    VedeostvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
