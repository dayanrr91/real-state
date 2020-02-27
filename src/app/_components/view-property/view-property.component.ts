import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    images:Array<Object>;

    constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
        {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];

      

      this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
      this.galleryImages = [
        {
          small: 'https://picsum.photos/id/944/900/500',
          medium: 'https://picsum.photos/id/944/900/500',
          big: 'https://picsum.photos/id/944/900/500'
        },
        {
            small: 'https://picsum.photos/id/1011/900/500',
            medium: 'https://picsum.photos/id/1011/900/500',
            big: 'https://picsum.photos/id/1011/900/500'
        },
        {
            small: 'https://picsum.photos/id/984/900/500',
            medium: 'https://picsum.photos/id/984/900/500',
            big: 'https://picsum.photos/id/984/900/500'
        },
        {
            small: 'https://picsum.photos/id/1011/900/500',
            medium: 'https://picsum.photos/id/1011/900/500',
            big: 'https://picsum.photos/id/1011/900/500'
        },
        {
            small: 'https://picsum.photos/id/984/900/500',
            medium: 'https://picsum.photos/id/984/900/500',
            big: 'https://picsum.photos/id/984/900/500'
        }
      ];
  }

}
