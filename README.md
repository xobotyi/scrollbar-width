<div align="center">

# @xobotyi/scrollbar-width

A tool to get browser's scrollbars width.

[![NPM Version](https://flat.badgen.net/npm/v/@xobotyi/scrollbar-width)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)
[![NPM Downloads](https://flat.badgen.net/npm/dm/@xobotyi/scrollbar-width)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)
[![NPM Dependents](https://img.shields.io/librariesio/dependents/npm/@xobotyi/scrollbar-width?style=flat-square)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)
[![Build](https://img.shields.io/github/actions/workflow/status/xobotyi/scrollbar-width/ci.yml?branch=master&style=flat-square)](https://github.com/xobotyi/scrollbar-width/actions/workflows/ci.yml)
[![Coverage](https://flat.badgen.net/codecov/c/github/xobotyi/scrollbar-width)](https://app.codecov.io/gh/xobotyi/scrollbar-width)
[![Types](https://flat.badgen.net/npm/types/@xobotyi/scrollbar-width)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)

×&nbsp;**[LIVE EXAMPLE](https://codesandbox.io/s/xobotyiscrollbar-width-live-demo-bp5no)**&nbsp;×

</div>

---

<div align="center">❤️Please consider starring this project to show your love and support.🙌</div>

---

## Installation

```bash
npm install @xobotyi/scrollbar-width
# or via yarn
yarn add @xobotyi/scrollbar-width
```

_INSTALLATION NOTE:_  
The package is published as ES modules only, targets ES2022 and ships its own type definitions.

**OR**  
you can add it directly to your site via a module script with help of [UNPKG](https://unpkg.com):

```html
<script type="module">
	import {scrollbarWidth} from 'https://unpkg.com/@xobotyi/scrollbar-width';

	console.log(scrollbarWidth());
</script>
```

## Usage

```javascript
import {scrollbarWidth} from '@xobotyi/scrollbar-width';

scrollbarWidth(); // 15-17 in desktop browsers with classic scrollbars, 0 where the
// platform draws overlay scrollbars [macOS, most mobile browsers] and 0 in SSR
// environment, or undefined if to call it too early [read below]
```

This function caches the value to avoid increased resources usage. In case you want to get re-calculated value - pass `true` as first call parameter.

> **NOTE:**  
> Function will return `undefined` in case being called before the DOM is ready.

#### One more clarification

This function has inner cache due to scrollbars width is not intended to be changed since initial call, but it can in case you toggle the device emulation.  
If you need function to recalculate the width call it with `true` parameter and get new value or set `scrollbarWidth.__cache` to `undefined` and next call will return the fresh value.

## Related projects

- [react-scrollbars-custom](https://www.npmjs.com/package/react-scrollbars-custom) &mdash; The best React custom scrollbars component. Allows you to customise scrollbars as you like it, crossbrowser!
- [zoom-level](https://www.npmjs.com/package/zoom-level) &mdash; A comprehensive cross-browser package that allow you to determine page's and element's zoom level.
- [@xobotyi/should-reverse-rtl-scroll](https://www.npmjs.com/package/@xobotyi/should-reverse-rtl-scroll) &mdash; A tool detecting if RTL scroll value should be negative.
