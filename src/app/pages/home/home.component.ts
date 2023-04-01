import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  upComing: any[] =[] 
  popular: any[] =[] 
  popularTv: any[]= []

  constructor(private movieservice: MovieService){}

  ngOnInit(): void {
    this.getAllUpComing();
    this.getPopular();
    this.getPopularTv();
  }

  getAllUpComing(){
    
    this.movieservice.getUpComming("upcoming").subscribe(({results} : any) => {
      this.upComing = results.splice(0,18)
      
    })
  }

  getPopular(){
    
    this.movieservice.getUpComming("popular").subscribe(({results} : any) => {
      this.popular = results.splice(0,18)
      console.log(this.popular)
      
    })
  }

  getPopularTv(){
    this.movieservice.getPopularTvs().subscribe(({results} : any) => {
      this.popularTv= results.splice(0,18)
    })
  }

  
}
