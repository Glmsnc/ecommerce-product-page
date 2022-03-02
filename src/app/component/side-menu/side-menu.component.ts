import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.open = false;
    this.openChange.emit(false);
  }

}
