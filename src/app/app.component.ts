import { Component } from '@angular/core';
import { Tarjeta } from './pages/interfaces/tarjeta.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metflix';
  tarjeta:Tarjeta[]=[
    {
      titulo: "Disfruta en tu TV",
      descripcion:"Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.",
      imagen:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    }
    
  ]
}
