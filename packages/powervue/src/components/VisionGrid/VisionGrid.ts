import { computed, defineComponent, h } from 'vue'
import { convertToPx } from 'power-vue/utilities'

import type { PropType, SlotsType } from 'vue'
import type { CSSStyles, SlotDefault } from 'power-vue/types'

type GridProps = {
    rowGap: string | number
    columnGap: string | number
}

type GridSlots = SlotDefault

type GridStyles = CSSStyles<'row-gap' | 'column-gap'>

export const VisionGrid = defineComponent({
    name: 'VisionGrid',
    props: {
        rowGap: {
            type: [String, Number] as PropType<GridProps['rowGap']>,
            default: undefined,
        },
        columnGap: {
            type: [String, Number] as PropType<GridProps['columnGap']>,
            default: undefined,
        },
    },
    slots: {} as SlotsType<GridSlots>,
    setup(props: GridProps, { slots }: { slots: GridSlots }) {
        const styles = computed<GridStyles>(() => {
            const styles: GridStyles = {}

            if (props.rowGap) {
                styles['row-gap'] = convertToPx(props.rowGap)
            }

            if (props.columnGap) {
                styles['column-gap'] = convertToPx(props.columnGap)
            }

            return styles
        })

        return () => h('div', {
            class: { 'vision-grid': true },
            style: styles.value,
        }, slots.default?.())
    },
})

export default VisionGrid
