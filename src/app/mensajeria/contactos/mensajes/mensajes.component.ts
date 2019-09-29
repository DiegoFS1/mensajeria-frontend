import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  @Input() data: any;
  @ViewChild('matCardMensajes') matCardMensajes;
  @ViewChild('inputMensaje') inputMensaje;
  private nombreContacto: String;
  private dataEnvio : any;
  private mensajeEnvio: String;
  private htmlElem: HTMLElement;
  private hora:Date = new Date();
  @Output() dataOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.matCardMensajes['nativeElement']);
  }

  ngAfterViewChecked(){
    if(this.inputMensaje['nativeElement'].value==''){
      this.scrollToBottom(1);
    }
    
  }
  
  enviarMensaje(mensajeEnvio){
    let mensaje = this.construirMensajeParaEnvio(mensajeEnvio);
    this.dataEnvio = this.construirDataPareEnvio(mensaje);
    this.limpiarMensajeDeEnvio();
    this.enviarDataAlComponentePadre(this.dataEnvio);
    this.data.mensajes.push(mensaje);
    this.recibirMensaje();
    this.hora = new Date();
  }

  limpiarMensajeDeEnvio(){
    this.mensajeEnvio=null;
  }

  construirDataPareEnvio(mensaje){
    return {
      nombre : this.data.nombre,
      mensaje : mensaje
    };
  }

  enviarDataAlComponentePadre(data){
    this.dataOutput.emit(data);
  }

  recibirMensaje(){
    let mensaje = this.generarMensajeParaPruebas();
    this.data.mensajes.push(mensaje);
    this.dataEnvio = this.construirDataPareEnvio(mensaje);
    this.enviarDataAlComponentePadre(this.dataEnvio);
  }

  construirMensajeParaEnvio(mensaje){
    return {
      hora:this.hora.getHours() + ":" + this.hora.getMinutes(),
      mensaje:mensaje,
      idEnvio:1
    };
  }

  generarMensajeParaPruebas(){
    return {
      hora:this.hora.getHours() + ":" + this.hora.getMinutes(),
      mensaje:"te respondo",
      idEnvio:0
    };
  }

  scrollToBottom(param){
    if(param==1){
      this.matCardMensajes['nativeElement'].scrollTop = this.matCardMensajes['nativeElement'].scrollHeight;
    }
  }
  
}