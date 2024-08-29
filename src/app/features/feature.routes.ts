import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren:()=>import('./products/product.routes')
  },
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  }
];

export default routes;
