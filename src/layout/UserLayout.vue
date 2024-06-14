<template>
    <div class="bg-gradient-to-r from-green-col to-blue-col">
    <NavbarUser/>
    <div class="flex">
      <SidebarUser class="" />
      <div class="flex-1 bg-gray-50 ">
        <router-view />
      </div>
    </div>
      <Footer />
  </div>
  </template>
  
  <script>
  import NavbarUser from '../components/Navbar/UserNavbar.vue';
  import SidebarUser from '../components/Sidebar/UserSidebar.vue';
  import Footer from '../components/Footer/Footer.vue';
  
  export default {
    components: {
    NavbarUser,
    SidebarUser,
    Footer,
    },
  };
  </script>
  
  <style>
  /* Add styles for the MainLayout if needed */
  </style>
  