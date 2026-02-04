export type IconValue = string

export type IconAlias = keyof IconAliases

export type IconAliases = {
    [name: string]: IconValue
    cancel: IconValue
    close: IconValue
    delete: IconValue
    clear: IconValue
    success: IconValue
    info: IconValue
    warning: IconValue
    error: IconValue
}

export { default as aliasesMdiSvg } from './mdi-svg'
