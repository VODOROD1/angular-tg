import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { IProduct, ProductsService, ProductType } from '../../services/products.service';
import { ProductListComponent } from '../product-list/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      [title]="ProductType.Skill"
      [subtitle]="'Вы можете развить ' + ProductType.Skill"
      [products]="productsByGroup[ProductType.Skill]"
    />
    <app-product-list
      [title]="ProductType.Intensive"
      [subtitle]="'Вы можете поучаствовать в ' + ProductType.Intensive"
      [products]="productsByGroup[ProductType.Intensive]"
    />
    <app-product-list
      [title]="ProductType.Course"
      [subtitle]="'Вы можете поучаствовать в ' + ProductType.Course"
      [products]="productsByGroup[ProductType.Course]"
    />
  `,
})

export class ShopComponent {
  tgService = inject(TelegramService);
  productsService = inject(ProductsService);
  mainButton = this.tgService.MainButton;
  productsByGroup: object;
  ProductType = ProductType;

  constructor() {
    this.tgService.MainButton.show();
    this.tgService.BackButton.hide();
    this.productsByGroup = this.productsService.byGroup;
    // console.log('byGroup - ', temp);
  }
  
}
