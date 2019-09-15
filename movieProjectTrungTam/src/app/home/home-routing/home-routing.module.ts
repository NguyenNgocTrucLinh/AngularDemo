import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { DangKyComponent } from '../dang-ky/dang-ky.component';
import { DangNhapComponent } from '../dang-nhap/dang-nhap.component';
import { DetailComponent } from '../detail/detail.component';
import { DatGheComponent } from '../dat-ghe/dat-ghe.component';
import { IndexComponent } from '../index/index.component';
import { LoginGuard } from 'src/app/guard/login.guard';

const homeRoutes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [

      { path: 'dangky', component: DangKyComponent },
      { path: 'dangnhap', component: DangNhapComponent },
      //Truyền 1 tham số qua url
      // {path: 'chitiet/:id/:manhom',component:DetailComponent},
      //Truyền nhiều tham số qua url
      { path: 'chitiet', component: DetailComponent },
      { path: 'datghe/:id', component: DatGheComponent,canActivate:[LoginGuard] },
      { path: '', component: IndexComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(homeRoutes)
  ]
})
export class HomeRoutingModule { }
