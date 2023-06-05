<template>
    <div class="bg-stone-50 dark:bg-zinc-900 top-0">
        <nav class="nav-container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <RouterLink to="/" class="text-xl  md:text-2xl">
                    <h3 class="text-black font-bold dark:text-white">jarvin.dev</h3>
                </RouterLink>
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <ul :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-1 md:mt-0">

                <li class="px-3 py-2 rounded-lg text-black dark:text-white hover:bg-gray-300">
                    <RouterLink :to="'/'"> Home </RouterLink>
                </li>

                <li class="px-3 py-2 rounded-lg text-black dark:text-white hover:bg-gray-300">
                    <RouterLink :to="'/projects'"> Projects </RouterLink>
                </li>

                <li class="px-3 py-2 rounded-lg text-black dark:text-white hover:bg-gray-300">
                    <RouterLink :to="'/contact'"> Contact </RouterLink>
                </li>

                <div class="flex justify-between items-center hidden sm:block">
                    <DarkModeToggle />
                </div>
            </ul>
        </nav>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
export default {
    components: {
        DarkModeToggle
    },
    data() {
        return {
            showMenu: false,
            isActive: true
        };
    },
};
</script>
