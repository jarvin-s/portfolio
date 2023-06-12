<template>
    <div>
        <HomeContent id="home"/>
        <About id="about"/>
        <Projects id="projects"/>
        <Contact id="contact"/>
    </div>
</template>

<script>
import HomeContent from '@/views/HomeContent.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from'@/views/Contact.vue'

export default {
    components: {
        HomeContent,
        About,
        Projects,
        Contact
    }
}
</script>