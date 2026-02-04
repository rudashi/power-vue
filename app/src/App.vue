<template>
    <pre>{{  locale }}</pre>
</template>

<script setup lang="ts">
    import { useLocale } from 'power-vue'

    const locale = useLocale()
</script>
