<template>
    <div class="bg-stone-50 dark:bg-zinc-800 sticky top-0 z-10">
        <nav class="nav-container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <RouterLink to="#home" class="text-xl  md:text-2xl">
                    <h3 class="text-black font-bold dark:text-white">jarvin.dev</h3>
                </RouterLink>
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button type="button"
                        class="text-gray-800 hover:text-gray-400 hover:border-black dark:hover:border-white focus:outline-none dark:text-white dark:hover:text-slate-400 focus:text-gray-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <ul :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 md:flex items-center md:space-y-0 md:flex-row md:space-x-2 md:mt-0">

                <li class="px-3 py-2 rounded-lg text-black dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600">
                    <RouterLink class="hover:font-bold" to="#home" v-scroll-to="'#home'"> Home </RouterLink>
                </li>

                <li class="px-3 py-2 rounded-lg text-black dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600">
                    <RouterLink class="hover:font-bold" to="#about" v-scroll-to="'#about'"> About </RouterLink>
                </li>

                <li class="px-3 py-2 rounded-lg text-black dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600">
                    <RouterLink class="hover:font-bold" to="#projects" v-scroll-to="'#projects'"> Projects </RouterLink>
                </li>

                <li class="px-3 py-2 rounded-lg text-black dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600">
                    <RouterLink class="hover:font-bold" to="#contact" v-scroll-to="'#contact'"> Contact </RouterLink>
                </li>

                <div class="flex justify-between items-center">
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
