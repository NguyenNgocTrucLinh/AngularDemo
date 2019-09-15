import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  maPhim: string;
  phim: any = {};
  constructor(private _activatedRoute: ActivatedRoute, private _phimSV: PhimService) { }

  ngOnInit() {
    // this._activatedRoute.params.subscribe(
    this._activatedRoute.queryParams.subscribe(
      res => {
        // this.maPhim = res.id;
        this.maPhim = res.maphim;
        this._phimSV.layChiTietPhim(this.maPhim).subscribe(
          res => {
            this.phim = res;
            console.log(res);
            //Custom lại trailer
            var trailerArr = this.phim.Trailer.split('watch?v=');
            this.phim.Trailer = `${trailerArr[0]}embed/${trailerArr[1]}`;
            console.log(this.phim.Trailer)
          }
        )
      },
      err => {
        console.log(err)
      }
    )

  }

}
