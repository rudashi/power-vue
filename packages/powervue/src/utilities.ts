const isPlainObject = (value: any): value is Record<string, any> => {
    if (value === null || typeof value !== 'object') {
        return false
    }

    const proto = Object.getPrototypeOf(value)

    return proto === Object.prototype || proto === null
}

export const mergeDeep = <T>(base: T, patch?: Partial<T>): T => {
    if (patch === undefined) {
        return base
    }

    if (!isPlainObject(base) || !isPlainObject(patch)) {
        return patch as T
    }

    const out: Record<string, any> = { ...(base as Record<string, any>) }

    for (const key of Object.keys(patch as Record<string, any>)) {
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            continue
        }

        const patchVal = (patch as Record<string, any>)[key]
        const baseVal = out[key]

        if (isPlainObject(baseVal) && isPlainObject(patchVal)) {
            out[key] = mergeDeep(baseVal, patchVal)
        } else {
            out[key] = patchVal
        }
    }

    return out as T
}
