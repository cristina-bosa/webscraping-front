import { Injectable } from '@angular/core';
import axios from 'axios';
import { Geox } from '../models/shoes.model';

@Injectable({
  providedIn: 'root'
})


export class ShoesService {
  url = "http://localhost:3000/geox/shoes"
  constructor() { }

  getAllGeox() : Promise<Geox[]>{
    return axios.get(this.url).then(response => {
      return response.data
    }).catch(error => console.error(error));
  }
}
