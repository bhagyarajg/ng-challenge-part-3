import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPipe } from './loading.pipe';
import { MemoryFormatPipe } from "./memoryFormat.pipe";

@NgModule({
   imports: [CommonModule],
   declarations: [
      LoadingPipe,
      MemoryFormatPipe
   ],
   exports: [
      LoadingPipe,
      MemoryFormatPipe,
      CommonModule
   ]
})
export class SharedModule { }
