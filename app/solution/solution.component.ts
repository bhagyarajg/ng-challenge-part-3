import { Component } from '@angular/core';
import { FaasPlatformService } from '../impl/faasPlatform.service';
// import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

const  SERVE_APP_FNS: string[] = ['1', '2', '3', '4'];
const AMBER_THRESHOLD: number = 1e+7;
const RED_THRESHOLD: number = 2 * AMBER_THRESHOLD;
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
              .subscribe(usage => {
                  element.totalMemory =  element.memoryAllocation * usage.instances;
                  element.totalMonthlyCost = usage.totalMonthlyInvocations * element.invocationCost +
                                                usage.totalMonthlyRuntime * element.runtimeCost;
                  element.status = usage.state;
                  element.enabled = usage.enabled;
                 });
                 console.log(element);
        });

    }
    amberAlert(size: number): boolean {
          return (AMBER_THRESHOLD < size) && (size < RED_THRESHOLD);
    }
    redAlert(size: number): boolean {
          return size > RED_THRESHOLD;
    }
    toggleStatus(id, status){
        this.faasInfoById.forEach(element => {
            if(element.id === id)
              element.enabled = !status;
        });

       /* this.faasService.enableFaas(id, status)
        .subscribe( status => {
            console.log(status);
            this.faasInfoById.forEach(element => {
                if(element.id === id)
                  element.enabled = status;
            });
        });*/
    }
}
