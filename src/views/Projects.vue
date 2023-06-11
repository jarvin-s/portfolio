<template>
    <!-- <section id="projects" class="hero bg-zinc-100 dark:bg-zinc-800"> -->
    <!-- <div
            class="flex flex-col pb-80 z-1 px-3 py-3 space-x-4 space-y-4 sm:flex-row transition ease-in-out delay-400 sm:translate-y-1 sm:px-3 sm:py-3 sm:space-x-4">
            <div class="card ml-4 mt-4 card-normal w-96 dark:bg-base-100 shadow-xl">
                <figure><img class="max-w-full" v-if="repo.name === repo.name" :src="`/my-projects/${repo.name}.png`" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title font-bold text-slate-950 dark:text-zinc-50">{{ repo.name }}</h2>
                    <p class="text-slate-950 dark:text-zinc-50">If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn glass">Code</button>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- <div v-for="repo in repos" :key="repo.id" class="main">
            <h1>Responsive Card Grid Layout</h1>
            <ul class="cards">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"></div>
                        <div class="card_content">
                            <h2 class="card_title">{{ repo.name }}</h2>
                            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button class="btn card_btn">Read More</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section> -->
    <div class="target" v-motion-slide-visible-once-right>
        <section class="bg-gray-100 dark:bg-gray-900 px-12">
            <!-- Card Grid -->
            <div class="grid grid-flow gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <!-- Card Item -->
                <div v-for="repo in repos" :key="repo.id"
                    class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
                    <!-- Clickable Area -->
                    <a _href="link" class="cursor-pointer">
                        <figure>
                            <!-- Image -->
                            <img v-if="repo.name === repo.name" :src="`/my-projects/${repo.name}.png`"
                                class="rounded-t h-72 w-full object-cover" />
                        </figure>
                    </a>
                    <!-- Title -->
                    <p class="text-lg ml-4 mt-4 h-8 mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                        {{ repo.name }}<!-- Post Title -->
                    </p>
                    <!-- Description -->
                    <small class="leading-5 text-gray-500 dark:text-gray-400" x-text="post.description">
                        <!-- Post Description -->
                    </small>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            repos: [],
            show: false
        }
    },
    async mounted() {
        try {
            let response = await fetch("https://api.github.com/users/jarvin-s/repos");
            this.repos = await response.json();

            this.repos = this.filteredRepos(this.repos);
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        filteredRepos(repos) {
            return repos.filter(repo => !["meepspeak", "plugin-hub"].includes(repo.name));
        },
        getImageSrc(language) {
            if (language === 'C#') {
                return '/languages/Csharp.svg';
            } else {
                return `/languages/${language}.svg`;
            }
        },
        getFirstImageSrc(name) {
            let repo;
            for (let i = 0; i < this.repos.length; i++) {
                repo = this.repos[i];
            }
            if (repo.name === repo.name) {
                return `/my-projects/${repo.name}.png`;
            }
        }
    }

}
</script>

<style scoped>
h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

.btn {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
}

.btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
}

.cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
}

.cards_item {
    display: flex;
    padding: 1rem;
}

/* @media (min-width: 40rem) {
    .cards_item {
        width: 50%;
    }
}

@media (min-width: 56rem) {
    .cards_item {
        width: 33.3333%;
    }
} */

.card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.card_content {
    padding: 1rem;
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
}

.card_title {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
}

.card_text {
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    font-weight: 400;
}
</style>