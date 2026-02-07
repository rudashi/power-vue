import { createApp } from 'vue'
import { createPowerVue } from 'power-vue'
import { pl } from 'power-vue/locale'
import App from './App.vue'

createApp(App)
    .use(createPowerVue({
        locale: {
            locale: 'pl',
            messages: { pl },
        },
    }))
    .mount('#app')
