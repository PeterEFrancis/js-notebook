import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import postcssUrl from 'postcss-url';

export default async () => {
  const sharedPlugins = [
    resolve({
      extensions: ['.js', '.css']
    }),
    commonjs(),
    postcss({
      inject: true,
      extract: false,
      plugins: [
        postcssImport(),
        postcssUrl({
          url: 'inline',
          maxSize: 0
        })
      ],
      include: ['**/*.css']
    }),
  ];

  return [
    {
      context: 'window',
      input: 'src/index.js',
      output: {
        file: 'dist/js-notebook.min.js',
        format: 'umd',
        name: 'JSNotebook',
      },
      plugins: [
        ...sharedPlugins,
        terser(),
        copy({
          targets: [{ src: 'src/style.css', dest: 'dist' }]
        })
      ]
    },
    {
      input: 'src/index.js',
      output: {
        file: 'dist/js-notebook.esm.js',
        format: 'es',
      },
      plugins: sharedPlugins
    }
  ];
};