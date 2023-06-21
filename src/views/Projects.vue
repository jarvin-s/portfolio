<template>
    <div class="target" v-motion-slide-visible-once-right>
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
                    <div class="flex flex-row justify-end">
                        <p></p>
                        <a class="flex space-x-0.5 mb-1 mr-1 text-white dark:hover:text-slate-300 hover:text-slate-500 hover:underline duration-300"
                            target="_blank" :href="`${repo.html_url}`">
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
    --border-size: 1.8px;
    --border-angle: 0turn;
    border-radius: 0.2rem;
    background-image: conic-gradient(from var(--border-angle), #213, #112 50%, #213), conic-gradient(from var(--border-angle), transparent 10%, #08f, #f03);
    transition: 300ms;
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