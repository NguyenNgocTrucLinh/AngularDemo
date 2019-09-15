import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin: boolean = false;
  private isAdmin: boolean = false;
  getIsLogin() {
    return this.isLogin;
  }
  getIsAdmin(){
    return this.isAdmin;
  }
  checkAdmin() {
    let localUser = this.checkLogin();
    if (localUser) {
      if (localUser.MaLoaiNguoiDung === "QuanTri") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }
  }
  checkLogin() {
    var localUser = localStorage.getItem('currentUser');
    if (localUser) {
      this.isLogin = true;
      return JSON.parse(localUser);
    }
    else {
      this.isLogin = false;
    }
  }


  constructor() { }
}
