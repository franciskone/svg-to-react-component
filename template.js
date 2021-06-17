function template(
  { template },
  opts,
  { componentName, jsx },
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const realName = componentName.name.replace('Svg', '')
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`import React from 'react'
  import type { FunctionalIconSvgProps } from '../FunctionalIcon'
${'\n'}
export const ${realName} = ({ color, size }: FunctionalIconSvgProps ) => ${jsx}
  `
}

module.exports = template
