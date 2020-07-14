import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'
import { Documentos } from './../modelos/documentos'

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  contador = 0;
  documentoActual = this.socket.fromEvent<Documentos>('gestionDato');
  docs = this.socket.fromEvent<string[]>('gestionDatos');

  constructor(private socket: Socket) { }

  leerDocumento(id: string){
    this.socket.emit('getDoc', id);
  }

  nuevoDocumento(){
    this.socket.emit('addDoc', {id: this.docId(), doc: ''});
  }

  editDocumento(doc: Documentos){
    this.socket.emit('editDoc', doc);
  }

  private docId(){
    this.contador ++;
    const text = `documento ${this.contador}`;
    console.log(text);
    return text;
  }

}
