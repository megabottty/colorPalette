import { Component } from '@angular/core';
import { ColorTileComponent } from './components/color-tile.component';
import { ThemeCardComponent } from './components/theme-card.component';
import { ToastComponent } from './components/toast.component';
import {
  BRAND_TILES,
  CUSTOM_DEFAULT_TILES,
  DEFAULT_THEME_ID,
  GENERATED_ON,
  SHAPE_ROWS,
  SOURCE_FILE,
  STATUS_TILES,
  THEME_ROLES,
  THEMES,
  TYPOGRAPHY_ROWS
} from './data/palette.data';

@Component({
  selector: 'app-root',
  imports: [ColorTileComponent, ThemeCardComponent, ToastComponent],
  template: `
    <div class="wrap">
      <header class="hero">
        <div class="logo" aria-hidden="true">D</div>
        <div>
          <p class="eyebrow">Brand hand-off</p>
          <h1>Dexii colour palette</h1>
          <p class="lede">
            Every colour the app ships, as it is written in code. Dexii is a private crush journal
            with an inner circle of friends, so the themes range from soft and glamorous to dark and
            dramatic. People pick a theme; the default is Pearl.
          </p>
        </div>
      </header>
      <div class="meta">
        <span>Generated <code>{{ generatedOn }}</code> from <code>{{ sourceFile }}</code></span>
        <span>{{ themes.length }} themes · {{ roleCount }} roles each</span>
        <span>Tap any hex to copy it</span>
      </div>

      <h2>Brand constants</h2>
      <p class="sub">These are fixed regardless of the theme a person picks.</p>
      <div class="tile-grid">
        @for (tile of brandTiles; track tile.name) {
          <app-color-tile [tile]="tile" />
        }
      </div>

      <h2>Status colours</h2>
      <p class="sub">Semantic colours stay the same in every theme.</p>
      <div class="tile-grid">
        @for (tile of statusTiles; track tile.name) {
          <app-color-tile [tile]="tile" />
        }
      </div>

      <h2>Themes</h2>
      <p class="sub">
        Each theme defines the same {{ roleCount }} roles. Contrast ratios are text on background for
        the text roles, and white text on the colour for primary, hover and accent. "Low" means below
        3:1.
      </p>
      <div class="themes">
        @for (theme of themes; track theme.id) {
          <app-theme-card [theme]="theme" [isDefault]="theme.id === defaultThemeId" />
        }
      </div>

      <h2>Custom theme defaults</h2>
      <p class="sub">
        People can build their own theme from three colours; the rest is derived. These are the
        starting values.
      </p>
      <div class="tile-grid">
        @for (tile of customDefaultTiles; track tile.name) {
          <app-color-tile [tile]="tile" />
        }
      </div>

      <h2>Typography</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Stack</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            @for (row of typographyRows; track row.name) {
              <tr>
                <td><strong>{{ row.name }}</strong></td>
                <td><code>{{ row.value }}</code></td>
                <td>{{ row.notes }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <h2>Shape &amp; spacing</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Value</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            @for (row of shapeRows; track row.name) {
              <tr>
                <td><strong>{{ row.name }}</strong></td>
                <td><code>{{ row.value }}</code></td>
                <td>{{ row.notes }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <h2>Notes for the designer</h2>
      <div class="notes">
        <p>
          <strong>Primary</strong> is the one colour that has to carry white text: buttons, the
          active tab, links. <strong>Accent</strong> is used sparingly for counts and highlights
          (the Tea cup badge, stars, the Vault). Keep them distinguishable from each other in every
          theme.
        </p>
        <p>
          <strong>Pearl</strong> is the first impression: it is the default theme, the install icon
          and the splash screen. If the brand gets one colour, it is Pearl's primary #8d5e94, with
          gold #d4af37 as its partner.
        </p>
        <p>
          Four themes are dark (Onyx, Rugged, Gothic, Clean Dark). Anything you design should be
          checked on at least Pearl, Onyx and Clean Light.
        </p>
        <p>
          Text never renders below 16px in the app, and every button is a pill. Icons are emoji
          today (💘 crushes, 💬 chat, 🍵 Tea, 👥 friends); a custom icon set is an open opportunity.
        </p>
      </div>
    </div>
    <app-toast />
  `,
  styles: `
    .wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
      padding-block: 32px 72px;
    }
    .hero {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 20px;
      align-items: center;
      margin-bottom: 12px;
    }
    .logo {
      width: 72px;
      height: 72px;
      border-radius: 22px;
      display: grid;
      place-items: center;
      color: #fff;
      font-family: var(--display);
      font-size: 2.4rem;
      font-weight: 600;
      background: linear-gradient(135deg, #a881af, #d4af37);
      box-shadow: 0 12px 30px rgba(141, 94, 148, 0.25);
    }
    h1 {
      font-family: var(--display);
      font-weight: 600;
      font-size: clamp(2rem, 6vw, 3.2rem);
      line-height: 1.05;
      margin: 0;
      text-wrap: balance;
    }
    .eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .lede {
      margin: 6px 0 0;
      color: var(--muted);
      max-width: 60ch;
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 18px;
      margin: 18px 0 36px;
      color: var(--muted);
      font-size: 0.95rem;
    }
    .meta code {
      font-family: var(--mono);
      font-size: 0.9rem;
      color: var(--text);
    }
    h2 {
      font-family: var(--display);
      font-weight: 600;
      font-size: 1.9rem;
      margin: 44px 0 6px;
      text-wrap: balance;
    }
    .sub {
      margin: 0 0 18px;
      color: var(--muted);
      max-width: 65ch;
    }
    .tile-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
    }
    .themes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr));
      gap: 18px;
    }
    .table-wrap {
      overflow-x: auto;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      font-size: 0.98rem;
    }
    th,
    td {
      text-align: left;
      padding: 10px 12px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
    }
    th {
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      font-weight: 700;
    }
    td code {
      font-family: var(--mono);
      font-size: 0.88rem;
    }
    .notes {
      display: grid;
      gap: 10px;
      max-width: 70ch;
    }
    .notes p {
      margin: 0;
    }
  `
})
export class AppComponent {
  protected readonly themes = THEMES;
  protected readonly roleCount = THEME_ROLES.length;
  protected readonly defaultThemeId = DEFAULT_THEME_ID;
  protected readonly brandTiles = BRAND_TILES;
  protected readonly statusTiles = STATUS_TILES;
  protected readonly customDefaultTiles = CUSTOM_DEFAULT_TILES;
  protected readonly typographyRows = TYPOGRAPHY_ROWS;
  protected readonly shapeRows = SHAPE_ROWS;
  protected readonly generatedOn = GENERATED_ON;
  protected readonly sourceFile = SOURCE_FILE;
}
