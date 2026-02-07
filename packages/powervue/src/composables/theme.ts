import { inject, shallowRef, toRef } from 'vue'
import { dark, light } from 'power-vue/themes'
import { mergeDeep } from 'power-vue/utilities'

import type { DeepReadonly, InjectionKey, Ref, ShallowRef } from 'vue'

type BaseColors = {
    background: string
    surface: string
    primary: string
    secondary: string
    success: string
    warning: string
    error: string
    info: string
}

type OnColors = {
    'on-background': string
    'on-surface': string
    'on-primary': string
    'on-secondary': string
    'on-success': string
    'on-warning': string
    'on-error': string
    'on-info': string
}

type Colors = BaseColors & OnColors & {
    [key: string]: string
}

export type ThemeDefinition = {
    dark: boolean
    colors: Colors
    variables: Record<string, string | number>
}

export type ThemeOptions = {
    defaultTheme?: 'light' | 'dark' | string
    themes?: Record<string, ThemeDefinition>
}

export type InternalThemeOptions = {
    defaultTheme: 'light' | 'dark' | string
    prefix: string
    themes: Record<string, ThemeDefinition>
}

export type ThemeInstance = {
    change: (themeName: string) => void
    toggle: (themeArray?: [string, string]) => void

    name: ShallowRef<string>

    readonly themes: Ref<Record<string, ThemeDefinition>>
    readonly current: DeepReadonly<Ref<ThemeDefinition>>
    readonly themeClasses: Readonly<Ref<string>>
}

const parseOptions = (options?: ThemeOptions): InternalThemeOptions => {
    const defaults: InternalThemeOptions = {
        defaultTheme: 'dark',
        prefix: 'aura',
        themes: {
            light,
            dark,
        },
    }

    if (!options) {
        return defaults
    }

    return mergeDeep<InternalThemeOptions>(defaults, options)
}

export const ThemeSymbol: InjectionKey<ThemeInstance> = Symbol.for('power-vue:theme')

export function createTheme(options?: ThemeOptions): ThemeInstance {
    const parsedOptions = parseOptions(options)

    const name = shallowRef<string>(parsedOptions.defaultTheme)

    const themes = toRef(parsedOptions.themes)
    const current = toRef(() => themes.value[name.value])
    const themeClasses = toRef(() => `${parsedOptions.prefix}theme--${name.value}`)

    const change = (theme: string): void => {
        if (!Object.keys(themes.value).includes(theme)) {
            throw new Error(`Theme "${theme}" not found in the PowerVue instance.`)
        }

        name.value = theme
    }

    const toggle = (themeArray: [string, string] = ['light', 'dark']): void => {
        const currentIndex = themeArray.indexOf(name.value)
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % themeArray.length

        change(themeArray[nextIndex])
    }

    return {
        change,
        toggle,
        name,
        themes,
        current,
        themeClasses,
    }
}

export const useTheme = (): ThemeInstance => {
    const theme = inject(ThemeSymbol)

    if (!theme) {
        throw new Error('[PowerVue] Could not find injected theme instance')
    }

    return theme
}
