import { Component } from '@angular/core';
import { Slider } from '../../../interfaces/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  sliders: Slider[] = [
    {
      title: 'Slide 1',
      imgUrl: '../../assets/img/slider/slide1.jpg',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Slide 2',
      imgUrl: '../../assets/img/slider/slide2.jpg',
      caption: 'Vestibulum vel est ac velit scelerisque laoreet.',
    },
    {
      title: 'Slide 3',
      imgUrl: '../../assets/img/slider/slide3.jpg',
      caption: 'Nullam id nulla vel justo consectetur tristique.',
    },
  ];
}
