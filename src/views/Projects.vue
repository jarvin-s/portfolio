<template>
    <div class="target" v-motion-slide-visible-once-right>
        <section class="bg-gray-100 dark:bg-zinc-800 px-12">
            <div class="grid grid-flow gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="repo in repos" :key="repo.id"
                    class="my-8 bg-white dark:bg-gray-800 duration-300">
                    <a _href="link" class="cursor-pointer">
                        <figure>
                            <img v-if="repo.name === repo.name" :src="`/my-projects/${repo.name}.png`"
                                class="rounded-t h-72 w-full object-cover" />
                        </figure>
                    </a>
                    <p class="text-lg ml-4 mt-4 h-8 mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                        {{ repo.name }}
                    </p>
                    <div class="flex flex-row justify-end">
                        <a class="flex space-x-0.5 mb-1 mr-1 text-black dark:text-white dark:hover:text-slate-300 hover:text-slate-500 hover:underline duration-300" target="_blank" :href="`${repo.html_url}`">
                            <p>Code</p>
                            <Icon icon="mdi:github" width="28" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
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