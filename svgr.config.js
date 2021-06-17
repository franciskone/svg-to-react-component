// custom template
// https://github.com/gregberge/svgr/issues/264
module.exports = {
  dimensions: false,
  expandProps: false,
  typescript: true,
  prettier: false,
  replaceAttrValues: {
    '#003357': 'currentColor',
    'white': 'transparent',
    '#fff': 'transparent',
  },
  svgProps: {
    color: '{color}',
    width: '{size}',
    height: '{size}',
  },
  outDir: 'output',
  plugins: ['@svgr/plugin-jsx'],
  // jsx: {
  //   babelConfig: {
  //     plugins: [
  //       [
  //         '@svgr/babel-plugin-replace-jsx-attribute-value',
  //         {
  //           values: [{ value: 2, newValue: 'strokeWidth', literal: true }],
  //         },
  //       ],
  //     ],
  //   },
  // },
}
