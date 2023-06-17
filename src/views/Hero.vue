<template>
    <div class="target" ref="targetEl" v-motion-roll-bottom>
        <section id="home" class="hero flex flex-row relative bg-zinc-100 dark:bg-zinc-800">
            <div class="container py-6">
                <div class="content flex items-center gap-x-12 ">
                    <div class="hero-main flex items-center gap-10 pb-[500px] flex-col md:flex-row relative">
                        <div class="absolute z-0 w-[90%] h-[35%] top-0 gradient-1"></div>
                        <div class="absolute z-0 w-[80%] h-[80%] rounded-full bottom-40 gradient-2"></div>
                        <div class="absolute z-0 w-[80%] h-[50%] right-20 bottom-20 gradient-3"></div>
                        <div class="hero-text flex-col md:flex-row text-center md:text-left">
                            <h1 class="flex font-bold dark:text-slate-300 text-center">
                                <p class="flex text-3xl">Hey!</p><span class="wave">👋</span><span class="text-5xl">My name is</span>
                                <span
                                    class="container text-5xl animate-text text-transparent text-center md:text-left bg-clip-text bg-gradient-to-br from-blue-600 to-pink-400">Jarvin
                                    Siegers</span>
                            </h1>
                            <h1 class="font-bold text-3xl text-center md:text-left dark:text-white">Software
                                Developer
                            </h1>
                            <p class="text-xl text-black dark:text-white sm:text-left text-center">I'm a software
                                development student from
                                <span class="country-span font-bold text-center">The Netherlands</span>.
                            </p>
                            <div class="flex flex-row overflow-hidden items-center mt-6">
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
            duration: 20000,
        }
    }
})
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

.country-span:hover {
    color: #d10d16;
    background-image: -webkit-linear-gradient(270deg, #d10d16 46%, #FFFFFF 64%, #1e63c9 0%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Infinite scroll animation */
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

#skeleton {
    animation: fadeInUp 1s;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#bolt g {
    opacity: 0;
    animation: dropIn 4s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: calc(var(--order) * 200ms);
    animation-iteration-count: infinite;
}

@keyframes dropIn {
    20% {
        opacity: 0;
        transform: translateY(-20%);
    }

    30%,
    100% {
        opacity: 1;
        transform: translateY(0);
    }

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

    /* The following five values can be played with to make the waving more or less extreme */
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

    /* Reset for the last half to pause */
    100% {
        transform: rotate(0.0deg)
    }
}
</style>