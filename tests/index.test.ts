import { scrollbarWidth } from '../src/index';

const isLinux = navigator.platform.indexOf('Linux') !== -1;
const isFirefox = /firefox|iceweasel|fxios/i.test(navigator.userAgent.toLowerCase());

describe('scrollbarWidth', () => {
  beforeEach(() => {
    scrollbarWidth.__cache = undefined;
  });

  it('should be defined', () => {
    expect(scrollbarWidth).toBeDefined();
  });

  it('should return proper numeric value', () => {
    const res = scrollbarWidth();

    expect(typeof res).toBe('number');
    // eslint-disable-next-line no-nested-ternary
    expect(res).toBe(isLinux ? (isFirefox ? 16 : 15) : 17); // have no idea what the values for MacOS
  });

  it('should return cached value if presented', () => {
    scrollbarWidth.__cache = 0;
    expect(scrollbarWidth()).toBe(0);
    scrollbarWidth.__cache = 1;
    expect(scrollbarWidth()).toBe(1);
    scrollbarWidth.__cache = 2;
    expect(scrollbarWidth()).toBe(2);
    scrollbarWidth.__cache = 3;
    expect(scrollbarWidth()).toBe(3);
  });

  it('should recalculate and cache value if true passed as first element', () => {
    scrollbarWidth.__cache = 3;
    // eslint-disable-next-line no-nested-ternary
    expect(scrollbarWidth(true)).toBe(isLinux ? (isFirefox ? 16 : 15) : 17);
  });
});
