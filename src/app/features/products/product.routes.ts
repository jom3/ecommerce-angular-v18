import { Routes } from "@angular/router";

const routes:Routes = [
  {
    path:'', loadComponent:()=>import('./pages/products/products.component')
  },
  {
    path:'details/:id', loadComponent:()=>import('./pages/details/details.component')
  }
]

export default routes
