import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoes.model';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-converse',
  templateUrl: './converse.component.html',
  styleUrls: ['./converse.component.scss']
})
export class ConverseComponent implements OnInit {

  allConverse: Shoe[] = [];
  constructor(private shoesService : ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getAllBrand("converse").then(data => this.allConverse = data);
  }

  public changeFav(shoe: Shoe): void{  
    this.shoesService.modifyFavorite(shoe).then(data => {
      shoe.favorite = !shoe.favorite;
    });
  }


}
