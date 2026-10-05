import { Component, inject } from '@angular/core';
import { CopyService } from '../services/copy.service';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast" id="toast" role="status" aria-live="polite" [class.show]="copy.visible()">
      {{ copy.message() }}
    </div>
  `,
  styles: `
    .toast {
      position: fixed;
      left: 50%;
      bottom: calc(20px + env(safe-area-inset-bottom, 0px));
      transform: translateX(-50%);
      background: var(--text);
      color: var(--bg);
      border-radius: 999px;
      padding: 8px 16px;
      font-size: 0.9rem;
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }
    .toast.show {
      opacity: 1;
    }
    @media (prefers-reduced-motion: reduce) {
      .toast {
        transition: none;
      }
    }
  `
})
export class ToastComponent {
  protected readonly copy = inject(CopyService);
}
