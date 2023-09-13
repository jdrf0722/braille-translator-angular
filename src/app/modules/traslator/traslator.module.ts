import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraslatorComponent } from 'src/app/components/traslator/traslator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TraslatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    TraslatorComponent
  ]
})
export class TraslatorModule { }
