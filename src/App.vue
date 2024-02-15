<script>
import Navbar from "./components/Navbar/Navbar.vue"
import Sidebar from "./components/Sidebar/Sidebar.vue"
import Dashboard from "./view/Dashboard.vue"

export default{
  components: {
    Navbar,
    Sidebar,
    Dashboard
  },
  data() {
    return {
      sidebarVisible: true,
    }
  }
}
</script>

<template>
  <div>
    <Navbar/>
    <Sidebar/>
  </div>
</template>

<style>

</style>
