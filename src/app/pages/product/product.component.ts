import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <div class='centered'>
      <h2>{{product.title}}</h2>
      <img [src]="product.image" [alt]="product.title"/>
      <p>{{product.text}}</p>
      <p>{{product.time}}</p>
      <a [href]="product.link" target="_blank">Далее</a>
    </div>
  `,
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;
  backButton = this.tgService.BackButton;

  constructor(
    private products: ProductsService,
    private tgService: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let id = this.route.snapshot.params['id'];
    this.product = this.products.getProductById(id);
    this.backButtonHandler = this.backButtonHandler.bind(this);
  }

  backButtonHandler() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.backButton.show();
    this.tgService.BackButton.onClick(this.backButtonHandler);
  }

  ngOnDestroy(): void {
    this.tgService.BackButton.offClick(this.backButtonHandler);
  }
}
