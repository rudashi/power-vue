const isPlainObject = (value: unknown): value is Record<string, unknown> => {
    if (value === null || typeof value !== 'object') {
        return false
    }

    const proto = Object.getPrototypeOf(value)

    return proto === Object.prototype || proto === null
}

export const convertToPx = (value: string | number | null | undefined): string | undefined => {
    if (value === null || value === '' || value === undefined) {
        return undefined
    }

    const num = Number(value)

    if (isNaN(num)) {
        return String(value)
    }

    return `${value}px`
}

export const mergeDeep = <T>(base: T, patch?: Partial<T>): T => {
    if (patch === undefined) {
        return base
    }

    if (!isPlainObject(base) || !isPlainObject(patch)) {
        return patch as T
    }

    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) }

    for (const key of Object.keys(patch as Record<string, unknown>)) {
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            continue
        }

        const patchVal = (patch as Record<string, unknown>)[key]
        const baseVal = out[key]

        if (isPlainObject(baseVal) && isPlainObject(patchVal)) {
            out[key] = mergeDeep(baseVal, patchVal)
        } else {
            out[key] = patchVal
        }
    }

    return out as T
}
