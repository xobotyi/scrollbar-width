export type IScrollbarWidth = {
	(force?: boolean): number | undefined;

	__cache?: number | undefined;
};

export const scrollbarWidth: IScrollbarWidth = (force?: boolean): number | undefined => {
	// safety check for SSR
	/* v8 ignore next 3 */
	if (typeof document === 'undefined') {
		return 0;
	}

	// one more safety check. If document has no body element that means script tag been
	// included before the </body> tag, which in general means that DOM is not ready yet.
	// constraint: the DOM lib types `document.body` non-nullable, while it is null until the parser reaches <body>
	/* v8 ignore next 3 */
	if (document.body === null || document.readyState === 'loading') {
		return undefined;
	}

	// return cached value if we have some
	if (force !== true && typeof scrollbarWidth.__cache === 'number') {
		return scrollbarWidth.__cache;
	}

	const el = document.createElement('div');
	const {style} = el;

	// for the case of weird css rules where div will not be a block element.
	style.display = 'block';
	style.position = 'absolute';
	style.width = '100px';
	style.height = '100px';
	style.left = '-999px';
	style.top = '-999px';
	style.overflow = 'scroll';

	document.body.append(el);

	const {clientWidth} = el;

	// if element still has no width it means DOM is not ready yet
	/* v8 ignore next 5 */
	if (clientWidth === 0) {
		// remove the element and skip the caching
		el.remove();
		return undefined;
	}

	// clientWidth is the total width of the block - scrollbar width, thus, to get the scrollbar width
	// it works well for desktop, but in mobile browsers scrollbar as absolutely positioned and i
	// dont know ant way to determine mobile browser's scrollbar width, so for mobile that value will be always 0.
	scrollbarWidth.__cache = 100 - clientWidth;

	el.remove();

	return scrollbarWidth.__cache;
};
