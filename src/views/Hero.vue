<template>
    <div class="target" ref="targetEl" v-motion-roll-bottom>
        <section id="home" class="hero bg-zinc-100 dark:bg-zinc-800">
            <!-- <div class="absolute w-full border-2 hidden md:block">
                <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%"><stop offset="20%" stop-color="#001220" stop-opacity="1"></stop><stop offset="80%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%"><stop offset="20%" stop-color="#001220" stop-opacity="1"></stop><stop offset="80%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(900, 600)"><path d="M-189.3 0C-189.3 -17.9 -189.4 -35.7 -179.7 -48.1C-170 -60.6 -150.6 -67.5 -142.9 -82.5C-135.2 -97.5 -139.3 -120.4 -130.1 -130.1C-120.9 -139.8 -98.3 -136.2 -83.5 -144.6C-68.7 -153 -61.6 -173.4 -49 -182.8C-36.4 -192.3 -18.2 -190.8 0 -189.3L0 0Z" fill="#FBAE3C"></path></g><g transform="translate(0, 0)"><path d="M189.3 0C191.4 18 193.5 36.1 182.8 49C172.2 61.9 148.8 69.6 134.2 77.5C119.6 85.4 113.8 93.4 109.6 109.6C105.4 125.8 102.9 150.2 91.5 158.5C80.1 166.7 59.9 158.9 43.2 161.3C26.5 163.8 13.3 176.5 0 189.3L0 0Z" fill="#FBAE3C"></path></g></svg>                        
            </div> -->
            <div class="content py-6 items-center gap-x-12 pb-40">
                <div class="hero-main w-1/3 m-40 h-80 flex justify-center items-center flex-col md:flex-row relative">
                    <div class="absolute z-0 w-[90%] h-[35%] top-0 gradient-1"></div>
                    <div class="absolute z-0 w-[80%] h-[80%] rounded-full bottom-40 gradient-2"></div>
                    <div class="absolute z-0 w-[80%] h-[50%] right-20 bottom-20 gradient-3"></div>
                    <div class="hero-text flex md:flex-row text-center md:text-left">
                        <h1 class="text-2xl font-bold text-blue-500 dark:text-blue-500 text-center md:text-left">Hi, my name
                            is
                        </h1>
                        <h1 class="text-6xl dark:text-slate-300 text-center md:text-left"><span
                                class="text-center md:text-left">Jarvin
                                Siegers</span></h1>
                        <h1 class="text-3xl text-center md:text-left dark:text-white opacity-60">Software
                            Developer
                        </h1>
                        <div class="flex flex-row justify-center md:justify-start overflow-hidden items-center mt-6">
                            <div class="scroll-parent">
                                <div class="scroll-element primary">
                                    <img class="w-10" src="/languages/HTML.svg" />
                                    <img class="w-10" src="/languages/CSS.svg" />
                                    <img class="w-10" src="/languages/JavaScript.svg" />
                                    <img class="w-10" src="/languages/Vue.svg" />
                                    <img class="w-10" src="/languages/tailwind.svg" />
                                    <img class="w-10" src="/languages/git.svg" />
                                    <img class="w-10" src="/languages/mysql.svg" />
                                </div>
                                <div class="scroll-element secondary">
                                    <img class="w-10" src="/languages/HTML.svg" />
                                    <img class="w-10" src="/languages/CSS.svg" />
                                    <img class="w-10" src="/languages/JavaScript.svg" />
                                    <img class="w-10" src="/languages/Vue.svg" />
                                    <img class="w-10" src="/languages/tailwind.svg" />
                                    <img class="w-10" src="/languages/git.svg" />
                                    <img class="w-10" src="/languages/mysql.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'
const targetEl = ref()

useMotion(targetEl, {
    enter: {
        transition: {
            duration: 2000,
        }
    }
});
</script>

<style scoped>
.hero-img {
    -webkit-animation: morph 6s ease-in-out infinite;
    animation: morph 6s ease-in-out infinite;
    transition: all 1s ease-in-out;
    width: 20rem;
    height: 20rem;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("/jarvin.png");
    max-width: 300px;
}

.hero-text {
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    position: relative;
}

@keyframes morph {
    0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
        border-radius: 30% 70% 60% 40%/70% 60% 40% 30%;
    }

    100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

}

.scroll-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    margin-top: 2rem;
}

.scroll-parent {
    position: absolute;
    width: 28.3vw;
    height: 20rem;
    padding: 2rem 0;
    overflow-x: hidden;
}

.scroll-element {
    width: inherit;
    height: inherit;
    position: absolute;
    right: 0%;
    top: 0%;
    animation: primary 12s linear infinite;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.scroll-element img {
    width: 6%;
}

.primary {
    animation: primary 12s linear infinite;
}

.secondary {
    animation: secondary 12s linear infinite;
}

@keyframes primary {
    from {
        right: 0%;
    }

    to {
        right: -100%;
    }
}

@keyframes secondary {
    from {
        right: 100%;
    }

    to {
        right: 0%;
    }
}

/* Gradients */
.gradient-1 {
    background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #046cce 100%);
    filter: blur(123px);
}

.gradient-2 {
    background: linear-gradient(90deg, #500b88 0%, #580970 100%);
    filter: blur(500px);
}

.gradient-3 {
    background: rgba(149, 62, 231, 0.6);
    filter: blur(400px);
}

.wave {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}

@keyframes wave-animation {
    0% {
        transform: rotate(0.0deg)
    }

    10% {
        transform: rotate(14.0deg)
    }

    20% {
        transform: rotate(-8.0deg)
    }

    30% {
        transform: rotate(14.0deg)
    }

    40% {
        transform: rotate(-4.0deg)
    }

    50% {
        transform: rotate(10.0deg)
    }

    60% {
        transform: rotate(0.0deg)
    }

    100% {
        transform: rotate(0.0deg)
    }
}
</style>