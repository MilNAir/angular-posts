import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list-composant',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  likes=null;

  @Input() monTitre: string
  @Input() titlePost: string
  @Input() contentPost: string
  @Input() datePost: Date
  @Input() nbLikePost


constructor(){
  //this.datePost = new Date();
}

ngOnInit() {}

// Ajoute un loveIts au click sur le bouton Love it
  addOneLike(){
  return this.likes ++;
  }
// Supprime un loveIts au click sur le bouton Don't love it
  deleteOneLike() {
    return this.likes --;
  }

// Récupère le nombre de LoveIt
getNbLikes(nbLike){
  if(this.likes != null){
    nbLike = this.likes;
    return nbLike;
  } else {
    this.likes = nbLike;
    return nbLike;
  }
}
// Récupère la couleur du background
  getBackgroundColor(nbLikes){
    var likesPost = this.getNbLikes(nbLikes);
    if(likesPost < 0) {
        // rouge
        return "#fcdcdb";
      } else if(likesPost > 0) {
        // vert
        return "#cee9db";
      } else {
        return "#fff";
      }
  }

// Récupère la couleur du texte
  getColor(nbLikes){
   var likesPost = this.getNbLikes(nbLikes);

    if(likesPost < 0) {
      return "#940000";
    } else if(likesPost > 0) {
      return "#3d8465";
    } else {
      return "#000000";
    }
  }
}
