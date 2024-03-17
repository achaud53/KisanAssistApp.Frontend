import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { KisanHomeComponent } from './pages/kisan-home/kisan-home.component';

const routes: Routes = [
  {
    path: 'home', component: KisanHomeComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
