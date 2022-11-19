import { isObject } from '@chakra-ui/utils'
import DocComponents from 'components/doc-components'

/**
 * Replace the code blocks wrapped in backticks
 * with inline code blocks.
 */

function toInlineCode(input: string) {
  return input
    .split(/(`\w+`)/)
    .map(chunk =>
      chunk.startsWith('`') && chunk.endsWith('`') ? (
        <DocComponents.code key={chunk}>
          {chunk.slice(1, -1)}
        </DocComponents.code>
      ) : (
        chunk
      )
    )
}

export function convertBackticksToInlineCode(input?: string | JSX.Element) {
  if (!input) return ''
  return isObject(input) ? input : toInlineCode(input)
}
