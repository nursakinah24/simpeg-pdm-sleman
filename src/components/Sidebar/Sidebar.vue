<template>
  <div class="flex flex-wrap min-h-screen bg-transparent ">
    <div class="sidebar min-h-screen w-[4.5rem] overflow-hidden border-r hover:w-[22rem] hover:bg-sidebar-col hover:shadow-lg">
      <div class="flex h-screen flex-col justify-between pt-2 pb-6">
        <div class="">
          <ul class="mt-6 space-y-4">
            <li class="min-w-max" v-for="(menu, index) in menus" :key="index">
              <router-link :to="menu.to" :aria-label="menu.label" class="relative flex items-center space-x-4 px-4 py-2 text-white font-poppins transition-transform transform hover:scale-90 hover:bg-white hover:text-black hover:rounded-lg">
                <div class="flex item-center pl-1.5">
                  <font-awesome-icon :icon="menu.icon" class="w-6 h-6" />
                </div>
                <div class="flex item-center pl-4">
                  <span class="font-bold text-lg">{{ menu.label }}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  data() {
    return {
      menus: [
        { label: 'Data Diri', icon: ['fas', 'user'], to: '/personal-data', },
        { label: 'Dokumen Pribadi', icon: ['fas', 'folder-open'], to: '/personal-document', },
        { label: 'Kepangkatan', icon: ['fas', 'bookmark'], to: '/categories',},
        { label: 'Riwayat Pendidikan', icon: ['fas', 'graduation-cap'], to: '/categories',},
        { label: 'Pendidikan dan Pelatihan', icon: ['fas', 'clipboard-check'], to: '/categories',},
        { label: 'Riwayat Jabatan', icon: ['fas', 'briefcase'], to: '/categories',},
        { label: 'Data Keluarga', icon: ['fas', 'people-roof'], to: '/categories',},
        { label: 'Prestasi/Penghargaan', icon: ['fas', 'award'], to: '/categories',},
        { label: 'Penilaian Kerja', icon: ['fas', 'chart-line'], to: '/categories',},
        // Add more menu items as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
</style>
