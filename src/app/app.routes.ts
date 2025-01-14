import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDasboardComponent } from './Admin/admin-dasboard/admin-dasboard.component';
import { UserDasboardComponent } from './User/user-dasboard/user-dasboard.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubjectComponent } from './Admin/add-subject/add-subject.component';
import { AddBookComponent } from './Admin/add-book/add-book.component';
import { DeleteCategoryComponent } from './Admin/delete-category/delete-category.component';
import { DeleteSubjectComponent } from './Admin/delete-subject/delete-subject.component';
import { DeleteBookComponent } from './Admin/delete-book/delete-book.component';
import { GetCategoryComponent } from './User/get-category/get-category.component';
import { GetSubjectComponent } from './User/get-subject/get-subject.component';
import { GetBookComponent } from './User/get-book/get-book.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminDasboardComponent,
    // canActivate:[adminGuard],
    children: [
      {
        path: '',
        component: AddCategoryComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'add-subject',
        component: AddSubjectComponent
      },
      {
        path:'add-book',
        component: AddBookComponent
      },
      {
        path:'delete-category',
        component: DeleteCategoryComponent
      },
      {
        path:'delete-subject',
        component:DeleteSubjectComponent
      },
      {
        path: 'delete-book',
        component:DeleteBookComponent
      }
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDasboardComponent,
    children: [
      {
        path: 'get-categories',
        component: GetCategoryComponent,
      },
      {
        path:'get-subject/:category_id',
        component: GetSubjectComponent
      },
      {
        path: 'get-book/:subject_id',
        component: GetBookComponent
      }
    ]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];
