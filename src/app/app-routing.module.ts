import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'posts',
    // [NOTE] This is the old way to do it
    // loadChildren: './pages/posts/posts.module#PostsModule'
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsModule)
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    // [NOTE] to redirect from all
    path: '**',
    redirectTo: 'home'
  }]


@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
