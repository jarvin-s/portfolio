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
        <v-card class="mx-auto" max-width="400">
            <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
                Number 10
            </v-card-subtitle>

            <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange">
                    Share
                </v-btn>

                <v-btn color="orange">
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="mx-auto" max-width="400">
            <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
                Number 10
            </v-card-subtitle>

            <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange">
                    Share
                </v-btn>

                <v-btn color="orange">
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>
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