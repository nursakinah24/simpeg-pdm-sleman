<template>
  <div class="pt-4">
    <div class="flex p-4 bg-white shadow rounded-lg mb-4 border-solid border-2">
      <div v-if="userData">
        <div class="flex flex-row border-b border-gray-200 px-4 py-5">
          <dl class="divide-y divide-gray-200">
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Nama
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.nama }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                ID Kepegawaian
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.nip }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Tempat, Tanggal Lahir
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.profile.tempat_lahir }}, {{ userData.profile.tanggal_lahir }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Jenis Kelamin
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ formatJenisKelamin(userData.profile.jenis_kelamin) }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Agama
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.profile.agama }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Status Kepegawaian
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.status_kepegawaian }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Jabatan Saat Ini
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.titles[0]?.jabatan }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Unit Kerja Saat Ini
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.unit_kerja.nama }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                No. Telp / Hp
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.profile.no_telepon }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Email
              </dt>
              <dd class="mt-1 text-sm text-gray-900 px-12 col-span-2">
                {{ userData.email }}
              </dd>
            </div>
            <div class="py-3 grid grid-cols-3 gap-8 px-6">
              <dt class="text-sm text-black font-semibold">
                Alamat
              </dt>
              <dd class="mt-1 text-sm text-gray-900  px-12 col-span-2">
                {{ userData.profile.alamat }}
              </dd>
            </div>
          </dl>
          <div class="profile-image-container flex justify-center items-center w-48 h-48">
            <img class="rounded-full shadow-md max-w-full max-h-full" :src="userData.img_url" />
          </div>
        </div>
      </div>
      <div v-else-if="loading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <p>Data not available.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true);

    watch(() => props.userData, (newValue) => {
      if (newValue) {
        loading.value = false;
      }
    }, { immediate: true });

    const formatJenisKelamin = (jenisKelamin) => {
      if (jenisKelamin !== null && typeof jenisKelamin !== 'undefined') {
        return jenisKelamin.replace(/_/g, '-');
      } else {
        return ''; // Or handle the null/undefined case as per your requirement
      }
    };

    return {
      loading, formatJenisKelamin
    };
  }
};
</script>

<style scoped>
/* Your component styles */
</style>
