function template(
  { template },
  opts,
  { componentName, jsx },
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const realName = componentName.name.replace('Svg', '').replace('16Px', '')
  const typeName = `${realName}Props`
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`import React from 'react'
import type { FC } from 'react'
${'\n'}
type ${typeName} = {
  color: string
  size: string
}
${'\n'}
export const ${realName}: FC<${typeName}> = ({color, size}) => ${jsx}
  `
}

module.exports = template
