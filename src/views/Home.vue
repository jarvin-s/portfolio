<template>
    <div>
        <HomeContent/>
        <About/>
        <Projects/>
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