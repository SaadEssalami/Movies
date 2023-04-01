import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-vedeostv',
  templateUrl: './vedeostv.component.html',
  styleUrls: ['./vedeostv.component.scss']
})
export class VedeostvComponent implements OnInit {
  vedeos: any [] = []

  constructor(private movieservice: MovieService, private route: ActivatedRoute , private _sanitizer: DomSanitizer ){}
 ngOnInit(): void {
   this.route.parent?.params.subscribe((params: any) => {this.getVideos(params.id)})
   
 }

 getVideos(id: number){
  this.movieservice.getVedeosTv(id).subscribe((res: any) => {
    this.vedeos = res?.results;
    console.log(res)
  })
 }

 getVedeo(url: any){
  return this._sanitizer.bypassSecurityTrustResourceUrl(url)
 }
}
