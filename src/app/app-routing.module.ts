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
<<<<<<< HEAD
  }
=======
  },
  { path: 'libraries', component: LibrariesComponent },
   
  { path: 'Books', component: BooksComponent },
>>>>>>> 7b977c0ec7fbf905419c5121f3776d26f819c34d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
