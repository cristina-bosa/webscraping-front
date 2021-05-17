import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoes.model';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.scss']
})
export class NikeComponent implements OnInit {

  allNike: Shoe[] = [];
  constructor(private shoesService : ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getAllBrand("nike").then(data => this.allNike = data);
  }

  public changeFav(shoe: Shoe): void{  
    this.shoesService.modifyFavorite(shoe).then(data => {
      shoe.favorite = !shoe.favorite;
    });
  }

}
