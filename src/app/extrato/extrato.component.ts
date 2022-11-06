import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/models.transferencia';
import { TransferenciaService } from '../services/services.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: any [] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencia: Transferencia[])=>{
      console.table(transferencia);
      this.transferencias = transferencia;
    });
  }

}
