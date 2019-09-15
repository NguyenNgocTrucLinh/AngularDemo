import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  layChiTietPhim(maPhim:string){
    const url = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    return this._http.get(url).pipe(
      map( (res:Response) => res.json() )
    )
  }
  constructor(private _http: Http) { }
}
