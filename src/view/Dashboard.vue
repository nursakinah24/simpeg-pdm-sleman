<template>
    <div class="pt-8 px-10 lg:px-20 w-full relative xl:px-20 text-gray-900">
      <div class="pb-6">
        <h1 class="font-poppins font-bold text-3xl">
          Assalamualaikum, Diva Nafisyah
        </h1>
      </div>
      <div class="flex flex-row gap-2 p-8 bg-white shadow rounded-lg mb-4">
          <div class="relative flex-initial p-12 w-80 items-center justify-center">
              <img class="rounded-full shadow-md h-48 w-48" src="../assets/kucing.jpeg" />
          </div>
          <div class="relative py-12 px-4">
            <div v-for="(data, index) in datas" :key="index" class="flex flex-row items-center space-y-1.5">
              <div class="relative flex items-center w-56">
                <span class="font-bold">{{ data.label }}</span>
              </div>
              <div class="relative flex items-center w-auto">
                <span>{{ data.value }}</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        datas: [
          { label: 'Nama', value: 'Diva Nafisyah' },
          { label: 'Tempat Lahir', value: 'Bima' },
          { label: 'Tanggal Lahir', value: '12 Agustus 2003' },
          { label: 'Alamat', value: 'Perumahan Griya Ageng Bangunjiwo' },
          { label: 'No. HP', value: '0853-3869-7868' },
          { label: 'Kepangkatan Terakhir', value: '-' },
          { label: 'Pendidikan Terakhir', value: 'SMA' },
          { label: 'Jabatan Terakhir', value: '-' },
        ],
      };
    },
  };
  </script>
  