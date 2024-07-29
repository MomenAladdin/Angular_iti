import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [
    {
      name: 'Product 1',
      price: 2000,
      image: '../../assets/img/Products/phone 1.jpg',
    },
    {
      name: 'Product 2',
      price: 2500,
      image: '../../assets/img/Products/phone2.jpg',
    },
    {
      name: 'Product 3',
      price: 6000,
      image: '../../assets/img/Products/phone3.jpg',
    },
    {
      name: 'Product 4',
      price: 8000,
      image: '../../assets/img/Products/phone4.jpg',
    },
  ];

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

interface Product {
  name: string;
  price: number;
  image: string;
}

interface slider {
  name: string;
  image: string;
}
