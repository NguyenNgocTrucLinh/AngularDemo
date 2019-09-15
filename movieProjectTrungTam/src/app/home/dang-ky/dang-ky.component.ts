import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import {Http,Headers,Response} from '@angular/http';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  statusDK : boolean = true;
  //dependence injection
  constructor(private dataSV: DataTransferService, private _http: Http ) { }
  dangKy(form){
    let headerDK = new Headers();
    headerDK.append('Content-Type','application/json;charset=UTF-8');
    this._http.post("http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung", form.value, {headers: headerDK})
    .pipe(
      map( (res: Response) => res.json())
    )
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
  hideSidebar(){
    this.dataSV.transferStatusFromDKToSideBar.emit(false);
  }
  showSidebar(){
    this.dataSV.transferStatusFromDKToSideBar.emit(true);
  }
  ngOnInit() {
    this.dataSV.transferStatusFromPhimToDK.subscribe(
      (res) => {
        this.statusDK = res;
      }
    )
  }

}
