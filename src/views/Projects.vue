<template>
    <div class="target" v-motion-slide-visible-once-right>
        <section class="bg-gray-100 dark:bg-zinc-800 px-12">
            <div class="grid grid-flow gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="repo in repos" :key="repo.id" class="card my-8 rounded-lg">
                    <figure class="m-1">
                        <img v-if="repo.name === repo.name" :src="`/my-projects/${repo.name}.png`"
                            class="rounded-t h-72 w-full object-cover" />
                    </figure>
                    <p class="text-lg ml-4 mt-4 h-8 mb-4 font-bold leading-relaxed text-white">
                        {{ repo.name }}
                    </p>
                    <div class="flex flex-row justify-end">
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
        }
    }

}
</script>

<style scoped>
.card {
    --border-size: 3px;
    --border-angle: 0turn;
    background-image: conic-gradient(from var(--border-angle), #213, #112 50%, #213), conic-gradient(from var(--border-angle), transparent 10%, #08f, #f03);
    transition-duration: 300ms;
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

/* .card {
    background: rgb(36, 35, 141);
    background: radial-gradient(circle, rgba(36, 35, 141, 1) 0%, rgba(17, 26, 68, 1) 52%);
} */
</style>