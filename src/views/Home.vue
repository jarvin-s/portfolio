<template>
    <section id="home" class="hero">
        <div class="container mt-10 py-6 justify-center">
            <div class="content flex justify-center items-center gap-x-12 flex-col md:flex-row">
                <div class="hero-main flex justify-center items-center gap-10 flex-col md:flex-row relative">
                    <div class="hero-img"></div>
                    <div class="hero-text">
                        <h1 class="font-bold font-sans">Software Development student</h1>
                        <p class="text-gray-900 font-sans">My name is Jarvin Siegers and I'm a software
                            development student.</p>
                        <ul class="flex flex-row">
                            <li><img class="w-10" src="/languages/HTML.svg" /></li>
                            <li><img class="w-10" src="/languages/CSS.svg" /></li>
                            <li><img class="w-10" src="/languages/JavaScript.svg" /></li>
                            <li><img class="w-10" src="/languages/Vue.svg" /></li>
                            <li><img class="w-10" src="/languages/tailwind.svg" /></li>
                            <li><img class="w-10" src="/languages/git.svg" /></li>
                            <li><img class="w-10" src="/languages/mysql.svg" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style>
/* .content {
    display: flex;
    align-items: center;
    gap: 10rem;
    justify-content: center;
    position: relative;
} */

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
</style>