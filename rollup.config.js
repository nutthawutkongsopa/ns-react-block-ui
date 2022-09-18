import resolve from "@rollup/plugin-node-resolve";
import { terser } from 'rollup-plugin-terser';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: "inline"
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: "inline"
            },
        ],
        plugins: [
            peerDepsExternal(),
            postcss({
                extract: false,
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json", sourceMap: true, inlineSources: true }),
            terser()
        ],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.scss$/],
    },
];