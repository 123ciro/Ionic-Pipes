import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'menu-busqueda',
  templateUrl: 'menu-busqueda.html'
})
export class MenuBusquedaComponent {

  public term : string = "" ;


@Input() titulo: string = 'Titulo'

@Output() busqueda : EventEmitter<string> = new EventEmitter();
  


public getbusqueda(){
  this.busqueda.emit(this.term)
}


}
