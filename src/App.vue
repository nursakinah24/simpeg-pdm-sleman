<script>
import Navbar from "./components/Navbar/Navbar.vue"
import Sidebar from "./components/Sidebar/Sidebar.vue"
import Footer from "./components/Footer/Footer.vue"

export default{
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  data() {
  },
}
</script>

<template>
  <div class="bg-gradient-to-r from-green-col to-blue-col">
    <Navbar />
    <div class="flex mt-16">
      <Sidebar class="" />
      <div class="flex-1 bg-gray-50 ">
        <router-view />
      </div>
    </div>
      <Footer/>
  </div>
</template>

<style>

</style>
