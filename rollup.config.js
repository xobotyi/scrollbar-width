import ts2 from "rollup-plugin-typescript2";
import pkg from "./package.json";

const input = './src/index.ts';

export default [
    {
        input,
        output: [
            {
                file: pkg.main,
                format: "cjs",
                exports: "named",
            },
            {
                file: pkg.module,
                format: "esm",
                exports: "named",
            },
            {
                file: 'dist/index.min.js',
                format: "umd",
                exports: "named",
                name: "xobotyi",
                extend: true,
            },
        ],
        plugins: [
            ts2({
                    clean: true,
                    tsconfigOverride: {
                        compilerOptions: {
                            target: "es5",
                        },
                    },
                }),
        ],
    },
    {
        input,
        output: {
            file: pkg.esnext,
            format: "esm",
        },
        plugins: [
            ts2({
                    clean: true,
                    tsconfigOverride: {
                        compilerOptions: {
                            declaration: true,
                            declarationDir: 'dist',
                        },
                    },
                }),
        ],
    },
];
