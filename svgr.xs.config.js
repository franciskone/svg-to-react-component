const commonConfig = require('./svgr.common.config')
module.exports = {
  ...commonConfig,
  svgProps: {
    ...commonConfig.svgProps,
    width: '17',
    height: '17'
  }
}
