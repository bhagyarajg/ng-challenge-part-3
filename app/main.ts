import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

declare global {
   let __moduleName: string;
}

platformBrowserDynamic().bootstrapModule(AppModule);
