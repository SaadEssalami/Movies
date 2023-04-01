import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-vedeos',
  templateUrl: './vedeos.component.html',
  styleUrls: ['./vedeos.component.scss']
})
export class VedeosComponent implements OnInit {
  vedeos: any [] = []

  constructor(private movieservice: MovieService, private route: ActivatedRoute , private _sanitizer: DomSanitizer ){}
 ngOnInit(): void {
   this.route.parent?.params.subscribe((params: any) => {this.getVideos(params.id)})
   
 }

 getVideos(id: number){
  this.movieservice.vedeoMovie(id).subscribe(({results}: any) => {
    this.vedeos = results;
    console.log(results)
  })
 }

 getVedeo(url: any){
  return this._sanitizer.bypassSecurityTrustResourceUrl(url)
 }
}
