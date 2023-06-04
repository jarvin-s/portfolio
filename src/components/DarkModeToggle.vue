<template>
    <button class="bg-neutral-950 dark:bg-slate-300 hover:bg-neutral-500 dark:text-neutral-950 dark:hover:bg-slate-100 transition duration-300 ease-in-out" @click="toggleDark()">
        <i inline-block align-middle i="dark:carbon-moon carbon-sun" />

        <span class="">{{ !isDark ? 'Dark' : 'Light' }}</span>
    </button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
