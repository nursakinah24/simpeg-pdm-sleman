<template>
    <div className="relative z-40 w-full bg-navbar-col px-5 lg:px-10 pt-3 ">
        <div className="h-20 flex items-center justify-between mx-auto ">
            <div className=''>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/Logo & Nama.svg" alt='Logo' className="w-296 h-65" />
                </a>
            </div>  
            <div class="relative ml-96" >
                <span class="flex items-center font-semibold text-xl font-poppins">Diva Nafisyah, S.Kom</span>
              </div>  
            <div>
                <div class="relative" @click="toggleDropdown">
                    <button class="flex items-center">
                        <img src="../../assets/profile.png" alt="Profile" class="px-1 pb-1"/>
                    </button>
                </div>
                <div v-if="isDropdownOpen" class="absolute right-5 z-10 mt-2 w-48 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <!-- Dropdown content goes here -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    users: [
        {nama: 'Diva Nafisyah', title: ' S.Kom'},
    ],
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>