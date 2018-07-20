import { NgModule } from '@angular/core';
import { TrimPipe } from './trim.pipe';
import { NotnullPipe } from './notnull.pipe';
import { SeparadormilesPipe } from './separadormiles.pipe';
import { LongitudPipe } from './longitud.pipe';
import { CondicionPipe } from './condicion.pipe';


export const pipes = [
	TrimPipe,
	NotnullPipe,
	SeparadormilesPipe,
	LongitudPipe,
	CondicionPipe
];



@NgModule({
	declarations: [pipes],
	exports: [pipes]
	
})
export class PipesModule { }
