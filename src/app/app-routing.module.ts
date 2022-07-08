import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'req',
    loadChildren: () => import('./req/req.module').then( m => m.ReqPageModule)
  },
  
  {
    path: 'approve',
    loadChildren: () => import('./approve/approve.module').then( m => m.ApprovePageModule)
  },
  {
    path: 'reject',
    loadChildren: () => import('./reject/reject.module').then( m => m.RejectPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'reqdetail',
    loadChildren: () => import('./reqdetail/reqdetail.module').then( m => m.ReqdetailPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'appdetail',
    loadChildren: () => import('./appdetail/appdetail.module').then( m => m.AppdetailPageModule)
  },
  {
    path: 'rejdetail',
    loadChildren: () => import('./rejdetail/rejdetail.module').then( m => m.RejdetailPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./userhome/userhome.module').then( m => m.UserhomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'adminlogin',
    loadChildren: () => import('./adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'rejdetail1',
    loadChildren: () => import('./rejdetail1/rejdetail1.module').then( m => m.Rejdetail1PageModule)
  },
  {
    path: 'reqdetail1',
    loadChildren: () => import('./reqdetail1/reqdetail1.module').then( m => m.Reqdetail1PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
