import { Component } from '@angular/core';
import { TransferenciaService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  transferencias: any [] = [];

  constructor(private service: TransferenciaService){}

}
