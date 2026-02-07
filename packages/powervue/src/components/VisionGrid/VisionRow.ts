import { computed, defineComponent, h } from 'vue'

import type { PropType } from 'vue'
import type { CSSClasses, SlotDefault } from 'power-vue/types'

type AlignmentValue = 'start' | 'end' | 'center'
type JustifyValue = AlignmentValue | 'space-between' | 'space-around' | 'space-evenly'

type RowProps = {
    align: AlignmentValue
    justify: JustifyValue
    noGutters: boolean
}

type RowSlots = SlotDefault

export const VisionRow = defineComponent({
    name: 'VisionRow',
    props: {
        align: {
            type: String as PropType<AlignmentValue>,
            default: null,
        },
        justify: {
            type: String as PropType<JustifyValue>,
            default: null,
        },
        noGutters: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    },
    setup(props: RowProps, { slots }: { slots: RowSlots }) {
        const classList = computed<CSSClasses>(() => ({
            [`align-${props.align}`]: !!props.align,
            [`justify-${props.justify}`]: !!props.justify,
            'no-gutters': props.noGutters,
        }))

        return () => h('div', {
            class: {
                'vision-row': true,
                ...classList.value,
            },
        }, slots.default?.())
    },
})

export default VisionRow
