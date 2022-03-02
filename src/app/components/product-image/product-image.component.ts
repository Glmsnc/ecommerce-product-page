import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.less']
})
export class ProductImageComponent implements OnInit {
  
  @Input() images: any[] = [];
  @Output() openZoom = new EventEmitter();
  focusedImage = '';

  ngOnInit(): void {
    this.focusedImage = this.images[0].inFocus;
  }

  showImage(){
    this.openZoom.emit();
  }

  next(){
    this.images.find(
      (image, index) =>{ 
          if(image.inFocus == this.focusedImage && (index+1 < this.images.length)){
          this.focusedImage = this.images[index+1].inFocus;
          return true; 
        }
        return false;

      }
    )
  }

  previous(){
    this.images.find(
      (image, index) =>{ 
        console.log(index-1,'::', this.images.length)
          if(image.inFocus == this.focusedImage && (index-1 > 0)){
          this.focusedImage = this.images[index-1].inFocus;
          return true; 
        }
        return false;

      }
    )
  }
}
