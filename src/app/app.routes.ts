import { Routes } from '@angular/router';
import { ProductRegistrationComponent } from './components/products-components/product-registration/product-registration.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { SignupComponent } from './pages/admin/signup/signup.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "layout",
    component: LayoutComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: "product-registration",
    component: ProductRegistrationComponent
  }
];
