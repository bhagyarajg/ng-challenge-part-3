/**
 * Holds real-time usage information for a FaaS function.
 */
export interface IFaasUsage {
   /**
    * ID of the FaaS function that this usage info applies to.
    */
   functionId: string;

   /**
    * The number of instances of the function that are currently executing.
    */
   instances: number;

   /**
    * 'HEALTHY' if the majority of recent executions of the function exited
    * normally. Else, 'ERROR'.
    */
   state: 'HEALTHY' | 'ERROR';

   /**
    * Total number of times the function has been invoked since the start of the
    * monthly billing cycle.
    */
   totalMonthlyInvocations: number;

   /**
    * Number of miliseconds the function has run for in total since the beginning of the
    * monthly billing cycle.
    */
   totalMonthlyRuntime: number;

   /**
    * True when this function is available to be invoked, else false.
    */
   enabled: boolean
}
