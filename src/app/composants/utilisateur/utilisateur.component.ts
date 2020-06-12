import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {
  nom: string;
  age: number;
  email: string;
  hobby: hobby;
  constructor(private donnees:DonneesService) {
    this.nom = 'Babas';
    this.age = 39;
    this.email = 'hubert@top.com';
    this.hobby = {
      hobbyUn: 'basket',
      hobbyDeux: 'lire',
      hobbyTrois: 'Foot',
    };
  }

  ngOnInit(): void {}
  
  onClick(){
    alert("aucune info de plus");
  }

}
interface hobby {
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois:string;
}
