import { Injectable, signal } from '@angular/core';

const TOAST_MS = 1400;

@Injectable({
  providedIn: 'root'
})
export class CopyService {
  readonly message = signal('Copied');
  readonly visible = signal(false);

  private timer?: ReturnType<typeof setTimeout>;

  async copy(value: string, source: HTMLElement) {
    try {
      await navigator.clipboard.writeText(value);
      this.show(`Copied ${value}`);
    } catch {
      // No clipboard access (blocked permission, insecure context): select the text so it can be copied by hand.
      const range = document.createRange();
      range.selectNodeContents(source);
      const selection = getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      this.show(`Select and copy ${value}`);
    }
  }

  private show(message: string) {
    this.message.set(message);
    this.visible.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.visible.set(false), TOAST_MS);
  }
}
