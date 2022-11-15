import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AskoService {

  constructor() { }
  async TraerTodos() {
    try {
      const res = await axios.get(environment.API + "/api/products/getAll", {
        // responseType: 'json',
      });
      if (res.status == 201) {
        return res.data;
      }
    } catch (err) {
      console.log(err);


    }
  }
}
