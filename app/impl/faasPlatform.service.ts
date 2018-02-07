import { Injectable } from '@angular/core';
import { IFaasPlatformService } from '../api/faasPlatform.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IFaasUsage } from '../api/FaasUsage';
import { faasInfosById } from '../impl/data';
import { IFaasInfo } from '../api/FaasInfo';
import { BehaviorSubject } from 'rxjs';
import './doOnSubscribe';

@Injectable()
export class FaasPlatformService implements IFaasPlatformService {

   getFaasInfo$(id: string): Observable<IFaasInfo> {
      const info = faasInfosById[id];

      if (!info) {
         return Observable.throw(`No such function ${id}.`);
      }

      return Observable.of(info)
         .doOnSubscribe(() => console.info(`Observable for FaasInfo ${id} subscribed.`));
   }

   getFaasUsage$(id: string): Observable<IFaasUsage> {
      const usage$ = this.usageSubjectById.get(id);

      if (!usage$) {
         return Observable.throw(`No such function ${id}.`);
      }

      return usage$.asObservable()
         .doOnSubscribe(() => console.info(`Observable for FaasUsage ${id} subscribed.`));

   }

   enableFaas(id: string, enable: boolean): Observable<boolean> {
      if (!this.enabledStateById.has(id)) {
         return Observable.throw(`No such function ${id}.`);
      }

      return Observable.timer(2000)
         .first()
         .do(() => this.enabledStateById.set(id, enable))
         .map(() => true)
         .doOnSubscribe(() => console.info(`Observable for enableFaas ${id} subscribed.`));
   }

   constructor() {
      this.enabledStateById = Object.keys(faasInfosById)
         .reduce((enabledStateById, id) => {
            enabledStateById.set(id, true);
            return enabledStateById;
         }, new Map());
      this.usageSubjectById = this.createUsageSubjects();
      this.startSimulation();
   }

   private usageSubjectById: Map<string, BehaviorSubject<IFaasUsage>>;
   private enabledStateById: Map<string, boolean>;

   private createUsageSubjects() {
      const usageSubjectById = new Map<string, BehaviorSubject<IFaasUsage>>();

      Object.keys(faasInfosById)
         .reduce((map, id) => {
            map.set(id, new BehaviorSubject<IFaasUsage>({
               functionId: id,
               instances: 10000,
               state: 'HEALTHY',
               totalMonthlyInvocations: 12e+6,
               totalMonthlyRuntime: 3.6e+6,
               enabled: this.enabledStateById.get(id)
            }));
            return map;
         }, usageSubjectById);

      return usageSubjectById;
   }

   private startSimulation() {
      setInterval(() => {
         this.usageSubjectById.forEach(subject => {
            const previousUsage = subject.getValue();
            const newUsage = this.getNextUsage(previousUsage);
            subject.next(newUsage);
         });
      }, 2000);
   }

   private getNextUsage(previousUsage: IFaasUsage): IFaasUsage {
      const newUsage = { ...previousUsage };
      newUsage.enabled = this.enabledStateById.get(previousUsage.functionId);
      if (!newUsage.enabled) {
         newUsage.instances = 0;
         return newUsage;
      }
      const random = Math.random();
      const additive = random > 0.5;
      const healthy = random > 0.05;
      let instancesDelta = getRandomInt(250, 1500);
      let runtimeIncrease = getRandomInt(25e+4, 15e+5);
      instancesDelta = additive ? instancesDelta : -1 * instancesDelta;
      newUsage.instances = Math.max(300, previousUsage.instances + instancesDelta);
      newUsage.state = healthy ? 'HEALTHY' : 'ERROR';
      newUsage.totalMonthlyRuntime += runtimeIncrease;
      return newUsage;
   }

}

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
