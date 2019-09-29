import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  private username: any;
  private contactos : any = [];
  private hablando : any = false;
  private mensajes : any = [];
  private mensajesEnvios : any = [];
  private nombreContacto : any = null;
  private mensajeEnvio : any = null;
  private htmlElem : HTMLElement = null;
  private lastScrollHeight : any = null;
  private data : any = { nombre:null, mensajes:[]};

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    console.log(this.username);
    this.contactos.push({ nombre:"Diego", mensajes:[{
      hora:"10:20",
      mensaje:"hola",
      idEnvio:"1"},
      {
        hora:"10:20",
        mensaje:"hola",
        idEnvio:"1"},
        {
          hora:"10:20",
          mensaje:"hola",
          idEnvio:"0"},
          {
            hora:"10:20",
            mensaje:"hola",
            idEnvio:"0"}]});

    this.contactos.push({ nombre:"Nicolas", mensajes:[{
      hora:"10:20",
      mensaje:"hola qweqwewqeqeq weqeqweqwewqeqwewqeqwewq eqweqweqweqwe qwe qwewqewqeqwe qwewqewqewqeqwewq eqeqweqweqeqwwewq",
      idEnvio:"1"},
      {
        hora:"10:20",
        mensaje:"adios",
        idEnvio:"1"},
        {
          hora:"10:20",
          mensaje:"que tal",
          idEnvio:"0"},
          {
            hora:"10:20",
            mensaje:"que haces",
            idEnvio:"0"}]});
    this.contactos.push({ nombre:"Rodrigo", mensajes:[{
      hora:"12:40",
      mensaje:"que tal"
    }]});
    this.contactos.push({ nombre:"Bruno", mensajes:[{
      hora:"16:20",
      mensaje:"bien"
    }]});

  }
  
  ngAfterViewChecked(){
  }
  
  mostrarMensajesDelContacto(contacto:any){
    this.limpiarData();
    this.mostrarDatosDelContacto(contacto);
    contacto.mensajes.forEach(mensaje => this.data.mensajes.push(mensaje));
    this.mostrarCardMensajes();
  }
  
  mostrarDatosDelContacto(contacto){
    this.data.nombre = contacto.nombre;
  }

  mostrarCardMensajes(){
    this.hablando = true;
  }

  esconderCardMensajes(){
    this.hablando = false;
  }
  
  limpiarData(){
    this.data = { nombre:null, mensajes:[]};
  }

  procesaOutput(data){
    this.contactos.forEach(contacto => contacto.nombre == data.nombre ? contacto.mensajes.push(data.mensaje) : contacto);
  }


}
