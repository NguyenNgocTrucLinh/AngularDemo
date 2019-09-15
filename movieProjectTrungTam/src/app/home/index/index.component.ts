import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  danhSachPhim: any[] = [];
  constructor(private _http: Http) { }

  //Vòng đời của component, khi component được khởi tạo
  ngOnInit() {
    this._http.get('http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP08')
      .pipe(
        map((res: Response) => res.json())
      )
      .subscribe(
        (res) => {
          this.danhSachPhim = res;
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
