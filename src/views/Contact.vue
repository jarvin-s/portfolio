<template>
    <div class="target" v-motion-slide-visible-once-left>
        <section
            class="contact border-4 bg-white dark:bg-zinc-900 pt-20 pb-20 flex relative justify-center items-center w-full">
            <form class="bg-zinc-300 w-1/3 dark:bg-black rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
                <Icon class="flex" icon="material-symbols:contact-page"/><h2 class="mb-4 text-2xl text-black dark:text-white font-semibold">Contact</h2>
                <div class="mb-4">
                    <label class="block text-black dark:text-white text-sm font-bold mb-2" for="firstname">
                        First name
                    </label>
                    <input
                        class="shadow-sm border border-black dark:border-white rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstname" type="text" placeholder="First name" />
                </div>
                <div class="mb-4">
                    <label class="block text-black dark:text-white text-sm font-bold mb-2" for="lastname">
                        Last name
                    </label>
                    <input
                        class="shadow-sm border border-black dark:border-white rounded  w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Last name" />
                </div>
                <div class="mb-4">
                    <label class="block text-black dark:text-white text-sm font-bold mb-2" for="email">
                        Email address
                    </label>
                    <input
                        class="shadow-sm border border-black dark:border-white rounded  w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email address" />
                </div>
                <div class="mb-4">
                    <label class="block text-black dark:text-white text-sm font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea
                        class="shadow-sm border border-black dark:border-white rounded  w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" type="text" placeholder="Your message"></textarea>
                </div>
                <button
                    class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Submit
                </button>
            </form>
        </section>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped></style>