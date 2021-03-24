import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { TweenLite, TimelineMax, gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { CarouselComponent } from '../carousel/carousel.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() {}
  ngOnInit(): void {}

  @ViewChildren(CarouselComponent) carousel: QueryList<CarouselComponent>  
  ngAfterViewInit() {
      }
  counter(i: number): any {
    return new Array(i);
  }
    
}
