import type { ThemeDefinition } from 'power-vue/composables/theme'

const theme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        error: '#d32f2f',
        info: '#2196F3',
        primary: '#1867C0',
        secondary: '#4caf50',
        success: '#4CAF50',
        surface: '#FFFFFF',
        warning: '#FB8C00',
        'on-background': '#000',
        'on-error': '#fff',
        'on-info': '#fff',
        'on-primary': '#fff',
        'on-secondary': '#fff',
        'on-success': '#fff',
        'on-surface': '#000',
        'on-warning': '#fff',
    },
    variables: {
        'border-color': '#000000',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.6,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        'theme-kbd': '#EEEEEE',
        'theme-on-kbd': '#000000',
        'theme-code': '#F5F5F5',
        'theme-on-code': '#000000'
    },
}

export default theme
