import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RecipeModel } from '../admin/model/recipeModel';

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

// user download recipe list - get by user profile component when page loads
getUserDownloadListAPI(){
  return this.http.get(`${this.server_url}/user-downloads`,this.appendToken())
}

// edit user profile : put request by profile when pic uploads
editUserPictureAPI(reqBody:any){
  return this.http.put(`${this.server_url}/user-edit`,reqBody,this.appendToken())
}

// feedback-approve : get by home page when it loads
getApproveFeedbacksAPI(){
  return this.http.get(`${this.server_url}/feedbacks-approve`)
}

// get all user list - get by admin users when page loads
getUserListAPI(){
  return this.http.get(`${this.server_url}/user-list`,this.appendToken())
}

// downloads
getDownloadListAPI(){
  return this.http.get(`${this.server_url}/downloads`,this.appendToken())
}

// get feedbacks-get by admin feedback when page loads
getFeedbackListAPI(){
  return this.http.get(`${this.server_url}/feedbacks`,this.appendToken())
}

// put by feedback when approve / reject btn clicked
updateFeedbackStatusAPI(id:string,reqBody:any){
  return this.http.put(`${this.server_url}/feedbacks/${id}`,reqBody,this.appendToken())
}

// add recipe - post request by manage recipe component when add btn clicked
addRecipeAPI(reqBody:RecipeModel){
  return this.http.post(`${this.server_url}/recipes`,reqBody,this.appendToken())
}

// delete recipes - when delete btn clicked
removeRecipeAPI(id:string){
  return this.http.delete(`${this.server_url}/recipes/${id}`,this.appendToken())
}

// edit recipe - put request by manage recipe component when update btn clicked

editRecipeAPI(id:string,reqBody:RecipeModel){
  return this.http.put(`${this.server_url}/recipes/${id}`,reqBody,this.appendToken())
}

getChartData(){
  this.getDownloadListAPI().subscribe((res:any)=>{
    let downloadlistArray:any = []
    let output:any = {}
    res.forEach((item:any)=>{
    let cuisine = item.cuisine
    let currentCount = item.count
    if(cuisine in output){
     output[cuisine] += currentCount
    }else{
      output[cuisine] = currentCount
    }
    })
    console.log(output);
    for(let cuisine in output){
      downloadlistArray.push({name:cuisine,y:output[cuisine]})
    }
    localStorage.setItem("chart",JSON.stringify(downloadlistArray))
    
  })
}

}

