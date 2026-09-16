import {beforeEach, describe, expect, it} from 'vite-plus/test';
import {scrollbarWidth} from '../src/index.js';

describe('scrollbarWidth', () => {
	beforeEach(() => {
		scrollbarWidth.__cache = undefined;
	});

	it('should be defined', () => {
		expect(scrollbarWidth).toBeDefined();
	});

	it('should return a non-negative number', () => {
		const res = scrollbarWidth();

		expect(typeof res).toBe('number');
		expect(res).toBeGreaterThanOrEqual(0);
	});

	it('should cache the measured value', () => {
		const res = scrollbarWidth();

		expect(scrollbarWidth.__cache).toBe(res);
	});

	it('should leave no measurement element behind', () => {
		const childrenBefore = document.body.children.length;

		scrollbarWidth();

		expect(document.body.children.length).toBe(childrenBefore);
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

	it('should recalculate and cache value if true passed as first argument', () => {
		const measured = scrollbarWidth();

		scrollbarWidth.__cache = 3;

		expect(scrollbarWidth(true)).toBe(measured);
		expect(scrollbarWidth.__cache).toBe(measured);
	});
});
