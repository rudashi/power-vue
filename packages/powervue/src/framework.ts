import { App } from 'vue'
import { createTheme, ThemeSymbol } from 'power-vue/composables/theme'
import { createLocale, LocaleSymbol } from 'power-vue/composables/locale'
import { createIcons, IconSymbol } from 'power-vue/composables/icons'

import type { ThemeOptions } from 'power-vue/composables/theme'
import type { LocaleOptions } from 'power-vue/composables/locale'
import type { IconOptions } from 'power-vue/composables/icons'

export interface PowerVueOptions {
    theme?: ThemeOptions
    icons?: IconOptions
    locale?: LocaleOptions
    components?: Record<string, any>
    directives?: Record<string, any>
}

export function createPowerVue(options: PowerVueOptions = {}) {
    const {
        components = {},
        directives = {},
    } = options

    const theme = createTheme(options.theme)
    const icons = createIcons(options.icons)
    const locale = createLocale(options.locale)

    const install = (app: App): void => {
        for (const directive in directives) {
            app.directive(directive, directives[directive])
        }

        for (const component in components) {
            app.component(component, components[component])
        }

        app.provide(ThemeSymbol, theme)
        app.provide(IconSymbol, icons)
        app.provide(LocaleSymbol, locale)
    }

    return {
        install,
        theme,
        icons,
        locale,
    }
}

export default {
    install: createPowerVue().install,
}
