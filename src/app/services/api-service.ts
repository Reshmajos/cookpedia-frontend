import { HttpClient, HttpHeaders } from '@angular/common/http';
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

appendToken(){
  const token = sessionStorage.getItem("token")
  let headers = new HttpHeaders()
  if(token){
    headers = headers.append("Authorization",`Bearer ${token}`)
  }
  return{headers}
}



// viewrecipe
viewRecipeAPI(recipeId:string){
  return this.http.get(`${this.server_url}/recipes/${recipeId}`,this.appendToken())
}

// related-recipe
getRelatedRecipesAPI(cuisine:string){
  return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`,this.appendToken())
}

// download recipe

addToDownloadAPI(recipeId:string,reqBody:any){
  return this.http.post(`${this.server_url}/downloads/${recipeId}`,reqBody,this.appendToken())
}

// save - called view recipe component when save recipe btn clicked

addToSaveRecipeAPI(recipeId:string,reqBody:any){
  return this.http.post(`${this.server_url}/recipes/${recipeId}/save`,reqBody,this.appendToken())
}

// get user save recipe...get request from save recipe component when page loads

getUserSaveRecipesAPI(){
  return this.http.get(`${this.server_url}/recipe-collection`,this.appendToken())
}

// remove save recipe item -delete  from save recipe component when delete btn clicked 
removeUserSaveRecipeItemAPI(recipeId:string){
  return this.http.delete(`${this.server_url}/recipe-collection/${recipeId}`,this.appendToken())
}

// feedback form--post by contact component when submit btn clicked
addFeedbackAPI(reqBody:any){
  return this.http.post(`${this.server_url}/feedback`,reqBody)
}

}

