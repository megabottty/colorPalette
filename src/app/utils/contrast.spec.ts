import { contrastGrade, contrastRatio } from './contrast';

describe('contrastRatio', () => {
  it('is 21 for black on white and 1 for a colour on itself', () => {
    expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 5);
    expect(contrastRatio('#8d5e94', '#8d5e94')).toBe(1);
  });

  it('does not depend on argument order', () => {
    expect(contrastRatio('#4a374a', '#fffafa')).toBe(contrastRatio('#fffafa', '#4a374a'));
  });

  it('accepts shorthand hex', () => {
    expect(contrastRatio('#000', '#fff')).toBeCloseTo(21, 5);
  });

  it('matches the Pearl theme values', () => {
    expect(contrastRatio('#4a374a', '#fffafa').toFixed(1)).toBe('10.5');
    expect(contrastRatio('#ffffff', '#8d5e94').toFixed(1)).toBe('5.0');
    expect(contrastRatio('#ffffff', '#d4af37').toFixed(1)).toBe('2.1');
  });
});

describe('contrastGrade', () => {
  it('grades at the WCAG thresholds', () => {
    expect(contrastGrade(7)).toBe('AAA');
    expect(contrastGrade(6.99)).toBe('AA');
    expect(contrastGrade(4.5)).toBe('AA');
    expect(contrastGrade(4.49)).toBe('AA large');
    expect(contrastGrade(3)).toBe('AA large');
    expect(contrastGrade(2.99)).toBe('Low');
  });

  it('grades on the exact ratio, not the rounded one', () => {
    // White on Onyx's accent displays as 4.5:1 but falls just short of AA.
    const ratio = contrastRatio('#ffffff', '#6366f1');
    expect(ratio.toFixed(1)).toBe('4.5');
    expect(contrastGrade(ratio)).toBe('AA large');
  });
});
