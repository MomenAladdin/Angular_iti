import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-rec-products',
  standalone: true,
  imports: [],
  templateUrl: './rec-products.component.html',
  styleUrl: './rec-products.component.css',
})
export class RecProductsComponent {
  products: Product[] = [
    {
      name: 'Product 1',
      price: 2000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone 1.jpg',
    },
    {
      name: 'Product 1',
      price: 2000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone2.jpg',
    },
    {
      name: 'Product 1',
      price: 2000,
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi.',
      image: '../../assets/img/Products/phone3.jpg',
    },
  ];
}
