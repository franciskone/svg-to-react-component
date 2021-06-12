function template(
  { template },
  opts,
  { componentName, jsx },
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const realName = componentName.name.replace('Svg', '') + ': FC<React.SVGProps<SVGSVGElement>>'
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`import React from 'react'
import type { FC } from 'react'
${'\n'}
export const ${realName} = ({color}) => ${jsx}
  `
}

module.exports = template