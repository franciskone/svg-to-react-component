// custom template
// https://github.com/gregberge/svgr/issues/264
module.exports = {
  ext: 'tsx',
  expandProps: false,
  typescript: true,
  prettier: true,
  replaceAttrValues: {
    '#003357': 'currentColor',
  },
  svgProps: {
    color: '{color}',
    width: '{size}',
    height: '{size}',
    viewBox: '0 0 24 24'
  },
  outDir: 'output',
}
