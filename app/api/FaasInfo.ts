/**
 * Describes a FaaS function.
 */
export interface IFaasInfo {
   /**
    * Unique ID.
    */
   id: string;

   /**
    * Name.
    */
   name: string;

   /**
    * Describes the function's purpose.
    */
   description: string;

   /**
    * Amount of RAM available to the function at runtime.
    */
   memoryAllocation: number;

   /**
    * US Dollar cost incurred each time this funcion is invoked.
    */
   invocationCost: number;

   /**
    * US dollar cost incurred for every 100ms this function runs for.
    */
   runtimeCost: number;
}
