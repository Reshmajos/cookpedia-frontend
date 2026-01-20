import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  server_url = "http://localhost:3000"
  http = inject(HttpClient)

  // api call for get all recipes called by home and recipe component
  getAllRecipeAPI(){
    return this.http.get(`${this.server_url}/recipes`)
  }

}
