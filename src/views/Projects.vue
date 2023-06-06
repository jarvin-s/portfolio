<template>
    <section id="projects" class="hero bg-zinc-100 dark:bg-slate-950">
        <div class="flex flex-wrap px-3 py-3 space-x-4 space-y-4 sm:flex-row transition ease-in-out delay-400 sm:translate-y-1 sm:px-3 sm:py-3 sm:space-x-4">
            <div v-for="repo in repos" :key="repo.id" class="card card-normal w-96 dark:bg-base-100 shadow-xl">
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
        </div>

        <!-- <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" />
            </a>
            <div v-for="repo in repos" :key="repo.id" class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ repo.name }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ repo.description }}</p>
                <a
                    class="inline-flex items-center px-3 py-2 text-sm font-medium bg-neutral-700 rounded-lg hover:bg-neutral-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                    <img class="w-7" :src="getImageSrc(repo.language)" />
                </a>
            </div>
        </div> -->

    </section>
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