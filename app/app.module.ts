import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { SolutionModule } from './solution/solution.module';
import { FaasPlatformService } from './api/faasPlatform.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
   imports: [
      BrowserModule,
      SharedModule,
      ClarityModule.forRoot(),
      SolutionModule
   ],
   declarations: [AppComponent],
   providers: [FaasPlatformService],
   bootstrap: [AppComponent]
})
export class AppModule { }
