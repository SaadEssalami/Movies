import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item : any  = {}
  defaultImage = "https://thumbs.dreamstime.com/b/profil-d-avatar-masculin-de-l-espace-r%C3%A9serv%C3%A9-par-d%C3%A9faut-image-factice-cadre-photo-carr%C3%A9-blanc-ins%C3%A9r%C3%A9-dans-le-papier-coup%C3%A9-231181588.jpg"

}
