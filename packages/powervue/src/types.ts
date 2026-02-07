import type { CSSProperties, VNode } from 'vue'

export type CSSStyles<T extends string = string> = Partial<CSSProperties> & Partial<Record<T, string>>

export type CSSClasses<T = boolean> = Record<string, T> | string[]

export type SlotDefault = {
    default?: () => VNode | VNode[]
}
