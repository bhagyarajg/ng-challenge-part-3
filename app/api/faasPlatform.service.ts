import { Observable } from 'rxjs/Observable';
import { IFaasUsage } from './FaasUsage';
import { FaasPlatformService } from '../impl/faasPlatform.service';
import { IFaasInfo } from './FaasInfo';

/**
 * Exposes APIs for working with the FaaS platform.
 */
export interface IFaasPlatformService {

   /**
    * @param id
    *    ID of the FaaS function to return an Observable for.
    *
    * @returns an Observable that emits information for the given FaaS function,
    * then completes.
    */
   getFaasInfo$(id: string): Observable<IFaasInfo>;

   /**
    * @param id
    *    ID of the FaaS function to return an Observable for.
    *
    * @returns an Observable that emits usage data for the given FaaS function
    * approximately every 2 seconds.
    */
   getFaasUsage$(id: string): Observable<IFaasUsage>;

   /**
    * Request to enable or disable the specified function.
    *
    * @param id
    *    ID of the function to enable or disable.
    *
    * @param enable
    *    True if the function should be enabled, false if it should be disabled.
    *
    * @param returns an Observable that emits true if the request was satisfied, else
    * false and then completes.
    */
   enableFaas(id: string, enable: boolean): Observable<boolean>;
}

export { FaasPlatformService };
