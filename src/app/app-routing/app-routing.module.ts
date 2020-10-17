import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {
    path: 'windows', loadChildren: () => import('../routes/windows/windows.module').then(m => m.WindowsModule)
  },
  {
    path: 'doors', loadChildren: () => import('../routes/doors/doors.module').then(m => m.DoorsModule)
  },
  {
    path: 'request-quote', loadChildren: () => import('../routes/request-quote/request-quote.module').then(m => m.RequestQuoteModule)
  },
  {
    path: 'about-us', loadChildren: () => import('../routes/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact-us', loadChildren: () => import('../routes/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'request-cost-calculation', loadChildren: () => import('../routes/request-cost-calculation/request-cost-calculation.module').then(m => m.RequestCostCalculationModule)
  },
    {
    path: '', loadChildren: () => import('../routes/home/home.module').then(m => m.HomeModule)
  }/*,
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
