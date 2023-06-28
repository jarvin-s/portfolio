<template>
    <div>
        <Hero id="home"/>
        <About id="about"/>
        <Projects id="projects"/>
        <Contact id="contact"/>
    </div>
</template>

<script>
import Hero from '@/views/Hero.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'

export default {
    components: {
        Hero,
        About,
        Projects,
        Contact
    }
}
</script>