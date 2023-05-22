<template>
    <section id="projects" class="hero">
        <div class="container mt-10 py-6 justify-center">
            <div class="content flex justify-center flex-col">
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <!--Card 1-->
                    <div v-for="repo in repos" :key="repo.id" class="rounded bg-white overflow-hidden shadow-lg">
                        <img class="w-full" src="" alt="Mountain">
                        <div class="px-3 py-4">
                            <div class="font-bold text-xl mb-2 text-black">{{ repo.name }}</div>
                            <p class="text-gray-700 text-base">
                                {{ repo.description }}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
                                    repo.language }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            repos: []
        }
    },
    async mounted() {
        try {
            let response = await fetch("https://api.github.com/users/jarvin-s/repos");
            this.repos = await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}
</script>