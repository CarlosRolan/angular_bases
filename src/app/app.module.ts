import { NgModule } from '@angular/core';

// import { AboutComponent } from './pages/about/about.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { HomeComponent } from './pages/home/home.component';

//declaratiosn : []
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

//imports : []
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

// [NOTE] IF u use the comand to generate the componets it will make the imports and declarate
@NgModule({
  declarations: [
    // [IMPORTANT] declarations going thorught the import of the PagesModule
    AppComponent,
    // AboutComponent,
    // ContactComponent,
    // HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, PagesModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
