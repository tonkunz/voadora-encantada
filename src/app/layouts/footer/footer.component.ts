import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  coder: string = 'Everton Kunz';
  design: string = 'Estúdio Lontra'

  constructor() { }

}
