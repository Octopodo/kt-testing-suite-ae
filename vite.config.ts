import { build, defineConfig } from 'vite';
import { extendscriptConfig } from './vite.es.config';
import path from 'path';
import commandLineArgs from 'command-line-args';

const optionsDefinitions = [
    // { name: 'build', type: String },
    { name: 'watch', type: Boolean },
    { name: 'mode', alias: 'm', type: String },
    { name: 'input', type: String }
];
const args = process.argv.slice(2);
const options = commandLineArgs(optionsDefinitions, {
    argv: args,
    partial: true
});

const input = process.env.VITE_INPUT || 'src/index.ts';
const outDir = process.env.VITE_OUT_PATH || 'dist';
// console.log(options);
const extensions = ['.js', '.ts', '.tsx'];
const outPathExtendscript = path.join(outDir, 'index.js');
const resolvedInput = path.resolve(__dirname, 'src/index.ts');

console.log('Vite config', { resolvedInput, outPathExtendscript, extensions });

console.log(args);

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            input: resolvedInput,
            output: {
                entryFileNames: 'index.js',
                dir: outDir
            }
        }
    }
});

const mode = options.mode === 'production';
extendscriptConfig(input, outPathExtendscript, extensions, mode);
