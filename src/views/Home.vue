<template>
    <div>
        <HomeContent id="home"/>
        <About id="about"/>
        <Projects id="projects"/>
    </div>
</template>

<script>
import HomeContent from '@/views/HomeContent.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'

export default {
    components: {
        HomeContent,
        About,
        Projects
    }
}
</script>