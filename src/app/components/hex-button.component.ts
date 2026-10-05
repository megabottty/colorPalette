import { Component, inject, input } from '@angular/core';
import { CopyService } from '../services/copy.service';

@Component({
  selector: 'app-hex-button',
  template: `
    <button
      #button
      type="button"
      class="hex"
      [class.compact]="compact()"
      [attr.data-copy]="hex()"
      [attr.aria-label]="'Copy ' + hex()"
      (click)="copy.copy(hex(), button)"
    >{{ hex() }}</button>
  `,
  styles: `
    :host {
      display: inline-block;
      justify-self: start;
    }
    .hex {
      font-family: var(--mono);
      font-size: 0.95rem;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--text);
      border-radius: 999px;
      padding: 4px 12px;
      cursor: pointer;
      min-height: 36px;
    }
    .hex.compact {
      font-size: 0.9rem;
      padding: 4px 10px;
      min-height: 34px;
    }
    .hex:hover {
      border-color: var(--primary);
    }
    .hex:focus-visible {
      outline: 3px solid var(--accent);
      outline-offset: 2px;
    }
  `
})
export class HexButtonComponent {
  readonly hex = input.required<string>();
  readonly compact = input(false);

  protected readonly copy = inject(CopyService);
}
