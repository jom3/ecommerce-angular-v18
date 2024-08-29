import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./features/feature.routes')
  },
  {
    path:'**',
    redirectTo:'products',
    pathMatch:'full'
  }
];
