import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .form {
      height: 70vh;
      justify-content: center;
    }
  `],
  template: `
    <form class="centered form">
      <h2 class="mb">Обратная связь</h2>
      <textarea 
        class="form-control" 
        [value]="feedback()"
        (input)=''
      ></textarea>
    </form>
  `,
})

export class FeedbackComponent {
  feedback = signal('');
}
