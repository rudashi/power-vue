import { h, inject } from 'vue'
import { mergeDeep } from 'power-vue/utilities'
import { aliasesMdiSvg as aliases } from '@power-vue/icons'

import type { FunctionalComponent, InjectionKey } from 'vue'
import type { IconAlias, IconAliases, IconValue } from '@power-vue/icons'

type IconComponent = FunctionalComponent<IconProps>

type IconSet = {
    component: IconComponent
}

type InternalIconOptions = {
    defaultSet: string
    sets: Record<string, IconSet>
    aliases: Partial<IconAliases>
}

type IconInstance = {
    component: IconComponent
    icon?: IconValue
}

export type IconOptions = Partial<InternalIconOptions>

export interface IconProps {
    tag: string
    icon: IconValue
}

function genDefaults(): Record<string, IconSet> {
    return {
        'mdi-svg': {
            component: SvgIcon,
        },
    }
}

export const IconSymbol: InjectionKey<InternalIconOptions> = Symbol.for('power-vue:icons')

export const useIcon = (alias: IconAlias): IconInstance => {
    const icons = inject(IconSymbol)

    if (!icons) {
        throw new Error('[PowerVue] Could not find injected icons instance')
    }

    const icon = icons.aliases[alias]

    if (!icon) {
        throw new Error(`[PowerVue] Could not find aliases icon "${alias}".`)

    }
    return {
        component: icons.sets[icons.defaultSet].component,
        icon,
    }
}

export const SvgIcon: IconComponent = props => () => h(props.tag ?? 'svg', { class: 'icon' }, props.icon)

export const createIcons = (options?: IconOptions): InternalIconOptions => {
    const sets = genDefaults()
    const defaultSet = options?.defaultSet ?? 'mdi-svg'

    return mergeDeep<InternalIconOptions>({ defaultSet, sets, aliases }, options)
}
