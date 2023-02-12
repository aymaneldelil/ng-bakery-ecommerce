import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/public/home/home.module').then((t) => t.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./view/public/auth/auth.module').then((t) => t.AuthModule),
  },
  {
    path: '403',
    loadChildren: () =>
      import('./view/public/page403/page403.module').then((t) => t.Page403Module),
  },
  {
    path: '***',
    loadChildren: () =>
      import('./view/public/page404/page404.module').then((t) => t.Page404Module),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
