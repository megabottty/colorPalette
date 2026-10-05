import { Component, input } from '@angular/core';
import { ColorTile } from '../data/palette.data';
import { HexButtonComponent } from './hex-button.component';

@Component({
  selector: 'app-color-tile',
  imports: [HexButtonComponent],
  template: `
    <span class="chip" [class.outlined]="tile().outlined" [style.background]="tile().swatch"></span>
    <strong>{{ tile().name }}</strong>
    @if (tile().note; as note) {
      <small>{{ note }}</small>
    }
    @if (tile().hexes.length) {
      <span class="hexes">
        @for (hex of tile().hexes; track hex; let last = $last) {
          <app-hex-button [hex]="hex" />
          @if (!last) {
            →
          }
        }
      </span>
    }
    @if (tile().caption; as caption) {
      <span class="caption">{{ caption }}</span>
    }
  `,
  styles: `
    :host {
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 14px 16px;
      background: var(--surface);
      display: grid;
      gap: 8px;
    }
    .chip {
      height: 54px;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.06);
    }
    .chip.outlined {
      border-color: var(--border);
    }
    strong {
      font-weight: 700;
    }
    small,
    .caption {
      color: var(--muted);
    }
    .caption {
      font-size: 0.9rem;
    }
  `
})
export class ColorTileComponent {
  readonly tile = input.required<ColorTile>();
}
