import { NgModule } from '@angular/core';
import { NjamLibraryComponent } from './njam-library.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    NjamLibraryComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    NjamLibraryComponent,
    ButtonComponent
  ]
})
export class NjamLibraryModule { }
