import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { QuanLyPhimComponent } from '../quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from '../quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminGuard } from 'src/app/guard/admin.guard';

const AdminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent,canActivate:[AdminGuard  ], children: [
      { path: 'phim', component: QuanLyPhimComponent },
      { path: 'nguoidung', component: QuanLyNguoiDungComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminRoutingModule { }
