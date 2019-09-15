import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {

  constructor( private dataSV : DataTransferService) { }
  toggleDK(bool){
    this.dataSV.transferStatusFromPhimToDK.emit(bool);
  }
  ngOnInit() {
  }

}
