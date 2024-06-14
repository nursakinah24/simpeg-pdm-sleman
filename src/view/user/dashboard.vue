<template>
  <div class="mt-16 pt-8 px-10 lg:px-20 w-full relative xl:px-20 text-gray-900">
    <div class="pb-6">
      <h1 class="font-poppins font-bold text-3xl">
        Assalamualaikum, {{ userData.nama }}
      </h1>
    </div>
    <div class="flex flex-row gap-2 p-8 bg-white shadow rounded-lg mb-4">
      <div class="profile-image-container flex justify-center items-center w-48 h-48">
        <img class="rounded-full shadow-md max-w-full max-h-full" :src="getUserImage" />
      </div>
      <div class="relative py-12 px-4">
        <div v-for="(data, index) in datas" :key="index" class="flex flex-row items-center my-2">
          <div class="relative flex items-center w-56">
            <span class="font-bold">{{ data.label }}</span>
          </div>
          <div class="relative flex items-center w-auto">
            {{ Array.isArray(data.keys) ? data.keys.map(key => getProperty(userData, key)).join(', ')
          : getProperty(userData, data.key)
              }}
          </div>
        </div>
        <div class="flex flex-row my-2" v-if="userData.positions && userData.positions.length">
          <span class="relative flex items-center w-56 font-bold">Kepangkatan Terakhir</span>
          <span class="relative flex items-center w-56">{{ userData.positions[0].no_sk }}</span>
        </div>
        <div class="flex flex-row my-2" v-if="userData.educations && userData.educations.length">
          <span class="relative flex items-center w-56 font-bold">Pendidikan Terakhir</span>
          <span class="relative flex items-center w-56">{{ userData.educations[0].jenjang }}</span>
        </div>
        <div class="flex flex-row my-2" v-if="userData.titles && userData.titles.length">
          <span class="relative flex items-center w-56 font-bold">Jabatan Terakhir</span>
          <span class="relative flex items-center w-56">{{ userData.titles[0].jabatan }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import defaultImage from '../../assets/profile-person.webp'; // Import the default image

export default {
  setup() {
    const store = useStore();

    const userData = computed(() => store.state.dashboard.userData);
    const datas = [
      { label: 'Nama', key: 'nama' },
      { label: 'Tempat, Tanggal Lahir', keys: ['profile.tempat_lahir', 'profile.tanggal_lahir'] },
      { label: 'NIP', key: 'nip' },
      { label: 'Alamat', key: 'profile.alamat' },
      { label: 'No. HP', key: 'profile.nomor_telepon' },
    ];

    onMounted(() => {
      store.dispatch('fetchUserData');
    });

    // Helper function to access nested properties
    const getProperty = (obj, key) => key.split('.').reduce((o, i) => o && o[i], obj);

    const getUserImage = computed(() => {
      const imageUrl = getProperty(userData.value, 'img_url');
      return imageUrl ? imageUrl : defaultImage; // Use the imported default image
    });

    return { userData, datas, getProperty, getUserImage, };
  }
};
</script>
