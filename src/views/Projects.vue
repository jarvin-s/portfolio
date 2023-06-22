<template>
    <div class="target" v-motion-slide-visible-once-bottom>
        <section class="bg-gray-100 dark:bg-zinc-800 px-12 pt-40 pb-80">
            <div class="grid grid-flow gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="repo in repos" :key="repo.id" class="card my-8">
                    <figure class="m-0.5">
                        <img v-if="repo.name === repo.name" :src="`/my-projects/${repo.name}.png`"
                            class="rounded-t h-72 w-full object-cover" />
                    </figure>
                    <p class="text-lg ml-4 mt-4 h-8 mb-4 font-bold text-white">
                        {{ repo.name }}
                    </p>
                    <p v-if="repo.name === repo.name" class="ml-4">{{ repo.description }}</p>
                    <div class="flex justify-center sm:justify-end mr-2 mt-6 space-x-2 mb-2">
                        <a class="btn-send-light dark:btn-send-dark cursor-pointer flex dark:text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            type="button">
                            Live demo
                            <Icon class="ml-1 " icon="clarity:pop-out-line" width="24" />
                        </a>
                        <a target="_blank" :href="`${repo.html_url}`"
                            class="btn-send-light dark:btn-send-dark cursor-pointer flex dark:text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                            Code
                            <Icon class="ml-1 " icon="mdi:github" width="24" />
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
            show: false,
            Challenge_TV_Serie: "School assignment in the first year",
            hcgroupapp: "Internship assignment for a second interview",
            portfolio: "Personal project, creating my own portfolio",
            Project_SunTours_jarvin: "School assignment in the first year"
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
        }
    }

}
</script>

<style scoped>
.card {
    --border-size: 3px;
    --border-angle: 0turn;
    border-radius: 0.2rem;
    background-image: conic-gradient(from var(--border-angle), #213, #112 50%, #213), conic-gradient(from var(--border-angle), transparent 10%, rgb(234, 0, 255), #f03);
}

.card:hover {
    background-size: calc(100% - (var(--border-size) * 2)) calc(100% - (var(--border-size) * 2)), cover;
    background-position: center center;
    background-repeat: no-repeat;
    animation: bg-spin 5s linear infinite;
}

@keyframes bg-spin {
    to {
        --border-angle: 1turn;
    }
}

@property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}
</style>