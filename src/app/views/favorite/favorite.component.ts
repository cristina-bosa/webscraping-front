import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoes.model';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  allFavorites: Shoe[] = [];
  constructor(private shoesService : ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getAllFavorites().then(data => this.allFavorites = data);
  }

  public changeFav(shoe: Shoe): void{  
    this.shoesService.modifyFavorite(shoe).then(data => {
      this.allFavorites = this.allFavorites.filter(shoeArray => shoeArray.id != shoe.id);
      shoe.favorite = !shoe.favorite;
    });
  }

}
