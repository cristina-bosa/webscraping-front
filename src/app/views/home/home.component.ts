import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoes.model';
import { ShoesService } from 'src/app/services/shoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allShoes: Shoe[] = [];
  constructor(private shoesService : ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getAll().then(data => this.allShoes = data);
  }

}
