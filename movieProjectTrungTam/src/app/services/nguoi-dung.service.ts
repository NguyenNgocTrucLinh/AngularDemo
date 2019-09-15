import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';
@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  dangNhap(taiKhoan: string, matKhau: string) {
    var headerDN = new Headers();
    headerDN.append('Content-Type', 'application/json;charset=UTF-8');
    var url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    var obServe = this._http.post(url, undefined, { headers: headerDN })
      .pipe(map((res: Response) => res.json()));
    return obServe;
  }
  dangKy(nguoiDung: User) {
    let headerDK = new Headers();
    headerDK.append('Content-Type', 'application/json;charset=UTF-8');
    let obServe = this._http.post("http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",nguoiDung, { headers: headerDK })
      .pipe(
        map((res: Response) => res.json())
      );
    return obServe;
  }
  constructor(private _http: Http) { }
}
