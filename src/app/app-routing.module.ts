import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent 
  },
  { 
    path: 'aboutus',
    component: AboutusComponent
  },
  { 
    path: 'contactus',
    component: ContactusComponent
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: 'libraries', component: LibrariesComponent },
   
  { path: 'Books', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
