<template>
    <footer class="absolute w-full bottom overflow-hidden">
        <div class="footers w-full relative bg-white text-black dark:bg-zinc-900 dark:text-white">
            <!-- <div class="relative w-full border-2">
                <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <path
                        d="M0 508L10.7 509.2C21.3 510.3 42.7 512.7 64.2 511.3C85.7 510 107.3 505 128.8 501.3C150.3 497.7 171.7 495.3 193 496.5C214.3 497.7 235.7 502.3 257 505.5C278.3 508.7 299.7 510.3 321.2 509C342.7 507.7 364.3 503.3 385.8 501.7C407.3 500 428.7 501 450 504.5C471.3 508 492.7 514 514.2 517.5C535.7 521 557.3 522 578.8 518.3C600.3 514.7 621.7 506.3 643 501.5C664.3 496.7 685.7 495.3 707 497.3C728.3 499.3 749.7 504.7 771.2 504.7C792.7 504.7 814.3 499.3 835.8 499.2C857.3 499 878.7 504 889.3 506.5L900 509L900 601L889.3 601C878.7 601 857.3 601 835.8 601C814.3 601 792.7 601 771.2 601C749.7 601 728.3 601 707 601C685.7 601 664.3 601 643 601C621.7 601 600.3 601 578.8 601C557.3 601 535.7 601 514.2 601C492.7 601 471.3 601 450 601C428.7 601 407.3 601 385.8 601C364.3 601 342.7 601 321.2 601C299.7 601 278.3 601 257 601C235.7 601 214.3 601 193 601C171.7 601 150.3 601 128.8 601C107.3 601 85.7 601 64.2 601C42.7 601 21.3 601 10.7 601L0 601Z"
                        fill="#242424" stroke-linecap="round" stroke-linejoin="miter"></path>
                </svg>
            </div> -->
            <div
                class="container mx-auto max-w-4xl h-full flex  flex-wrap justify-between items-center text-sm py-6 pl-6 pr-4">
                <div class="mt-4">{{ creator }}</div>
                <div class="flex pt-4 md:p-0 text-left text-xs">
                    <div class="ml-4 cursor-pointer"><a
                            class=" dark:hover:text-zinc-400 hover:text-slate-600 duration-300" target="_blank"
                            href="https://github.com/jarvin-s">
                            <Icon icon="mdi:github" width="28" />
                        </a></div>
                    <div class="ml-4 cursor-pointer"><a
                            class=" dark:hover:text-zinc-400 hover:text-slate-600 duration-300" target="_blank"
                            href="https://www.linkedin.com/in/jarvin-siegers-65bbb11bb/">
                            <Icon icon="mdi:linkedin" width="28" />
                        </a></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
    components: {
        Icon,
    },
    data() {
        return {
            creator: "Made with 🤓 by Jarvin. All rights reserved.",
            privacy: "Privacy Policy",
            tos: "Terms & Conditions",
            contactMe: "Contact me"
        }
    }
}
</script>

<style scoped></style>