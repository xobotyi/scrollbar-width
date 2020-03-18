import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = './src/index.ts';

module.exports = [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
      },
      {
        file: 'dist/index.min.js',
        format: 'umd',
        exports: 'named',
        name: 'xobotyi',
        extend: true,
      },
    ],
    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
            target: 'es5',
          },
        },
      }),
      terser(),
    ],
  },
  {
    input,
    output: {
      file: pkg.esnext,
      format: 'esm',
    },
    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
            target: 'esnext',
            declaration: true,
            declarationDir: 'dist',
          },
        },
      }),
      terser(),
    ],
  },
];
