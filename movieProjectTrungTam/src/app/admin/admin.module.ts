import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';

@NgModule({
  declarations: [SidebarComponent, QuanLyPhimComponent, QuanLyNguoiDungComponent, AdminLayoutComponent],
  imports: [
    CommonModule,RouterModule,AdminRoutingModule
  ],
  exports: [SidebarComponent,QuanLyPhimComponent,QuanLyNguoiDungComponent,AdminLayoutComponent]
})
export class AdminModule { }
