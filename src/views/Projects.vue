<template>
    <section id="projects" class="hero">
        <!-- <div class="container mt-10 py-6 justify-center">
            <div class="content flex justify-center flex-col">
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div v-for="repo in repos" :key="repo.id" class="rounded bg-white overflow-hidden shadow-lg">
                        <img class="w-full" v-if="repo.name === repo.name" :src="`/my-projects/${repo.name}.png`" />
                        <div class="px-3 py-4">
                            <div class="font-bold text-xl mb-2 text-black">{{ repo.name }}</div>
                            <p class="text-gray-700 text-base">
                                {{ repo.description }}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <img class="w-10 " v-if="repo.language === repo.language"
                                :src="`/languages/${repo.language}.svg`" :alt="`${repo.language} SVG`" />
                            <img class="w-10" v-if="repo.language === 'C#'" src="/languages/Csharp.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div v-for="repo in repos" :key="repo.id" class="card-body">
                <h2 class="card-title">{{ repo.name }}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
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
        }
    }

}
</script>