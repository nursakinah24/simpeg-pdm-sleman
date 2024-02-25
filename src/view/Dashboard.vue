<template>
    <div class="pt-8 px-10 lg:px-20 w-full relative xl:px-20 text-gray-900">
      <div class="pb-6">
        <h1 class="font-poppins font-bold text-3xl">
          Selamat Datang, Diva Nafisyah
        </h1>
      </div>

      <div class="flex flex-col gap-10 md:flex-row items-center p-8 bg-white shadow rounded-lg mb-4">
        <div class="w-96 md:1/3 flex justify-center">
            <img class="rounded-full h-48 w-48 overflow-hidden shadow-md" src="../assets/profile.png" />
        </div>
        <div class="w-full md:w-1/2 flex-1 flex-cols gap-4 font-poppins">
          <div v-for="(data, index) in datas" :key="index" class="flex items-center mb-4">
            <div class=" flex w-1/4 md:w-2/3 items-center">
              <span class="font-bold">{{ data.label }}</span>
            </div>
            <div class=" flex items-center">
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
          { label: 'Nama', value: 'example' },
          { label: 'Tempat Lahir', value: 'example' },
          { label: 'Tanggal Lahir', value: 'example' },
          { label: 'Alamat', value: 'example' },
          { label: 'No. HP', value: 'example' },
          { label: 'Kepangkatan Terakhir', value: 'example' },
          { label: 'Pendidikan Terakhir', value: 'example' },
          { label: 'Jabatan Terakhir', value: 'example' },
        ],
      };
    },
  };
  </script>
  