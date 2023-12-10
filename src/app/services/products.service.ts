import { Injectable } from '@angular/core';

const domain = 'https://result.school';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course'
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    limk: domain + product.link,
  }
}
// image: '../../../assets/svg/icon-javascript.svg',
const products: IProduct[] = [
  {
    id: '1',
    title: 'Курс «Основы JavaScript» и 50 заданий',
    link: '/img/icons/products/icon-javascript.svg',
    image: '/img/icons/products/icon-javascript.svg',
    text: 'Вы приобретёте навыки: JavaScript, массивы, объекты, циклы, функции, debug, асинхронность...',
    time: 'С нуля • 2 недели',
    type: ProductType.Course,
  },
  {
    id: '2',
    title: 'HTML&CSS — первый шаг в IT',
    link: '/products/html-css',
    image: '/img/icons/products/icon-html-css.svg',
    text: 'Вы приобретёте навыки: HTML, работа с текстом, списки, таблицы, формы, CSS, работа с цветом...',
    time: 'С нуля • 2 недели',
    type: ProductType.Skill
  },
  {
    id: '3',
    title: 'Марафон JavaScript «5 дней — 5 проектов»',
    link: '/products/marathon-js',
    image: '/img/icons/products/icon-marathon-five-x-five.svg',
    text: 'Содержит: плагин для картинок, мини-кол Trello, слайдер картинок, мини-игра, анимированная игра',
    time: 'С нуля • 1 неделя',
    type: ProductType.Course
  },
  {
    id: '4',
    title: 'От Junior до Middle за одно собеседовние',
    link: '/products/marathon-mfd',
    image: '/img/icons/products/icon-marathon-mfd.svg',
    text: 'Содержит: отличие Junior от Middle, необходимый стек, soft skills, как расти в зарплате',
    time: 'С нуля • 2 дня',
    type: ProductType.Intensive
  },
  {
    id: '5',
    title: 'Воркшоп «Перспективы в IT»',
    link: '/products/perspectives',
    image: '/img/icons/products/icon-workshop.svg',
    text: 'Содержит: 4 шага к карьере в IT, грейды и зарплата frontend-разработчика, технологии для старта...',
    time: 'С нуля • 2 дня',
    type: ProductType.Course
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = products.map(addDomainToLinkAndImage);

  constructor() { }

  getProductById(id: string): IProduct {
    return this.products.find(elem => elem.id === id);
  }

  get allProducts(): IProduct[] {
    return this.products;
  }

  get byGroup(): object {
    return this.products.reduce((group, prod) => {
      if(!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {})
  }
}
