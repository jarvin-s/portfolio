<template>
    <!-- <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <path
            d="M0 479L21.5 486.2C43 493.3 86 507.7 128.8 513C171.7 518.3 214.3 514.7 257.2 514.8C300 515 343 519 385.8 514.5C428.7 510 471.3 497 514.2 500.3C557 503.7 600 523.3 642.8 528C685.7 532.7 728.3 522.3 771.2 517.5C814 512.7 857 513.3 878.5 513.7L900 514L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#282828" stroke-linecap="round" stroke-linejoin="miter"></path>
    </svg> -->
    <div class="w-full bg-white text-black dark:bg-zinc-900 dark:text-white">
        <div class="container mx-auto max-w-4xl h-full flex flex-wrap justify-between items-start text-sm p-6 pt-8 pb-4">
            <div>
                <div class="mb-2 text-lg underline">
                    <b>Quick links</b>
                </div>
                <RouterLink to="/" class="block mb-2">Home</RouterLink>
                <RouterLink to="/projects" class="block mb-2">Projects</RouterLink>
                <RouterLink to="/contact" class="block mb-2">Contact</RouterLink>
            </div>
            <div>
                <div class="mb-2 text-lg underline">
                    Our company
                </div>
                <p class="mb-4 leading-normal">
                    123 Main Street <br>
                    London <br>
                    SW1 SW1
                </p>
                <p class="text-sm">07775 444 999</p>
            </div>
        </div>

        <div class="container mx-auto max-w-4xl h-full flex  flex-wrap justify-between items-center text-sm py-6 pl-6 pr-4">
            <div class="mt-4">Made with 🤓 by Jarvin. All rights reserved.</div>
            <div class="pt-4 md:p-0 text-left text-xs">
                <div class="no-underline hover:underline ml-4 cursor-pointer">Privacy Policy</div>
                <div class="no-underline hover:underline ml-4 cursor-pointer">Terms & Conditions</div>
                <div class="no-underline hover:underline ml-4 cursor-pointer">Contact Us</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "test"
        }
    }
}
</script>