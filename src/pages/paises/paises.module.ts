import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisesPage } from './paises';
import { PaisesService } from '../../services/paises/paises.service';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(PaisesPage),
    HttpClientModule,
    PipesModule,
    ComponentsModule
    
  ],
  providers:[
    PaisesService,

    
  ]
})
export class PaisesPageModule {}
