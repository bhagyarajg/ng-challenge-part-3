import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';

@NgModule({
   imports: [SharedModule],
   declarations: [SolutionComponent],
   exports: [SolutionComponent]
})
export class SolutionModule { }
