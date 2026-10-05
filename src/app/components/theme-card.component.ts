import { Component, computed, input } from '@angular/core';
import { ContrastBasis, THEME_ROLES, ThemeDefinition, ThemePalette } from '../data/palette.data';
import { contrastGrade, contrastRatio } from '../utils/contrast';
import { HexButtonComponent } from './hex-button.component';

const CONTRAST_TITLES: Record<ContrastBasis, string> = {
  themeTextOnThis: "Contrast of this theme's text on this colour",
  thisOnBackground: 'Contrast of this text on the background',
  whiteOnThis: 'Contrast of white text on this colour'
};

function measure(basis: ContrastBasis, hex: string, colors: ThemePalette): number {
  switch (basis) {
    case 'themeTextOnThis':
      return contrastRatio(colors.text, hex);
    case 'thisOnBackground':
      return contrastRatio(hex, colors.bg);
    case 'whiteOnThis':
      return contrastRatio('#ffffff', hex);
  }
}

@Component({
  selector: 'app-theme-card',
  imports: [HexButtonComponent],
  template: `
    <article class="theme" [id]="theme().id">
      <header class="theme-head">
        <div>
          <h3>
            {{ theme().name }}
            @if (isDefault()) {
              <span class="tag">Default</span>
            }
          </h3>
          <p>{{ theme().description }}</p>
        </div>
        <div
          class="theme-preview"
          [style.background]="colors().bg"
          [style.color]="colors().text"
          [style.border-color]="colors().border"
        >
          <div class="tp-bar" [style.border-color]="colors().border">
            <span class="tp-logo" [style.background]="logoGradient()">D</span>
            <span class="tp-word">Dexii</span>
            <span class="tp-badge" [style.background]="colors().accent">3</span>
          </div>
          <div
            class="tp-card"
            [style.background]="colors().bgSecondary"
            [style.border-color]="colors().border"
          >
            <span class="tp-eyebrow" [style.color]="colors().textSecondary">Active crushes</span>
            <span class="tp-title">Sunny</span>
            <span class="tp-stars" [style.color]="colors().accent">★★★☆☆</span>
            <span class="tp-pill" [style.background]="colors().primary">New crush</span>
          </div>
        </div>
      </header>
      <ul class="swatches">
        @for (swatch of swatches(); track swatch.key) {
          <li class="sw">
            <span class="sw-chip" [style.background]="swatch.hex"></span>
            <span class="sw-role">{{ swatch.label }}<small>{{ swatch.hint }}</small></span>
            <app-hex-button [hex]="swatch.hex" [compact]="true" />
            <span class="sw-contrast" [class.is-low]="swatch.grade === 'Low'" [title]="swatch.title"
              >{{ swatch.ratio }}:1 · {{ swatch.grade }}</span
            >
          </li>
        }
      </ul>
    </article>
  `,
  styles: `
    :host {
      display: contents;
    }
    .theme {
      border: 1px solid var(--border);
      border-radius: 16px;
      background: var(--surface);
      padding: 18px;
      display: grid;
      gap: 14px;
      scroll-margin-top: 16px;
    }
    .theme-head {
      display: grid;
      grid-template-columns: 1fr 150px;
      gap: 14px;
      align-items: start;
    }
    h3 {
      font-family: var(--display);
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0;
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }
    p {
      margin: 4px 0 0;
      color: var(--muted);
    }
    .tag {
      font-family: var(--body);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--primary);
      border: 1px solid currentColor;
      border-radius: 999px;
      padding: 2px 10px;
    }
    .theme-preview {
      border: 1px solid;
      border-radius: 12px;
      padding: 8px;
      display: grid;
      gap: 8px;
      font-family: var(--body);
      font-size: 0.7rem;
    }
    .tp-bar {
      display: flex;
      align-items: center;
      gap: 6px;
      padding-bottom: 6px;
      border-bottom: 1px solid;
    }
    .tp-logo {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      display: grid;
      place-items: center;
      color: #fff;
      font-family: var(--display);
      font-weight: 600;
    }
    .tp-word {
      font-family: var(--display);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 0.75rem;
    }
    .tp-badge {
      margin-left: auto;
      color: #fff;
      border-radius: 999px;
      min-width: 16px;
      height: 16px;
      display: grid;
      place-items: center;
      font-size: 0.6rem;
      font-weight: 700;
      padding: 0 4px;
    }
    .tp-card {
      border: 1px solid;
      border-radius: 10px;
      padding: 8px;
      display: grid;
      gap: 3px;
    }
    .tp-eyebrow {
      font-size: 0.55rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .tp-title {
      font-family: var(--display);
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .tp-stars {
      letter-spacing: 2px;
    }
    .tp-pill {
      justify-self: start;
      color: #fff;
      border-radius: 999px;
      padding: 3px 9px;
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: 3px;
    }
    .swatches {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 6px;
    }
    .sw {
      display: grid;
      grid-template-columns: 44px 1fr auto auto;
      gap: 10px;
      align-items: center;
    }
    .sw-chip {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    .sw-role {
      display: grid;
      line-height: 1.25;
      font-weight: 600;
    }
    .sw-role small {
      color: var(--muted);
      font-weight: 400;
    }
    .sw-contrast {
      font-size: 0.78rem;
      color: var(--muted);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .sw-contrast.is-low {
      color: var(--low);
      font-weight: 700;
    }
    @media (max-width: 560px) {
      .theme-head {
        grid-template-columns: 1fr;
      }
      .theme-preview {
        max-width: 220px;
      }
      .sw {
        grid-template-columns: 36px 1fr auto;
      }
      .sw-contrast {
        grid-column: 2 / -1;
        justify-self: start;
      }
      .sw-chip {
        width: 36px;
        height: 36px;
      }
    }
  `
})
export class ThemeCardComponent {
  readonly theme = input.required<ThemeDefinition>();
  readonly isDefault = input(false);

  protected readonly colors = computed(() => this.theme().colors);

  protected readonly logoGradient = computed(
    () => `linear-gradient(135deg,${this.colors().primary},${this.colors().accent})`
  );

  protected readonly swatches = computed(() => {
    const colors = this.colors();
    return THEME_ROLES.map((role) => {
      const hex = colors[role.key];
      const ratio = measure(role.contrast, hex, colors);
      return {
        key: role.key,
        label: role.label,
        hint: role.hint,
        hex,
        ratio: ratio.toFixed(1),
        grade: contrastGrade(ratio),
        title: CONTRAST_TITLES[role.contrast]
      };
    });
  });
}
