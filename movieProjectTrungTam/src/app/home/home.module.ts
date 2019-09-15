import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { MaterialModule } from '../shared/material/material.module';
import {FormsModule} from '@angular/forms';
import { IndexComponent } from './index/index.component';
import {HttpModule} from '@angular/http';
import { PhimItemComponent } from './index/phim-item/phim-item.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipe/pipe.module';
import { DatGheComponent } from './dat-ghe/dat-ghe.component';
import { HomeRoutingModule } from './home-routing/home-routing.module';
@NgModule({
  declarations: [DangKyComponent,DangNhapComponent, IndexComponent, PhimItemComponent, DetailComponent, HeaderComponent, FooterComponent, HomeLayoutComponent, DatGheComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule,
    PipeModule,
    HomeRoutingModule
  ],
  exports:[DangKyComponent,
    IndexComponent,
    DangNhapComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    HomeLayoutComponent,
    DatGheComponent
  ]
})
export class HomeModule { }
