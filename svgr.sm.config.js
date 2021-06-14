const commonConfig = require('./svgr.common.config')
module.exports = {
  ...commonConfig,
  svgProps: {
    ...commonConfig.svgProps,
    width: '24',
    height: '24'
  }
}
