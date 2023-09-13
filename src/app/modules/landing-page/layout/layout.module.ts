import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/components/landing-page/layout/layout.component';
import { NavBarComponent } from 'src/app/components/landing-page/layout/nav-bar/nav-bar.component';
import { TraslatorModule } from '../../traslator/traslator.module';
import { ContentComponent } from 'src/app/components/landing-page/layout/content/content.component';




@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    ContentComponent
  ],
  imports: [    
    CommonModule,
    TraslatorModule
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
