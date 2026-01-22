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


  //register: called by register component
  registerAPI(user:any){
    return this.http.post(`${this.server_url}/register`,user)
  } 

  //login: called by login component
  loginAPI(user:any){
    return this.http.post(`${this.server_url}/login`,user)
  }  

}
