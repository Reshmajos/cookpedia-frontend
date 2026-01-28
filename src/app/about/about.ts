import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-about',
  imports: [Header,Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
