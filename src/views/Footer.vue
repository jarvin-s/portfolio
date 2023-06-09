<template>
    <footer class="absolute w-full bottom overflow-hidden">
        <!-- <svg id="visual" class="absolute w-full bg-repeat bg-cover z-10" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path
                d="M0 479L21.5 486.2C43 493.3 86 507.7 128.8 513C171.7 518.3 214.3 514.7 257.2 514.8C300 515 343 519 385.8 514.5C428.7 510 471.3 497 514.2 500.3C557 503.7 600 523.3 642.8 528C685.7 532.7 728.3 522.3 771.2 517.5C814 512.7 857 513.3 878.5 513.7L900 514L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                fill="#282828" stroke-linecap="round" stroke-linejoin="miter"></path>
        </svg> -->
        <div class="footers w-full relative z-1 bg-stone-50 text-black dark:bg-zinc-900 dark:text-white">
            <div
                class="container mx-auto max-w-4xl h-full flex  flex-wrap justify-between items-center text-sm py-6 pl-6 pr-4">
                <div class="mt-4">{{ creator }}</div>
                <div class="pt-4 md:p-0 text-left text-xs">
                    <div class="no-underline hover:underline ml-4 cursor-pointer">{{ privacy }}</div>
                    <div class="no-underline hover:underline ml-4 cursor-pointer">{{ tos }}</div>
                    <div class="no-underline hover:underline ml-4 cursor-pointer">{{ contactMe }}</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: "Quick links",
            creator: "Made with 🤓 by Jarvin. All rights reserved.",
            home: "Home",
            projects: "Projects",
            contact: "Contact",
            privacy: "Privacy Policy",
            tos: "Terms & Conditions",
            contactMe: "Contact me"
        }
    }
}
</script>

<style scoped>
.waves {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>