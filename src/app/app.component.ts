import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './services/telegram.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-tg';

  items = [1, 2, 3, 4, 5];

  constructor(private tgService: TelegramService) {
    this.tgService.ready();
  }

  // window.Telegram.WebApp
}
