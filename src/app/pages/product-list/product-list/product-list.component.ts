import { Component, Input } from '@angular/core';
import { IProduct } from '../../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h2>{{title}}</h2>
      <h4>{{subtitle}}</h4>
      <ul>
        @for(product of products; track product.id) {
          <li class='product-item' [routerLink]="'/product/' + product.id">
            <div class='product-image'>
              <img [src]="product.image" [alt]="product.title"/>
            </div>
            <div class='product-info'>
              <h3>{{product.title}}</h3>
              <p>{{product.text}}</p>
              <p>{{product.time}}</p>
            </div>
          </li>
        }
      </ul>
    </div>
  `
})

export class ProductListComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: IProduct[];
}