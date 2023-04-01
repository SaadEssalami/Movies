import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit{

  tvshows: any[] = []
  popular: any[] = []

  constructor(private movieservice: MovieService){}

  ngOnInit(): void {
    this.getAllTv();
    this.getPopular()
  }

  getAllTv(){
    this.movieservice.getTv().subscribe(({results}: any) => {
      this.tvshows= results
    })
  }

  getPopular(){
    this.movieservice.getPopularTv().subscribe((res: any) => {
      this.popular = res.results.splice(0,18)
      // console.log(res)
    })
  }

}
