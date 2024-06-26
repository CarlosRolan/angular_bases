import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// [IMPORTANT] when we optimaze imports with modules we need to refresh the server
@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  exports: [HomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
