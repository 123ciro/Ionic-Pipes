import { NgModule } from '@angular/core';
import { MenuBusquedaComponent } from './menu-busqueda/menu-busqueda';
import { IonicModule } from 'ionic-angular';



export const components = [
	MenuBusquedaComponent

]



@NgModule({
	declarations: [components],
	imports:[IonicModule],
	exports: [components]
})
export class ComponentsModule {}
