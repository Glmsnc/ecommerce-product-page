import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.less']
})
export class ZoomImageComponent implements OnInit {

  @Input() show = false;
  @Input() images: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  

}
