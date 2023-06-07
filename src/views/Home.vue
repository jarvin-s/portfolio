<template>
    <section id="home" class="hero">
        <div class="container mt-10 py-6 justify-center">
            <div class="content flex justify-center items-center gap-x-12 flex-col md:flex-row">
                <div class="hero-main flex justify-center items-center gap-10 flex-col md:flex-row relative">
                    <div class="hero-img"></div>
                    <div class="hero-text">
                        <h1 class="font-bold font-sans dark:text-slate-300"><span
                                class="container text-transparent flex flex-row sm:flex-col bg-clip-text bg-gradient-to-r from-blue-700 to-rose-400">Jarvin
                                Siegers</span></h1>
                        <h1 class="font-bold font-sans dark:text-white">Software Developer</h1>
                        <p class="text-xl font-sans dark:text-white">I'm a software development student based in
                            <span class="country-span font-bold">The Netherlands.</span>
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
</template>

<style>
.hero-img {
    -webkit-animation: morph 6s ease-in-out infinite;
    animation: morph 6s ease-in-out infinite;
    transition: all 1s ease-in-out;
    width: 20rem;
    height: 20rem;
    background-position: 50%;
    background-image: url("/hero-pfp.png");
    background-size: cover;
    border: 3px solid #0f0f0f;
    position: relative;
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

.country-span {
    color: #d10d16;
    background-image: -webkit-linear-gradient(270deg, #d10d16 46%, #FFFFFF 64%, #1e63c9 0%);
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
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

@media screen and (max-width: 768px) {
    .scroll-element img {
        width: 20%;
    }
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
</style>