import { inject, ref, shallowRef } from 'vue'
import en from 'power-vue/locale/en'

import { InjectionKey, Ref } from 'vue'

export type LocaleMessages = {
    [key: string]: LocaleMessages | string
}

export type LocaleOptions = {
    messages?: LocaleMessages
    locale?: string
    fallback?: string
}

export interface LocaleInstance {
    name: string
    current: Ref<string>
    fallback: Ref<string>
    messages: Ref<LocaleMessages>
}

const createAdapter = (options?: LocaleOptions): LocaleInstance => {
    const current = shallowRef<string>(options?.locale ?? 'en')
    const fallback = shallowRef<string>(options?.fallback ?? 'en')
    const messages = ref<LocaleMessages>({ en, ...options?.messages })

    return {
        name: 'power-vue',
        current,
        fallback,
        messages,
    }
}

export const LocaleSymbol: InjectionKey<LocaleInstance> = Symbol.for('power-vue:locale')

export const createLocale = (options?: LocaleOptions): LocaleInstance => createAdapter(options)

export const useLocale = (): LocaleInstance => {
    const locale = inject(LocaleSymbol)

    if (!locale) {
        throw new Error('[PowerVue] Could not find injected locale instance')
    }

    return locale
}
