import { Component, OnInit, ViewChild } from '@angular/core';
import { MUSICS } from './musics';

@Component({
  selector: 'app-section-carousel',
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.scss']
})
export class SectionCarouselComponent implements OnInit {
  musics = MUSICS;

  constructor() {}

  ngOnInit(): void {
  }

  @ViewChild('carousel') carousel:any;
  movies : Object[] = []
  slides : Array<Object> = []
  options : Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 360,
    height: 270,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
  }
}
