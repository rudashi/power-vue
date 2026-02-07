import { computed, defineComponent, h } from 'vue'

import type { PropType } from 'vue'
import type { CSSClasses, SlotDefault } from 'power-vue/types'

type ColProps = {
    cols: ColumnValue
}

type ColSlots = SlotDefault

type NumericValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type StringValue = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
type ColumnValue = NumericValue | StringValue

export const VisionCol = defineComponent({
    name: 'VisionCol',
    props: {
        cols: {
            type: [String, Number] as PropType<ColumnValue>,
            default: null,
        },
    },
    setup(props: ColProps, { slots }: { slots: ColSlots }) {
        const classList = computed<CSSClasses<ColumnValue>>(() => ({
            [`vision-col-${props.cols}`]: props.cols,
        }))

        return () => h('div', {
            class: {
                'vision-col': true,
                ...classList.value,
            },
        }, slots.default?.())
    },
})

export default VisionCol
