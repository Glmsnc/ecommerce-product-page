import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.less']
})
export class ZoomImageComponent implements OnInit {

  @Input() show = false;
  @Output() showChange = new EventEmitter<boolean>();
  @Input() images: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
 
  close(){
    this.show = false;
    this.showChange.emit(false);
  }

}
