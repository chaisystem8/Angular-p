import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params
    .subscribe(parametros => {
      console.log(parametros['id'])
    })
  }

}
