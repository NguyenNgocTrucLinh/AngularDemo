import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from 'src/app/services/nguoi-dung.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit, OnDestroy {
  dangNhapSubscription: Subscription;
  constructor(private _nguoiDung: NguoiDungService,private _router: Router) { }
  dangNhap(formDN: NgForm) {
    var taiKhoan = formDN.value.TaiKhoan;
    var matKhau = formDN.value.MatKhau;

    this.dangNhapSubscription = this._nguoiDung.dangNhap(taiKhoan,matKhau).subscribe(
      res => {
        if(typeof res !== "string"){
            localStorage.setItem('currentUser',JSON.stringify(res));
            this._router.navigate(['/'])
        }
      },
      err => {
        console.log(err);
      }
    )
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    if(this.dangNhapSubscription){
      this.dangNhapSubscription.unsubscribe();
    }
  }
}
