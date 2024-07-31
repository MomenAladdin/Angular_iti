import { Component } from '@angular/core';
import { RecProductsComponent } from '../rec-products/rec-products.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecProductsComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sliders: slider[] = [
    {
      name: 'Slider 1',
      image: '../../assets/img/slider/slide1.jpg',
    },
    {
      name: 'Slider 2',
      image: '../../assets/img/slider/slide2.jpg',
    },
    {
      name: 'Slider 3',
      image: '../../assets/img/slider/slide3.jpg',
    },
  ];
}

interface slider {
  name: string;
  image: string;
}
