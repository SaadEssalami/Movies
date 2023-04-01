import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit{

  images : any[] = []

  constructor(private movieservice: MovieService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {this.getImage(params.id)})
  }

  getImage(id: number){
    this.movieservice.imageMovie(id).subscribe(({backdrops}: any) => {
      this.images = backdrops
    })
  }
}
