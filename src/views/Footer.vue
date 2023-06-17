<template>
    <footer class="absolute w-full bottom overflow-hidden">
        <div class="footers w-full relative z-1 bg-white text-black dark:bg-zinc-900 dark:text-white">
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
            creator: "Made with 🤓 by Jarvin. All rights reserved.",
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