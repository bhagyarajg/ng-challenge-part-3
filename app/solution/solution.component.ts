import { Component } from '@angular/core';
import { FaasPlatformService } from '../impl/faasPlatform.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

const  SERVE_APP_FNS: string[] = ['1', '2', '3', '4'];
const amberThreshold: number = 1e+7;
const redThreshold: number = 2*amberThreshold;
@Component({
   moduleId: __moduleName,
   selector: 'my-solution',
   styleUrls: ['./solution.component.css'],
   templateUrl: 'solution.component.html'
})
export class SolutionComponent implements OnInit  {

    faasInfoById: any[] = [];
  
    constructor(private faasService: FaasPlatformService) {
        
    }
    ngOnInit(){
        SERVE_APP_FNS.forEach(element => {
           this.faasService.getFaasInfo$(element)
              .subscribe(info => this.faasInfoById.push(info));
    });
        this.faasInfoById.forEach(element => {
            this.faasService.getFaasUsage$(element.id)
              .subscribe(usage => { element.usage = usage; });
  });

    }
    amberAlert(size: number): boolean {
          return (amberThreshold < size) && (size < redThreshold);
    }
    redAlert(size: number): boolean {
          return size > redThreshold;
    }
}
