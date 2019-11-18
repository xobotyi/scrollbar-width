# @xobotyi/scrollbar-width
Comprehensive and lightweight tool to get browser's scrollbars width.

<br />

[![Build status](https://flat.badgen.net/travis/xobotyi/scrollbar-width)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)
[![NPM version](https://flat.badgen.net/npm/v/@xobotyi/scrollbar-width)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)
[![License](https://flat.badgen.net/npm/license/@xobotyi/scrollbar-width)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)
[![Types definition](https://flat.badgen.net/npm/types/@xobotyi/scrollbar-width)](https://www.npmjs.com/package/@xobotyi/scrollbar-width)

<br />

❤️Please consider starring this project to show your love and support.🙌

### Installation
```bash
npm install @xobotyi/scrollbar-width
# or via yarn
yarn add @xobotyi/scrollbar-width
```
_INSTALLATION NOTE:_  
This lib is written in TypeScript and delivered with both, transpiled and untranspiled ES versions:

- `main` field of package.json is pointing to transpiled ES5-compatible version with CJS modules resolution;
- `module` field is pointing to transpiled ES5-compatible version with ES modules resolution;
- `esnext` field is pointing to the ESnext version with ES modules resolution;


**OR** you can add it directly to your site via the `script` tag with help of UNPKG:
```html
<script src="https://unpkg.com/@xobotyi/scrollbar-width/dist/index.min.js"/>
```
After that you will be able to use the function as `xobotyi.scrollbarWidth()`

### Usage

```javascript
import { scrollbarWidth } from '@xobotyi/scrollbar-width';

scrollbarWidth(); // for most browsers will return 17
// or undefined if to call it too early [read below]
```

This function caches the value to avoid increased resources usage. In case you want to get re-calculated values - pass `true` as first call parameter.

>**NOTE:**
>Function will return `undefined` in case being called before the DOM is ready.

#### Related projects
- [react-scrollbars-custom](https://www.npmjs.com/package/react-scrollbars-custom) &mdash; The best React custom scrollbars component. Allows you to customise scrollbars as you like it, crossbrowser!
- [zoom-level](https://www.npmjs.com/package/zoom-level) &mdash; A comprehensive cross-browser package that allow you to determine page's and element's zoom level.
