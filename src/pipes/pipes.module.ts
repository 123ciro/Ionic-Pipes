import { NgModule } from '@angular/core';
import { TrimPipe } from './trim.pipe';
import { NotnullPipe } from './notnull.pipe';
import { SeparadormilesPipe } from './separadormiles.pipe';


export const pipes = [
	TrimPipe,
	NotnullPipe,
	SeparadormilesPipe
];



@NgModule({
	declarations: [pipes],
	exports: [pipes]
	
})
export class PipesModule { }
