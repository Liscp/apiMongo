import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentosService } from '../servicios/documentos.service';
import { Documentos } from '../modelos/documentos';
import { Subscription } from 'rxjs';
import { startWith } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit, OnDestroy {

  documento: Documentos;
  private _docSub: Subscription;
  constructor(private documentosService: DocumentosService, private router: Router) { }

  ngOnInit(): void {
    this._docSub = this.documentosService.documentoActual.pipe(
      startWith({id: '', doc: 'Seleccione un documento o cree un nuevo'})
    ).subscribe(documento => this.documento = documento);
  }

  ngOnDestroy(){
    this._docSub.unsubscribe;
  }

  editarDcoumento(){
    this.documentosService.editDocumento(this.documento);
  }

}
