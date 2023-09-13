import { getOptions } from '../config'

export function genURL(path: string) {
  const options = getOptions()

  return `http${options.https ? 's' : ''}://${options.host}/72x72/` + path
}
