import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes :Routes = [
  {path: '', loadChildren: '../home/home.module#HomeModule'},
  {path:'admin',loadChildren: '../admin/admin.module#AdminModule'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
