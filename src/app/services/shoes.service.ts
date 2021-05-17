import { Injectable } from '@angular/core';
import axios from 'axios';
import { Shoe } from '../models/shoes.model';

@Injectable({
  providedIn: 'root'
})


export class ShoesService {
  url = "http://localhost:3000/shoes"
  constructor() { }

  getAll() : Promise<Shoe[]>{
    return axios.get(this.url).then(response => {
      return response.data
    }).catch(error => console.error(error));
  }

  getAllBrand(brand:String) : Promise<Shoe[]>{
    return axios.get(this.url+`/${brand}`).then(response => {
      return response.data
    }).catch(error => console.error(error));
  }

  getAllFavorites() : Promise<Shoe[]>{
    return axios.get(this.url+`/favorite`).then(response => {
      return response.data
    }).catch(error => console.error(error));
  }

  modifyFavorite(shoe:Shoe) : Promise<Shoe[]>{
    return axios.patch(this.url+`/${shoe.id}`, {favorite: !shoe.favorite}).then(response => {
      return response.data
    }).catch(error => console.error(error));
  }


}
