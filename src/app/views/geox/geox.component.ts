import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoes.model';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-geox',
  templateUrl: './geox.component.html',
  styleUrls: ['./geox.component.scss']
})
export class GeoxComponent implements OnInit {

  allGeox: Shoe[] = [];
  constructor(private shoesService : ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getAllBrand("geox").then(data => this.allGeox = data);
  }

  public changeFav(shoe: Shoe): void{  
    this.shoesService.modifyFavorite(shoe).then(data => {
      shoe.favorite = !shoe.favorite;
    });

  }

}
