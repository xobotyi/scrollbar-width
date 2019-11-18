export interface IScrollbarWidth {
  (force?: boolean): number | undefined;

  __cache?: number;
}

export const scrollbarWidth: IScrollbarWidth = (force?: boolean): number | undefined => {
  // safety check for SSR
  if (!document) {
    return 0;
  }

  // return cached value if we have some
  if (!force && typeof scrollbarWidth.__cache === 'number') {
    return scrollbarWidth.__cache;
  }

  const el = document.createElement('div');
  const style = el.style;

  // for the case of weird css rules where div will not be a block element.
  style.display = 'block';
  style.position = 'absolute';
  style.width = style.height = '100px';
  style.left = style.top = '-999px';
  style.overflow = 'scroll';

  document.body.insertBefore(el, null);

  const clientWidth = el.clientWidth;

  // if element still has no width it means DOM is not ready yet
  if (clientWidth === 0) {
    // remove the element and skip the caching
    document.body.removeChild(el);
    return;
  }

  scrollbarWidth.__cache = 100 - clientWidth;

  document.body.removeChild(el);

  return scrollbarWidth.__cache;
};
