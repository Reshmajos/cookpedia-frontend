import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Header,Footer,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  name:string = ""
  email:string = ""
  message:string = ""
  api = inject(ApiService)

  addFeedback(){
    if(this.name && this.email && this.message){
      this.api.addFeedbackAPI({name:this.name,email:this.email,message:this.message}).subscribe((res:any)=>{
      alert("Thank you for your feedback............")
      this.name = ""
      this.email = ""
      this.message=""
      })
    }else{
      alert("Fill the form completely")
    }
  }
}
