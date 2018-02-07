import { IFaasInfo } from '../api/FaasInfo';

export const faasInfosById: { [id: string]: IFaasInfo } = {
   '1': {
      id: '1',
      name: 'serveAppNginx',
      description: 'Serves the WaveX web app assets.',
      memoryAllocation: 128,
      invocationCost: 0.0000002,
      runtimeCost: 0.000000208
   },
   '2': {
      id: '2',
      name: 'serveAppJetty',
      description: 'Serves the WaveX web app assets.',
      memoryAllocation: 256,
      invocationCost: 0.0000002,
      runtimeCost: 0.000000417
   },
   '3': {
      id: '3',
      name: 'serveAppTomcat',
      description: 'Serves the WaveX web app assets.',
      memoryAllocation: 1024,
      invocationCost: 0.0000002,
      runtimeCost: 0.000001667
   },
   '4': {
      id: '4',
      name: 'serveAppIIS',
      description: 'Serves the WaveX web app assets.',
      memoryAllocation: 1088,
      invocationCost: 0.0000002,
      runtimeCost: 0.000001771
   }
};

