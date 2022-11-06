import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/models.transferencia';
import { TransferenciaService } from '../services/services.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number = 0;
  destino: number = 0;
  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService, private rota: Router) { }

  ngOnInit(): void {
  }

  transferir(){
    const valorEmitir: Transferencia = {
      valor:this.valor,
      destino:this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
      resultado => {
      console.log(resultado);
      this.limparCampos();
      this.rota.navigateByUrl('extrato');
    }, (error) => console.error(error));

    // this.service.adicionar(valorEmitir).subscribe(
    //   {
    //     complete: console.info,
    //     error: console.info
    //   }
    // )
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
