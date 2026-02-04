import type { ThemeDefinition } from 'power-vue/composables/theme'

const theme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#121212',
        surface: '#212121',
        primary: '#2196F3',
        secondary: '#54B6B2',
        error: '#CF6679',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        'on-background': '#fff',
        'on-surface': '#000',
        'on-primary': '#fff',
        'on-secondary': '#fff',
        'on-success': '#fff',
        'on-warning': '#fff',
        'on-error': '#fff',
        'on-info': '#fff',
    },
    variables: {
        'border-color': '#FFFFFF',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 1,
        'medium-emphasis-opacity': 0.70,
        'disabled-opacity': 0.50,
        'idle-opacity': 0.10,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.16,
        'dragged-opacity': 0.08,
        'theme-kbd': '#424242',
        'theme-on-kbd': '#FFFFFF',
        'theme-code': '#343434',
        'theme-on-code': '#CCCCCC',
    },
}

export default theme
