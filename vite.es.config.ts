import { rollup, watch, RollupOptions, OutputOptions } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { jsxInclude, jsxBin, jsxPonyfill } from 'vite-cep-plugin';
import path from 'path';
import json from '@rollup/plugin-json';
const GLOBAL_THIS = 'thisObj';

const customPonyfills = [
    {
        find: 'Object.create',
        replace: '__objectCreate',
        inject: `function __objectCreate(proto) { function F() {}; F.prototype = proto; return new F(); };`
    },
    {
        find: 'Object.assign',
        replace: '__objectAssign',
        inject: `function __objectAssign(target, ...sources) { for (const source of sources) { for (const key in source) { target[key] = source[key]; } } return target; };`
    },
    {
        find: 'Object.defineProperty',
        replace: '__defineProperty',
        inject: `function __defineProperty(obj, prop, descriptor) { if (descriptor && descriptor.value !== undefined) { obj[prop] = descriptor.value; } return obj; };`
    }
];

export const extendscriptConfig = (
    extendscriptEntry: string,
    outPath: string,
    extensions: string[],
    isProduction: boolean
) => {
    console.log(outPath);
    const config: RollupOptions = {
        input: extendscriptEntry,
        treeshake: true,
        output: {
            file: outPath,
            sourcemap: true,
            footer: `thisObj.KT = KT;`
        },
        external: [],
        plugins: [
            json(),
            nodeResolve({
                extensions
            }),

            babel({
                extensions,
                babelrc: false,
                babelHelpers: 'bundled',
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                esmodules: 'commonjs',
                                ie: '9'
                            }
                        }
                    ],
                    '@babel/preset-typescript'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-syntax-dynamic-import',
                    ['@babel/plugin-transform-classes', { loose: true }]
                ]
            }),
            jsxPonyfill(customPonyfills),
            jsxInclude({
                iife: true,
                globalThis: GLOBAL_THIS
            }),

            {
                name: 'modify-final-bundle',
                generateBundle(options, bundle) {
                    for (const fileName of Object.keys(bundle)) {
                        const chunk = bundle[fileName];
                        if (chunk.type === 'chunk') {
                            // Modifica el código del archivo final
                            chunk.code = chunk.code.replace(
                                /(^|\n)\s*export\s+(default\s+)?({[^}]+}|\w+\s*(=|\([^)]*\))?.*?(;|\n|$)|class\s+\w+\s*{[\s\S]*?}|\s*function\s+\w+\s*\([^)]*\)\s*{[\s\S]*?});/g,
                                '$1'
                            );
                        }
                    }
                }
            }
        ]
    };

    async function build() {
        const bundle = await rollup(config);
        await bundle.write(config.output as OutputOptions);
        await bundle.close();
    }

    function watchRollup() {
        const watcher = watch(config);
        watcher.on('event', (event) => {
            switch (event.code) {
                case 'START':
                    console.log('Watcher iniciado...');
                    break;
                case 'BUNDLE_START':
                    console.log('Reconstruyendo...');
                    break;
                case 'BUNDLE_END':
                    event.result
                        .write(config.output as OutputOptions)
                        .then(() => {
                            console.log('Archivo actualizado:', outPath);
                            event.result.close();
                        });
                    break;
                case 'END':
                    console.log('Watch ciclo completo');
                    break;
                case 'ERROR':
                    console.error('Error en watch:', event.error);
                    break;
            }
        });
    }

    if (isProduction) {
        build();
    } else {
        watchRollup();
    }
};
