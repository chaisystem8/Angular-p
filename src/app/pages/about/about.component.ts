import { Component } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public _infoTeam: InfoPageService){
    
  }
}
