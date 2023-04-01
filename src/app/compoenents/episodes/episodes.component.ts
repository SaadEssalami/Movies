import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent{

  @Input() episodes: any[]= []

  constructor(){}


  
}
