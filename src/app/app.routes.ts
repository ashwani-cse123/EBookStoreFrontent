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
import { AllBooksComponent } from './User/all-books/all-books.component';
import { ReuseCategoryComponent } from './reusable-component/reuse-category/reuse-category.component';
import { AllCategoryfindComponent } from './User/all-categoryfind/all-categoryfind.component';
import { AllSubjectByCIdComponent } from './User/all-subject-by-cid/all-subject-by-cid.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { UpdateSubjectComponent } from './Admin/update-subject/update-subject.component';
import { UpdateBookComponent } from './Admin/update-book/update-book.component';
import { AdminGuardService } from './Service/auth/admin-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch:'full'
  },
  {
    path: 'admin',
    component: AdminDasboardComponent,
    canActivate:[AdminGuardService],
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
        component: AddSubjectComponent,
      },
      {
        path: 'add-book',
        component: AddBookComponent,
      },
      {
        path: 'delete-category',
        component: DeleteCategoryComponent,
      },
      {
        path: 'delete-subject',
        component: DeleteSubjectComponent,
      },
      {
        path: 'delete-book',
        component: DeleteBookComponent,
      },
      {
        path: 'update-category/:id',
        component: ReuseCategoryComponent,
      },
      {
        path: 'all-book',
        component: AllBooksComponent,
      },
      {
        path: 'update-subject/:id',
        component: UpdateSubjectComponent,
      },
      {
        path: 'update-book/:id',
        component: UpdateBookComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDasboardComponent,
    // canActivate:[normalGaurd],
    children: [
      {
        path: 'all-book/:id',
        component: AllBooksComponent,
      },
      {
        path: 'find-category',
        component: AllCategoryfindComponent,
      },
      {
        path: '',
        redirectTo: 'find-category',
        pathMatch: 'full',
      },
      {
        path: 'find-subjectByCId/:id',
        component: AllSubjectByCIdComponent,
      },
    ],
  },
];
