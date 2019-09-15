import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  @Output() transfer = new EventEmitter(); 
  @Output() transferStatusFromDKToSideBar = new EventEmitter();
  @Output() transferStatusFromPhimToDK = new EventEmitter();
  constructor() { }
}
