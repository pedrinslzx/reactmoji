export type Options = { host: string; https: boolean }

let options: Options = { host: 'reactmoji.pedrinholemes.com.br', https: true }

export function getOptions(): Options {
  return options
}

export function setOptions(newOptions: Options): void {
  options = newOptions
}
