import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Product 1',
      price: 4500,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone 1.jpg',
    },
    {
      name: 'Product 1',
      price: 6000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone2.jpg',
    },
    {
      name: 'Product 1',
      price: 4000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone3.jpg',
    },
    {
      name: 'Product 1',
      price: 3500,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone4.jpg',
    },
    {
      name: 'Product 1',
      price: 2000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone5.jpg',
    },
    {
      name: 'Product 1',
      price: 9000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone6.jpg',
    },
    {
      name: 'Product 1',
      price: 5500,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone7.jpg',
    },
    {
      name: 'Product 1',
      price: 7000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone8.jpg',
    },
  ];
}
