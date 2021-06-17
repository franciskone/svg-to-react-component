// custom template
// https://github.com/gregberge/svgr/issues/264
module.exports = {
  dimensions: false,
  expandProps: false,
  typescript: true,
  prettier: true,
  replaceAttrValues: {
    '#003357': 'currentColor',
    '#fff': 'transparent',
  },
  svgProps: {
    color: '{color}',
    width: '{size}',
    height: '{size}'
  },
  outDir: 'output',
}
